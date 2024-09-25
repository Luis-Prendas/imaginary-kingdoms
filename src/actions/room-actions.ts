'use server'

import { auth } from '@/auth'
import { db } from '@/lib/db'
import { RoomSchema } from '@/lib/zod'
import { z } from 'zod'

export const createRoomAction = async (values: z.infer<typeof RoomSchema>) => {
  try {
    const { data, success } = RoomSchema.safeParse(values)
    if (!success) throw new Error('Invalid data')

    // Validate if the room name already exists
    const room = await db.room.findFirst({
      where: {
        name: data.name,
      },
    })
    if (room) throw new Error('Room already exists')

    // Get the user ID from the session
    const session = await auth()
    if (!session) throw new Error('Unauthorized')

    // Create the room
    const newRoom = await db.room.create({
      data: {
        name: data.name,
        description: data.description,
        limit: data.limit,
        owner: { connect: { id: session.user.id } },
      },
    })

    console.log(newRoom)

    return { status: 'success', error: null }
  } catch (error) {
    console.error(error)
    return { error: 'error 500', status: 'error' }
  }
}
