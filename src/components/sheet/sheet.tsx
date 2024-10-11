'use client'

import { Separator } from '../ui/separator'
import { Tabs } from '../ui/tabs'
import SheetHeader from './header/sheet-header'
import SheetBody from './body/sheet-body'

export default function Sheet({ emerging = false }: { emerging?: boolean }) {
  return (
    <Tabs defaultValue='main' className='max-w-[700px]'>
      <article className='flex flex-col max-h-[850px] justify-start items-start min-w-[700px] rounded-lg bg-card text-foreground'>
        <SheetHeader emerging={emerging} />
        <Separator className='h-[2px]' />
        <SheetBody />
      </article>
    </Tabs>
  )
}
