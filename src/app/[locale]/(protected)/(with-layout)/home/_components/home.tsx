'use client'

import { useGetAllSheets } from '@/hooks/use-sheet'
import { useSheetStore } from '@/store/sheetStore'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  // const session = await auth()
  const { data } = useGetAllSheets()
  const { emptySheet } = useSheetStore()

  useEffect(() => {
    emptySheet()
  }, [])

  return (
    <main>
      <ul>
        {data.response &&
          data.response.map((sheet) => (
            <li key={sheet.id}>
              <Link href={`sheet/${sheet.id}`}>{sheet.name}</Link>
            </li>
          ))}
      </ul>
    </main>
  )
}
