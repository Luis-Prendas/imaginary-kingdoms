import { getAllSheetsAction, getSheetById, updateField } from '@/actions/sheet-actions'
import { CharacterSheet, User } from '@prisma/client'
import { getSession, useSession } from 'next-auth/react'
import { create } from 'zustand'

type Sheet = CharacterSheet & { owner: User; isTheOwner: boolean }

type SheetStore = {
  enableSave: boolean
  enableEdit: boolean
  sheet: Sheet | null
  setEnableSave: (enableSave: boolean) => void
  setEnableEdit: (enableEdit: boolean) => void
  setSheets: (sheetId: string) => void
  updateField: ({ newValue, field }: { newValue: string | number; field: string }) => void
  updateStatField: ({ newValue, field }: { newValue: number; field: string }) => void
  updateSwitchField: ({ newValue, field }: { newValue: boolean; field: string }) => void
  calculateStats: () => void
  emptySheet: () => void
}

export const useSheetStore = create<SheetStore>((set, get) => ({
  isLoading: true,
  enableSave: false,
  enableEdit: true,
  sheet: null,
  setSheets: async (sheetId) => {
    const session = await getSession()
    const sheetData = await getSheetById({ sheetId })
    if (!sheetData.response || !sheetData.response.id) {
      throw new Error('Invalid sheet data')
    }
    const isTheOwner = sheetData.response.ownerId === session?.user.id
    const sheet: Sheet = { ...sheetData.response, isTheOwner }
    set({ sheet })
  },
  async setEnableSave(enableSave) {
    set({ enableSave })
  },
  async setEnableEdit(enableEdit) {
    set({ enableEdit })
  },
  async updateField({ newValue, field }) {
    const currentSheet = get().sheet as Sheet
    const updatedSheet = { ...currentSheet, [field]: newValue }
    set({ enableSave: true })
    set({ sheet: updatedSheet })
  },
  async updateStatField({ newValue, field }) {
    const currentSheet = get().sheet as Sheet
    const updatedSheet = { ...currentSheet, [field]: newValue }
    set({ enableSave: true })
    set({ sheet: updatedSheet })
    get().calculateStats()
  },
  async updateSwitchField({ newValue, field }) {
    const currentSheet = get().sheet as Sheet
    const updatedSheet = { ...currentSheet, [field]: newValue }
    set({ enableSave: true })
    set({ sheet: updatedSheet })
    get().calculateStats()
  },
  async calculateStats() {
    const currentSheet = get().sheet as Sheet
    const {
      proficiencyBonus,
      strength,
      competenceStrength,
      competenceAthletics,
      dexterity,
      competenceDexterity,
      competenceStealth,
      constitution,
      competenceArcana,
      competenceHistory,
      competenceInvestigation,
      competenceNature,
      competenceReligion,
      competenceConstitution,
      intelligence,
      competenceIntelligence,
      wisdom,
      competenceWisdom,
      charisma,
      competenceCharisma,
      competenceDeception,
      competenceIntimidation,
      competencePersuasion,
      competencePerformance,
      competenceAcrobatics,
      competenceSleightOfHand,
      competenceAnimalHandling,
      competenceInsight,
      competenceMedicine,
      competencePerception,
      competenceSurvival,
    } = currentSheet

    // Update related to strength
    const strengthMod = Math.floor((strength - 10) / 2)
    const savingStrength = competenceStrength ? strengthMod + proficiencyBonus : strengthMod
    const athletics = competenceAthletics ? strengthMod + proficiencyBonus : strengthMod

    // Update related to dexterity
    const dexterityMod = Math.floor((dexterity - 10) / 2)
    const savingDexterity = competenceDexterity ? dexterityMod + proficiencyBonus : dexterityMod
    const armorClass = dexterityMod + 10
    const initiative = dexterityMod
    const acrobatics = competenceAcrobatics ? dexterityMod + proficiencyBonus : dexterityMod
    const sleightOfHand = competenceSleightOfHand ? dexterityMod + proficiencyBonus : dexterityMod
    const stealth = competenceStealth ? dexterityMod + proficiencyBonus : dexterityMod

    // Update related to constitution
    const constitutionMod = Math.floor((constitution - 10) / 2)
    const savingConstitution = competenceConstitution ? constitutionMod + proficiencyBonus : constitutionMod

    // Update related to intelligence
    const intelligenceMod = Math.floor((intelligence - 10) / 2)
    const savingIntelligence = competenceIntelligence ? intelligenceMod + proficiencyBonus : intelligenceMod
    const arcana = competenceArcana ? intelligenceMod + proficiencyBonus : intelligenceMod
    const history = competenceHistory ? intelligenceMod + proficiencyBonus : intelligenceMod
    const investigation = competenceInvestigation ? intelligenceMod + proficiencyBonus : intelligenceMod
    const nature = competenceNature ? intelligenceMod + proficiencyBonus : intelligenceMod
    const religion = competenceReligion ? intelligenceMod + proficiencyBonus : intelligenceMod

    // Update related to wisdom
    const wisdomMod = Math.floor((wisdom - 10) / 2)
    const savingWisdom = competenceWisdom ? wisdomMod + proficiencyBonus : wisdomMod
    const animalHandling = competenceAnimalHandling ? wisdomMod + proficiencyBonus : wisdomMod
    const insight = competenceInsight ? wisdomMod + proficiencyBonus : wisdomMod
    const medicine = competenceMedicine ? wisdomMod + proficiencyBonus : wisdomMod
    const perception = competencePerception ? wisdomMod + proficiencyBonus : wisdomMod
    const survival = competenceSurvival ? wisdomMod + proficiencyBonus : wisdomMod

    // Update related to charisma
    const charismaMod = Math.floor((charisma - 10) / 2)
    const savingCharisma = competenceCharisma ? charismaMod + proficiencyBonus : charismaMod
    const deception = competenceDeception ? charismaMod + proficiencyBonus : charismaMod
    const intimidation = competenceIntimidation ? charismaMod + proficiencyBonus : charismaMod
    const persuasion = competencePersuasion ? charismaMod + proficiencyBonus : charismaMod
    const performance = competencePerformance ? charismaMod + proficiencyBonus : charismaMod

    console.log(armorClass)

    // Update Sheet
    const updatedSheet = {
      ...currentSheet,
      strengthMod,
      savingStrength,
      dexterityMod,
      savingDexterity,
      constitutionMod,
      savingConstitution,
      intelligenceMod,
      savingIntelligence,
      wisdomMod,
      savingWisdom,
      charismaMod,
      savingCharisma,
      armorClass,
      initiative,
      acrobatics,
      sleightOfHand,
      stealth,
      arcana,
      athletics,
      history,
      investigation,
      nature,
      religion,
      animalHandling,
      insight,
      medicine,
      perception,
      survival,
      deception,
      intimidation,
      persuasion,
      performance,
    }
    set({ sheet: updatedSheet })
  },
  async emptySheet() {
    set({ sheet: null })
  },
}))
