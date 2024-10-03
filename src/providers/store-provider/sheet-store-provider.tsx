'use client'
import { useSheetStore } from '@/store/sheetStore'
import { CharacterSheet } from '@prisma/client'
import { ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
  sheetId: string
}

export default function SheetStoreProvider({ children, sheetId }: Props) {
  const { setSheets } = useSheetStore()
  useEffect(() => {
    setSheets(sheetId)
  }, [])

  return <>{children}</>
}
