'use server'

import { signIn } from '@/auth'
import { db } from '@/lib/db'
import { LoginSchema, RegisterSchema } from '@/lib/zod'
import { AuthError } from 'next-auth'
import { z } from 'zod'
import bcrypt from 'bcryptjs'

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  try {
    await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    })
    return { status: 'success', error: null }
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message, status: 'error' }
    }
    return { error: 'error 500', status: 'error' }
  }
}

export const registerAction = async (
  values: z.infer<typeof RegisterSchema>
) => {
  try {
    const { data, success } = RegisterSchema.safeParse(values)
    if (!success) throw new Error('Invalid data')

    const user = await db.user.findFirst({
      where: {
        email: data.email,
      },
    })
    if (user) throw new Error('User already exists')

    const passwordHash = await bcrypt.hash(data.password, 10)
    await db.user.create({
      data: {
        email: data.email,
        password: passwordHash,
        name: data.username,
      },
    })

    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    return { status: 'success', error: null }
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message, status: 'error' }
    }
    return { error: 'error 500', status: 'error' }
  }
}
