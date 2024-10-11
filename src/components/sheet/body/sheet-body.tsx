import SheetBodyMainSection from './main-section/sheet-body-main-section'
import { TabsContent } from '@/components/ui/tabs'
import SheetTabMain from './sheet-tab-main/sheet-tab-main'
import { Separator } from '@/components/ui/separator'
import SheetTabInventory from './sheet-tab-inventory/sheet-tab-inventory'

export default function SheetBody() {
  return (
    <main className='flex flex-col w-full h-full p-2'>
      <SheetBodyMainSection />
      <Separator className='h-[2px]' />
      <TabsContent value='main' className='p-0 m-0'>
        <SheetTabMain />
      </TabsContent>
      <TabsContent value='inventory' className='p-0 m-0'>
        <SheetTabInventory />
      </TabsContent>
    </main>
  )
}
