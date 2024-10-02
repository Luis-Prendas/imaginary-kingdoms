import { useGetAllSheets } from '@/hooks/use-sheet'
import { CharacterSheet } from '@prisma/client'
import { create } from 'zustand'

type Sheet = CharacterSheet

type SheetStore = {
  sheet: Sheet | null
  setSheets: (newSheets: Sheet) => void
}

export const useSheetStore = create<SheetStore>((set) => ({
  sheet: null,
  setSheets: (newSheets) => set({ sheet: newSheets }),
}))
