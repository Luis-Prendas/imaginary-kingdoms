'use client'

import { useGetAllSheets } from '@/hooks/use-sheet'
import Link from 'next/link'
import { useState } from 'react'

export default function Home({ emerging = false }: { emerging?: boolean }) {
  // const session = await auth()

  const { data } = useGetAllSheets()

  return (
    <main>
      <ul>
        {data.response &&
          data.response.map((sheet) => (
            <li key={sheet.id}>
              <a href={`sheet/${sheet.id}`}>{sheet.name}</a>
            </li>
          ))}
      </ul>
    </main>
  )
}
