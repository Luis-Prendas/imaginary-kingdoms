import { getAllSheetsAction, getSheetByIdAction } from '@/actions/sheet-actions'
import { CharacterSheet, Inventory, ObjectItem, Prisma, SavingThrow, Skill, Stat, User } from '@prisma/client'
import { getSession, useSession } from 'next-auth/react'
import { create } from 'zustand'

type Objects = Prisma.InventoryGetPayload<{
  include: {
    objectItem: true
  }
}>

type Sheet = CharacterSheet

type SheetStore = {
  isTheOwner: boolean
  autoCalculate: boolean
  enableSave: boolean
  enableEdit: boolean
  setEnableSave: (enableSave: boolean) => void
  setEnableEdit: (enableEdit: boolean) => void

  sheet: Sheet | null
  owner: User | null
  skills: Skill[] | null
  stats: Stat[] | null
  savingThrows: SavingThrow[] | null
  inventory: Objects[] | null
  setSheet: (sheetId: string) => void
  emptySheet: () => void
  updateSheet: ({ newValue, field }: { newValue: string | number; field: string }) => void
  updateSkill: ({ newValue, skillId }: { newValue: number; skillId: string }) => void
  updateStat: ({ newValue, statId }: { newValue: number; statId: string }) => void
  updateSavingThrow: ({ newValue, field }: { newValue: string | number; field: string }) => void
  autoCalculateSheet: () => void
}

export const useSheetStore = create<SheetStore>((set, get) => ({
  isTheOwner: false,
  autoCalculate: true,
  enableSave: false,
  enableEdit: true,
  sheet: null,
  owner: null,
  skills: null,
  stats: null,
  savingThrows: null,
  inventory: null,
  async setEnableSave(enableSave) {
    set({ enableSave })
  },
  async setEnableEdit(enableEdit) {
    set({ enableEdit })
  },
  async setSheet(sheetId) {
    const session = await getSession()
    const sheetData = await getSheetByIdAction({ sheetId })
    if (!sheetData.response || !sheetData.response.id) {
      throw new Error('Invalid sheet data')
    }

    const isTheOwner = sheetData.response.ownerId === session?.user.id

    set({ isTheOwner })
    set({ sheet: sheetData.response })
    set({ owner: sheetData.response.owner })
    set({ skills: sheetData.response.skills })
    set({ stats: sheetData.response.stats })
    set({ inventory: sheetData.response.Inventory })
    set({ savingThrows: sheetData.response.savingThrows })
  },
  async emptySheet() {
    set({ sheet: null })
  },
  async updateSheet({ newValue, field }) {
    const currentSheet = get().sheet as Sheet
    const updatedSheet = { ...currentSheet, [field]: newValue }
    set({ enableSave: true })
    set({ sheet: updatedSheet })
  },
  async updateSkill({ newValue, skillId }) {
    const currentSkill = get().skills as Skill[]
    const updatedSkill = currentSkill.map((skill) => {
      if (skill.id === skillId) {
        return { ...skill, value: newValue }
      }
      return skill
    })
    set({ enableSave: true })
    set({ skills: updatedSkill })
  },
  async updateStat({ newValue, statId }) {
    const currentStats = get().stats as Stat[]
    const updatedStats = currentStats.map((stat) => {
      if (stat.id === statId) {
        return { ...stat, value: newValue, modifier: Math.floor((newValue - 10) / 2) }
      }
      return stat
    })
    set({ enableSave: true })
    set({ stats: updatedStats })
    if (get().autoCalculate) get().autoCalculateSheet()
  },
  async updateSavingThrow({ newValue, field }) {
    const currentSavingThrow = get().savingThrows as SavingThrow[]
    const updatedSavingThrow = { ...currentSavingThrow, [field]: newValue }
    set({ enableSave: true })
    set({ savingThrows: updatedSavingThrow })
  },
  async autoCalculateSheet() {
    const sheet = get().sheet as Sheet
    const currentSavingThrow = get().savingThrows as SavingThrow[]
    const updatedSavingThrow = currentSavingThrow.map((savingThrow) => {
      const stat = get().stats?.find((stat) => stat.statType === savingThrow.statType)
      if (stat) {
        const value = savingThrow.proficiency ? stat.modifier + sheet.proficiencyBonus : stat.modifier
        return { ...savingThrow, value }
      }
      return savingThrow
    })

    set({ savingThrows: updatedSavingThrow })
  },
}))
