'use server'
import { auth } from '@/auth'
import { db } from '@/lib/db'
import { ActionTypesCharacterSheet, ActionTypesCharacterSheets } from '@/types/sheet-actions'
import { CharacterSheet, SavingThrow, Skill, Stat } from '@prisma/client'

export const createSheetAction = async (): Promise<ActionTypesCharacterSheet> => {
  try {
    const session = await auth()
    if (!session) throw new Error('Unauthorized')

    const newSheet = await db.characterSheet.create({
      data: {
        name: 'New Character',
        description: 'New Character Description',
        level: 1,
        race: 'human',
        class: 'barbarian',
        owner: { connect: { id: session.user.id } },
      },
    })

    await db.stat.createMany({
      data: [
        { statType: 'STRENGTH', value: 10, modifier: 0, characterSheetId: newSheet.id, order: 1 },
        { statType: 'DEXTERITY', value: 10, modifier: 0, characterSheetId: newSheet.id, order: 2 },
        { statType: 'CONSTITUTION', value: 10, modifier: 0, characterSheetId: newSheet.id, order: 3 },
        { statType: 'INTELLIGENCE', value: 10, modifier: 0, characterSheetId: newSheet.id, order: 4 },
        { statType: 'WISDOM', value: 10, modifier: 0, characterSheetId: newSheet.id, order: 5 },
        { statType: 'CHARISMA', value: 10, modifier: 0, characterSheetId: newSheet.id, order: 6 },
      ],
    })
    await db.savingThrow.createMany({
      data: [
        { statType: 'STRENGTH', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 1 },
        { statType: 'DEXTERITY', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 2 },
        { statType: 'CONSTITUTION', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 3 },
        { statType: 'INTELLIGENCE', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 4 },
        { statType: 'WISDOM', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 5 },
        { statType: 'CHARISMA', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 6 },
      ],
    })
    await db.skill.createMany({
      data: [
        { skillType: 'ATHLETICS', statType: 'STRENGTH', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 1 },
        {
          skillType: 'ACROBATICS',
          statType: 'DEXTERITY',
          value: 10,
          proficiency: false,
          characterSheetId: newSheet.id,
          order: 2,
        },
        {
          skillType: 'SLEIGHT_OF_HAND',
          statType: 'DEXTERITY',
          value: 10,
          proficiency: false,
          characterSheetId: newSheet.id,
          order: 3,
        },
        { skillType: 'STEALTH', statType: 'DEXTERITY', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 4 },
        { skillType: 'ARCANA', statType: 'INTELLIGENCE', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 5 },
        {
          skillType: 'HISTORY',
          statType: 'INTELLIGENCE',
          value: 10,
          proficiency: false,
          characterSheetId: newSheet.id,
          order: 6,
        },
        {
          skillType: 'INVESTIGATION',
          statType: 'INTELLIGENCE',
          value: 10,
          proficiency: false,
          characterSheetId: newSheet.id,
          order: 7,
        },
        { skillType: 'NATURE', statType: 'INTELLIGENCE', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 8 },
        {
          skillType: 'RELIGION',
          statType: 'INTELLIGENCE',
          value: 10,
          proficiency: false,
          characterSheetId: newSheet.id,
          order: 9,
        },
        {
          skillType: 'ANIMAL_HANDLING',
          statType: 'WISDOM',
          value: 10,
          proficiency: false,
          characterSheetId: newSheet.id,
          order: 10,
        },
        { skillType: 'INSIGHT', statType: 'WISDOM', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 11 },
        { skillType: 'MEDICINE', statType: 'WISDOM', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 12 },
        { skillType: 'PERCEPTION', statType: 'WISDOM', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 13 },
        { skillType: 'SURVIVAL', statType: 'WISDOM', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 14 },
        { skillType: 'DECEPTION', statType: 'CHARISMA', value: 10, proficiency: false, characterSheetId: newSheet.id, order: 15 },
        {
          skillType: 'INTIMIDATION',
          statType: 'CHARISMA',
          value: 10,
          proficiency: false,
          characterSheetId: newSheet.id,
          order: 16,
        },
        {
          skillType: 'PERSUASION',
          statType: 'CHARISMA',
          value: 10,
          proficiency: false,
          characterSheetId: newSheet.id,
          order: 17,
        },
        {
          skillType: 'PERFORMANCE',
          statType: 'CHARISMA',
          value: 10,
          proficiency: false,
          characterSheetId: newSheet.id,
          order: 18,
        },
      ],
    })

    return { status: 'success', error: null, response: newSheet }
  } catch (error) {
    console.error(error)
    return { error: 'error 500', status: 'error' }
  }
}

export const getSheetByIdAction = async ({ sheetId }: { sheetId: string }) => {
  try {
    const session = await auth()
    if (!session) throw new Error('Unauthorized')

    const sheet = await db.characterSheet.findUnique({
      where: {
        id: sheetId,
      },
      include: {
        owner: true,
        stats: {
          orderBy: {
            order: 'asc',
          },
        },
        skills: {
          orderBy: {
            order: 'asc',
          },
        },
        savingThrows: {
          orderBy: {
            order: 'asc',
          },
        },
        Inventory: {
          include: {
            objectItem: true,
          },
        },
      },
    })

    return { status: 'success', error: null, response: sheet }
  } catch (error) {
    console.error(error) 
    return { error: 'error 500', status: 'error' }
  }
}

export const getAllSheetsAction = async (): Promise<ActionTypesCharacterSheets> => {
  try {
    const session = await auth()
    if (!session) throw new Error('Unauthorized')

    const sheet = await db.characterSheet.findMany()

    return { status: 'success', error: null, response: sheet }
  } catch (error) {
    console.error(error)
    return { error: 'error 500', status: 'error' }
  }
}

export const updateSheetAction = async ({ sheet }: { sheet: CharacterSheet }): Promise<ActionsResponse> => {
  try {
    await db.characterSheet.update({
      where: {
        id: sheet.id,
      },
      data: {
        name: sheet.name,
        description: sheet.description,
        level: sheet.level,
        race: sheet.race,
        class: sheet.class,
        armorClass: sheet.armorClass,
        initiative: sheet.initiative,
        hitPoints: sheet.hitPoints,
        currentHitPoints: sheet.currentHitPoints,
        tempHitPoints: sheet.tempHitPoints,
        size: sheet.size,
        speed: sheet.speed,
        senses: sheet.senses,
        languages: sheet.languages,
        passivePerception: sheet.passivePerception,
        proficiencyBonus: sheet.proficiencyBonus,
      },
    })

    return { status: 'success', error: null }
  } catch (error) {
    console.error(error)
    return { error: 'error 500', status: 'error' }
  }
}

export const updateSheetStatAction = async ({ stats }: { stats: Stat[] }): Promise<ActionsResponse> => {
  try {
    await Promise.all(
      stats.map((stat) =>
        db.stat.update({
          where: { id: stat.id },
          data: {
            value: stat.value,
            modifier: stat.modifier,
          },
        })
      )
    )

    return { status: 'success', error: null }
  } catch (error) {
    console.error(error)
    return { error: 'error 500', status: 'error' }
  }
}

export const updateSheetSkillAction = async ({ skills }: { skills: Skill[] }): Promise<ActionsResponse> => {
  try {
    await Promise.all(
      skills.map((skill) =>
        db.skill.update({
          where: { id: skill.id },
          data: {
            value: skill.value,
          },
        })
      )
    )

    return { status: 'success', error: null }
  } catch (error) {
    console.error(error)
    return { error: 'error 500', status: 'error' }
  }
}

export const updateSheetSavingThrowAction = async ({
  savingThrows,
}: {
  savingThrows: SavingThrow[]
}): Promise<ActionsResponse> => {
  try {
    await Promise.all(
      savingThrows.map((savingThrow) =>
        db.savingThrow.update({
          where: { id: savingThrow.id },
          data: {
            value: savingThrow.value,
          },
        })
      )
    )

    return { status: 'success', error: null }
  } catch (error) {
    console.error(error)
    return { error: 'error 500', status: 'error' }
  }
}
