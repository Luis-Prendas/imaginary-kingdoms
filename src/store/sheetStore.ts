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
  updateField: ({ newName, field }: { newName: string; field: string }) => void
}

export const useSheetStore = create<SheetStore>((set, get) => ({
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
  async updateField({ newName, field }) {
    const currentSheet = get().sheet as Sheet
    const updatedSheet = { ...currentSheet, [field]: newName }
    set({ enableSave: true })
    set({ sheet: updatedSheet })
  },
}))
