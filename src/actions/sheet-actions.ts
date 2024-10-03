'use server'

import { auth } from '@/auth'
import { db } from '@/lib/db'
import { GetAllSheetsAction } from '@/types/sheet-actions'
import { CharacterSheet } from '@prisma/client'

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

export const updateField = async ({
  sheetId,
  newSheet,
}: {
  sheetId: string
  newSheet: CharacterSheet
}): Promise<ActionsResponse> => {
  try {
    const session = await auth()
    if (!session) throw new Error('Unauthorized')

    await db.characterSheet.update({
      where: {
        id: sheetId,
      },
      data: newSheet,
    })

    return { status: 'success', error: null }
  } catch (error) {
    console.error(error)
    return { error: 'error 500', status: 'error' }
  }
}
