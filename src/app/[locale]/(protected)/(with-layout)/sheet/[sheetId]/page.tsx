'use client'

import Sheet from '@/components/sheet/sheet'
import { useSheetStore } from '@/store/sheetStore'
import { Loader2 } from 'lucide-react'
import { useEffect, useTransition } from 'react'

type PageProps = {
  params: {
    sheetId: string
  }
}

export default function FichaPage({ params }: PageProps) {
  const { sheetId } = params
  const { setSheet, sheet } = useSheetStore()

  useEffect(() => {
    setSheet(sheetId)
  }, [sheetId])

  if (!sheet) return <Loader2 className='h-12 w-12 animate-spin' />

  return (
    <section className='w-full h-full flex justify-center items-center'>
      <Sheet emerging />
    </section>
  )
}
