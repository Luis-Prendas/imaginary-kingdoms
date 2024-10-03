'use client'

import { Separator } from '../ui/separator'
import SheetBodyHeader from './body/header/sheet-body-header'
import MainHeader from './body/header/main-header'
import SheetBodyDetails from './body/details/sheet-body-details'

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
          <div className='w-full flex flex-col gap-4'>
            <section className='flex flex-col w-full'>
              <h4>
                <strong>Skills</strong>
              </h4>
              <div className='flex justify-between w-full gap-1'>
                <div className='flex flex-col w-full'>
                  <span className='px-2'>
                    +2 Acrobatics <code className='opacity-50'>(dex)</code>
                  </span>
                  <span className='bg-[#e4d6b5] px-2'>
                    +3 Animal Handling <code className='opacity-50'>(wis)</code>
                  </span>
                  <span className='px-2'>
                    -1 Arcana <code className='opacity-50'>(int)</code>
                  </span>
                  <span className='bg-[#e4d6b5] px-2'>
                    -0 Athletics <code className='opacity-50'>(str)</code>
                  </span>
                  <span className='px-2'>
                    +1 Deception <code className='opacity-50'>(cha)</code>
                  </span>
                  <span className='bg-[#e4d6b5] px-2'>
                    -1 History <code className='opacity-50'>(int)</code>
                  </span>
                </div>
                <div className='flex flex-col w-full'>
                  <span className='px-2'>
                    +5 Insight <code className='opacity-50'>(wis)</code>
                  </span>
                  <span className='bg-[#e4d6b5] px-2'>
                    +1 Intimidation <code className='opacity-50'>(cha)</code>
                  </span>
                  <span className='px-2'>
                    -1 Investigation <code className='opacity-50'>(int)</code>
                  </span>
                  <span className='bg-[#e4d6b5] px-2'>
                    +5 Medicine <code className='opacity-50'>(wis)</code>
                  </span>
                  <span className='px-2'>
                    +1 Nature <code className='opacity-50'>(int)</code>
                  </span>
                  <span className='bg-[#e4d6b5] px-2'>
                    +5 Perception <code className='opacity-50'>(wis)</code>
                  </span>
                </div>
                <div className='flex flex-col w-full'>
                  <span className='px-2'>
                    +1 Performance <code className='opacity-50'>(cha)</code>
                  </span>
                  <span className='bg-[#e4d6b5] px-2'>
                    +1 Persuasion <code className='opacity-50'>(cha)</code>
                  </span>
                  <span className='px-2'>
                    -1 Religion <code className='opacity-50'>(int)</code>
                  </span>
                  <span className='bg-[#e4d6b5] px-2'>
                    +2 Sleight of Hand <code className='opacity-50'>(dex)</code>
                  </span>
                  <span className='px-2'>
                    +2 Stealth <code className='opacity-50'>(dex)</code>
                  </span>
                  <span className='bg-[#e4d6b5] px-2'>
                    +3 Survival <code className='opacity-50'>(wis)</code>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </article>
  )
}
