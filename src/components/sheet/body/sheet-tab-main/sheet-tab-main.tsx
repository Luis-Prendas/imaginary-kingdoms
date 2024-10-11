import { Separator } from '@/components/ui/separator'
import SheetDetails from './sheet-details/sheet-details'
import SheetSkills from './sheet-skills/sheet-skills'

export default function SheetTabMain() {
  return (
    <section className='w-full h-full overflow-y-scroll no-scrollbar'>
      <SheetDetails />
      <Separator className='h-[2px]' />
      <SheetSkills />
    </section>
  )
}
