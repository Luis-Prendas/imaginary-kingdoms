import { getAllSheetsAction, updateField } from '@/actions/sheet-actions'
import { CharacterSheet } from '@prisma/client'
import { create } from 'zustand'

type Sheet = CharacterSheet

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
    const sheets = await getAllSheetsAction()
    const sheet = sheets.response?.find((e) => e.id === sheetId) as Sheet
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
      dexterity,
      competenceDexterity,
      constitution,
      competenceConstitution,
      intelligence,
      competenceIntelligence,
      wisdom,
      competenceWisdom,
      charisma,
      competenceCharisma,
    } = currentSheet

    // Update related to strength
    const strengthMod = Math.floor((strength - 10) / 2)
    const savingStrength = competenceStrength ? strengthMod + proficiencyBonus : strengthMod

    // Update related to dexterity
    const dexterityMod = Math.floor((dexterity - 10) / 2)
    const savingDexterity = competenceDexterity ? dexterityMod + proficiencyBonus : dexterityMod
    const armorClass = dexterityMod + 10
    const initiative = dexterityMod

    // Update related to constitution
    const constitutionMod = Math.floor((constitution - 10) / 2)
    const savingConstitution = competenceConstitution ? constitutionMod + proficiencyBonus : constitutionMod

    // Update related to intelligence
    const intelligenceMod = Math.floor((intelligence - 10) / 2)
    const savingIntelligence = competenceIntelligence ? intelligenceMod + proficiencyBonus : intelligenceMod

    // Update related to wisdom
    const wisdomMod = Math.floor((wisdom - 10) / 2)
    const savingWisdom = competenceWisdom ? wisdomMod + proficiencyBonus : wisdomMod

    // Update related to charisma
    const charismaMod = Math.floor((charisma - 10) / 2)
    const savingCharisma = competenceCharisma ? charismaMod + proficiencyBonus : charismaMod

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
    }
    set({ sheet: updatedSheet })
  },
  async emptySheet() {
    set({ sheet: null })
  },
}))
