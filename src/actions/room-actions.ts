'use server'

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

    const newRoom = await db.room.create({
      data: {
        name: data.name,
        description: data.description,
        limit: data.limit,
        owner: { connect: { id: 'asdadasd' } }, // CAMBIAR ESTO!!
      },
    })
  } catch (error) {
    console.error(error)
  }
}
