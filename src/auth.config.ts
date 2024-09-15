import type { NextAuthConfig } from 'next-auth'
import credentials from 'next-auth/providers/credentials'
import { LoginSchema } from './lib/zod'
import { db } from './lib/db'
import bcrypt from 'bcryptjs'

export default {
  providers: [
    credentials({
      authorize: async (credentials) => {
        const { data, success } = LoginSchema.safeParse(credentials)

        if (!success) throw new Error('Invalid credentials')

        // Verificar si existe el usuario
        const user = await db.user.findFirst({
          where: {
            email: data.email,
          },
        })

        if (!user || !user.password) throw new Error('No user found')

        // Verificar si la contraseña es correcta
        const passwordMatch = await bcrypt.compare(data.password, user.password)
        if (!passwordMatch) throw new Error('Invalid password')

        return user
      },
    }),
  ],
} satisfies NextAuthConfig
