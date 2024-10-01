'use client'
import Logo from '@/components/ui/logo'
import { Separator } from '@/components/ui/separator'

export default function FichaPage() {
  return (
    <section className='w-full h-full flex justify-center items-center'>
      <article className='flex flex-col justify-start items-start bg-[#fffbdd] w-[700px] text-[#530800]'>
        {/* BODY */}
        <main className='flex flex-col w-full h-full p-2'>
          <header className='flex flex-col w-full'>
            <div className='flex justify-between'>
              <section className='flex flex-col w-full '>
                <h2 className='text-4xl font-bold'>Travok Bofdann</h2>
                <p>Hill Dwarf Far Traveler</p>
                <div className='flex gap-2'>
                  <p>
                    Level <span>4</span>
                  </p>
                  <p>Druid</p>
                  <p>
                    <strong>XP</strong> <span> 0 / 6,500</span>
                  </p>
                </div>
              </section>
              <section className='flex w-20 justify-end'>
                <img
                  src='/placeolder-character.jpg'
                  alt='Placeholder character'
                  className='w-16 h-16 object-cover align-middle rounded-full object-top '
                />
              </section>
            </div>
            <Separator className='bg-[#530800ad] h-[2px]' />
            <section className='flex justify-between items-center w-full h-full p-2'>
              <div className='flex flex-col justify-center items-center w-full'>
                <strong>AC</strong>
                <span>11</span>
              </div>
              <Separator
                className='bg-[#5308003f] h-10'
                orientation='vertical'
              />
              <div className='flex flex-col justify-center items-center w-full'>
                <strong>Initiative</strong>
                <div className='flex gap-2'>
                  <Logo className='w-5 h-5' fill='#530800' />
                  <span>18</span>
                </div>
              </div>
              <Separator
                className='bg-[#5308003f] h-10'
                orientation='vertical'
              />
              <div className='flex flex-col justify-center items-center w-full'>
                <strong>Hit Points</strong>
                <span>22 / 22</span>
              </div>
              <Separator
                className='bg-[#5308003f] h-10'
                orientation='vertical'
              />
              <div className='flex flex-col justify-center items-center w-full'>
                <strong>Temp HP</strong>
                <span>--</span>
              </div>
            </section>
          </header>
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
              <Separator
                className='bg-[#5308003f] h-10'
                orientation='vertical'
              />
              <div className='flex flex-col justify-center items-center w-full'>
                <strong>DEX</strong>
                <span>
                  13 <strong>(+1)</strong>
                </span>
              </div>
              <Separator
                className='bg-[#5308003f] h-10'
                orientation='vertical'
              />
              <div className='flex flex-col justify-center items-center w-full'>
                <strong>CON</strong>
                <span>
                  10 <strong>(+0)</strong>
                </span>
              </div>
              <Separator
                className='bg-[#5308003f] h-10'
                orientation='vertical'
              />
              <div className='flex flex-col justify-center items-center w-full'>
                <strong>INT</strong>
                <span>
                  13 <strong>(+1)</strong>
                </span>
              </div>
              <Separator
                className='bg-[#5308003f] h-10'
                orientation='vertical'
              />
              <div className='flex flex-col justify-center items-center w-full'>
                <strong>WIS</strong>
                <span>
                  11 <strong>(+0)</strong>
                </span>
              </div>
              <Separator
                className='bg-[#5308003f] h-10'
                orientation='vertical'
              />
              <div className='flex flex-col justify-center items-center w-full'>
                <strong>CHA</strong>
                <span>
                  9 <strong>(-1)</strong>
                </span>
              </div>
            </div>
            <Separator className='bg-[#530800ad] h-[2px]' />
            <div className='w-full h-[400px]'></div>
          </section>
        </main>
      </article>
    </section>
  )
}
