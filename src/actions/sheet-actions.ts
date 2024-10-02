'use server'

import { auth } from '@/auth'
import { db } from '@/lib/db'

export const getAllSheetsAction = async (): Promise<GetAllSheetsAction> => {
  try {
    const session = await auth()
    if (!session) throw new Error('Unauthorized')

    const sheet = await db.characterSheet.findMany({
      where: {
        ownerId: session.user.id,
      },
    })

    return { status: 'success', error: null, response: sheet }
  } catch (error) {
    console.error(error)
    return { error: 'error 500', status: 'error' }
  }
}
