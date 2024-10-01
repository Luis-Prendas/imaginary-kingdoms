'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from '../ui/button'
import Logo from '../ui/logo'
import { Separator } from '../ui/separator'
import SheetBodyHeader from './body/header/sheet-body-header'
import { useState } from 'react'

export default function Ficha({ emerging = false }: { emerging?: boolean }) {
  const [lockSheet, setLockSheet] = useState(true)

  const openPopupWindow = () => {
    const url = '/es/emerging/ficha'
    const windowFeatures =
      'width=720,height=735,menubar=no,toolbar=no,status=no,scrollbars=no'

    const newWindow = window.open(url, '_blank', windowFeatures)
    if (newWindow) newWindow.focus()
  }

  return (
    <article className='flex flex-col justify-start items-start bg-[#fffbdd] w-[700px] rounded-lg text-[#530800]'>
      {/* HEADER */}
      <header className='flex w-full justify-between p-2'>
        <div className='flex gap-2 items-center'>
          <Logo className='w-5 h-5' fill='#530800' />
          <h4>My Character</h4>
          <button onClick={() => setLockSheet(!lockSheet)}>
            {lockSheet ? (
              <Icon icon='ant-design:lock-filled' className='w-6 h-6' />
            ) : (
              <Icon icon='ant-design:unlock-filled' className='w-6 h-6' />
            )}
          </button>
        </div>
        {emerging && (
          <div className='flex justify-center items-center'>
            <Button
              variant='ghost'
              className='hover:bg-[#cac7ae]'
              onClick={() => openPopupWindow()}
            >
              <Icon icon='oui:popout' />
            </Button>
          </div>
        )}
      </header>
      <Separator className='bg-[#5308007c] h-[2px]' />
      {/* BODY */}
      <main className='flex flex-col w-full h-full p-2'>
        <SheetBodyHeader lockSheet={lockSheet} />
        <Separator className='bg-[#530800ad] h-[2px]' />
        <section className='w-full max-h-[500px] overflow-y-scroll no-scrollbar'>
          <div className='w-full flex justify-between'>
            <div className='w-full flex flex-col'>
              <p className='flex gap-1'>
                <strong>Size</strong>
                <span>1.85m</span>
              </p>
              <p className='flex gap-1'>
                <strong>Speed</strong>
                <span>30tf</span>
              </p>
              <p className='flex gap-1'>
                <strong>Senses</strong>
                <span>Darkvision 60ft</span>
              </p>
            </div>
            <div className='w-full flex flex-col'>
              <p className='flex gap-1'>
                <strong>Languages</strong>
                <span>Elvish, Common, Gnomish</span>
              </p>
              <p className='flex gap-1'>
                <strong>Passive Perception</strong>
                <span>12</span>
              </p>
              <p className='flex gap-1'>
                <strong>Proficiency Bonus</strong>
                <span>+2</span>
              </p>
            </div>
          </div>
          <Separator className='bg-[#530800ad] h-[2px]' />
          <div className='flex justify-between items-center w-full h-full p-2'>
            <div className='flex flex-col justify-center items-center w-full'>
              <strong>STR</strong>
              <span>
                14 <strong>(+2)</strong>
              </span>
            </div>
            <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
            <div className='flex flex-col justify-center items-center w-full'>
              <strong>DEX</strong>
              <span>
                13 <strong>(+1)</strong>
              </span>
            </div>
            <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
            <div className='flex flex-col justify-center items-center w-full'>
              <strong>CON</strong>
              <span>
                10 <strong>(+0)</strong>
              </span>
            </div>
            <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
            <div className='flex flex-col justify-center items-center w-full'>
              <strong>INT</strong>
              <span>
                13 <strong>(+1)</strong>
              </span>
            </div>
            <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
            <div className='flex flex-col justify-center items-center w-full'>
              <strong>WIS</strong>
              <span>
                11 <strong>(+0)</strong>
              </span>
            </div>
            <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
            <div className='flex flex-col justify-center items-center w-full'>
              <strong>CHA</strong>
              <span>
                9 <strong>(-1)</strong>
              </span>
            </div>
          </div>
          <Separator className='bg-[#530800ad] h-[2px]' />
          <div className='w-full flex flex-col gap-4'>
            <section className='flex flex-col w-full'>
              <h4>
                <strong>Savings Thorows</strong>
              </h4>
              <div className='flex gap-1 justify-between w-full'>
                <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
                  <span>Str +4</span>
                </div>
                <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
                  <span>Dex +1</span>
                </div>
                <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
                  <span>Con +2</span>
                </div>
                <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
                  <span>Int +1</span>
                </div>
                <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
                  <span>Wis +0</span>
                </div>
                <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
                  <span>Cha -1</span>
                </div>
              </div>
            </section>
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
