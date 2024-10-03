'use client'

import { Separator } from '../ui/separator'
import SheetBodyHeader from './body/header/sheet-body-header'
import MainHeader from './body/header/main-header'
import SheetBodyDetails from './body/details/sheet-body-details'
import SheetBodySkills from './body/skills/sheet-body-skills'

export default function Sheet({ emerging = false }: { emerging?: boolean }) {
  return (
    <article className='flex flex-col justify-start items-start bg-[#fffbdd] min-w-[700px] rounded-lg text-[#530800]'>
      {/* HEADER */}
      <MainHeader emerging={emerging} />
      <Separator className='bg-[#5308007c] h-[2px]' />
      {/* BODY */}
      <main className='flex flex-col w-full h-full p-2'>
        <SheetBodyHeader />
        <Separator className='bg-[#530800ad] h-[2px]' />
        <section className='w-full max-h-[500px] overflow-y-scroll no-scrollbar'>
          <SheetBodyDetails />
          <Separator className='bg-[#530800ad] h-[2px]' />
          <SheetBodySkills />
        </section>
      </main>
    </article>
  )
}
