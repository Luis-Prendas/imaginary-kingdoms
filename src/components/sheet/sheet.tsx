'use client'

import { Separator } from '../ui/separator'
import SheetBodyHeader from './body/header/sheet-body-header'
import MainHeader from './body/header/main-header'
import SheetBodyDetails from './body/details/sheet-body-details'
import SheetBodySkills from './body/skills/sheet-body-skills'
import { Tabs, TabsContent } from '../ui/tabs'
import SheetBodyInventory from './body/inventory/sheet-body-inventory'

export default function Sheet({ emerging = false }: { emerging?: boolean }) {
  return (
    <Tabs defaultValue='main' className='max-w-[700px] '>
      <article className='flex flex-col max-h-[850px] justify-start items-start bg-[#fffbdd] min-w-[700px] rounded-lg text-[#530800]'>
        <MainHeader emerging={emerging} />
        <Separator className='bg-[#5308007c] h-[2px]' />
        <main className='flex flex-col w-full h-full p-2'>
          <SheetBodyHeader />
          <Separator className='bg-[#530800ad] h-[2px]' />
          <TabsContent value='main' className='p-0 m-0'>
            <section className='w-full h-full overflow-y-scroll no-scrollbar'>
              <SheetBodyDetails />
              <Separator className='bg-[#530800ad] h-[2px]' />
              <SheetBodySkills />
            </section>
          </TabsContent>
          <TabsContent value='inventory' className='p-0 m-0'>
            <section className='w-full h-full overflow-y-scroll no-scrollbar'>
              <SheetBodyInventory />
            </section>
          </TabsContent>
        </main>
      </article>
    </Tabs>
  )
}
