'use client'
import { useSheetStore } from '@/store/sheetStore'
import { CharacterSheet } from '@prisma/client'
import { ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
  sheetData: CharacterSheet
}

export default function SheetStoreProvider({ children, sheetData }: Props) {
  const { setSheets } = useSheetStore()
  useEffect(() => {
    setSheets(sheetData)
  }, [])

  return <>{children}</>
}
