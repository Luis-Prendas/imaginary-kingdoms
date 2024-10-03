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

    // Upgrade related to strength
    const { strength, competenceStrength, proficiencyBonus } = currentSheet
    const strengthMod = Math.floor((strength - 10) / 2)
    const savingStrength = competenceStrength ? strengthMod + proficiencyBonus : strengthMod

    // Update Sheet
    const updatedSheet = {
      ...currentSheet,
      strengthMod,
      savingStrength,
    }
    set({ sheet: updatedSheet })
  },
  async emptySheet() {
    set({ sheet: null })
  },
}))
