import Logo from '@/components/ui/logo'
import { Separator } from '@/components/ui/separator'
import { useSheetStore } from '@/store/sheetStore'
import { CharacterSheet } from '@prisma/client'
import { useEffect, useState } from 'react'

interface Props {
  lockSheet: boolean
}

export default function SheetBodyHeader({ lockSheet }: Props) {
  const { sheet } = useSheetStore()

  return (
    <header className='flex flex-col w-full'>
      <div className='flex justify-between'>
        <section className='flex flex-col w-full mb-1'>
          <input
            type='text'
            name='characer-sheet-name'
            id='characer-sheet-name'
            placeholder='Character name...'
            className='bg-transparent text-4xl font-bold'
            defaultValue={sheet?.name}
            // onChange={(e) => setCharacterName(e.target.value)}
            disabled={lockSheet}
            maxLength={20}
          />
          {sheet?.description && (
            <input
              type='text'
              name='characer-sheet-description'
              id='characer-sheet-description'
              placeholder='Character description...'
              className='bg-transparent'
              defaultValue={sheet?.description}
              disabled={lockSheet}
              maxLength={45}
            />
          )}
          <div className='flex gap-2'>
            {lockSheet ? (
              <p>{sheet?.raza}</p>
            ) : (
              <select
                className='bg-transparent appearance-none flex justify-center items-center'
                // onChange={(e) => setRazaSelected(e.target.value)}
              >
                <option value='' hidden>
                  {sheet?.raza}
                </option>
                <option value='Enano'>Enano</option>
                <option value='Elfo'>Elfo</option>
                <option value='Mediano'>Mediano</option>
                <option value='Humano'>Humano</option>
                <option value='Dracónido'>Dracónido</option>
                <option value='Gnomo'>Gnomo</option>
                <option value='Semielfo'>Semielfo</option>
                <option value='Semiorco'>Semiorco</option>
                <option value='Tiefling'>Tiefling</option>
              </select>
            )}
            <Separator className='bg-[#5308003f] h-6' orientation='vertical' />
            {lockSheet ? (
              <p>{sheet?.clase}</p>
            ) : (
              <select
                className='bg-transparent appearance-none flex justify-center items-center'
                // onChange={(e) => setClassSelected(e.target.value)}
              >
                <option value='' hidden>
                  {sheet?.clase}
                </option>
                <option value='Bárbaro'>Bárbaro</option>
                <option value='Bardo'>Bardo</option>
                <option value='Brujo'>Brujo</option>
                <option value='Clérigo'>Clérigo</option>
                <option value='Druida'>Druida</option>
                <option value='Explorador'>Explorador</option>
                <option value='Guerrero'>Guerrero</option>
                <option value='Hechicero'>Hechicero</option>
                <option value='Mago'>Mago</option>
                <option value='Monje'>Monje</option>
                <option value='Paladín'>Paladín</option>
                <option value='Pícaro'>Pícaro</option>
              </select>
            )}
            <Separator className='bg-[#5308003f] h-6' orientation='vertical' />
            {lockSheet ? (
              <p>{sheet?.level}</p>
            ) : (
              <select
                className='bg-transparent appearance-none flex justify-center items-center'
                // onChange={(e) => setLevelSelected(e.target.value)}
              >
                <option value='' hidden>
                  {sheet?.level}
                </option>
                <option value='Level 1'>Level 1</option>
                <option value='Level 2'>Level 2</option>
                <option value='Level 3'>Level 3</option>
                <option value='Level 4'>Level 4</option>
                <option value='Level 5'>Level 5</option>
                <option value='Level 6'>Level 6</option>
                <option value='Level 7'>Level 7</option>
                <option value='Level 8'>Level 8</option>
                <option value='Level 9'>Level 9</option>
                <option value='Level 10'>Level 10</option>
                <option value='Level 11'>Level 11</option>
                <option value='Level 12'>Level 12</option>
                <option value='Level 13'>Level 13</option>
                <option value='Level 14'>Level 14</option>
                <option value='Level 15'>Level 15</option>
                <option value='Level 16'>Level 16</option>
                <option value='Level 17'>Level 17</option>
                <option value='Level 18'>Level 18</option>
                <option value='Level 19'>Level 19</option>
                <option value='Level 20'>Level 20</option>
              </select>
            )}
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
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>Initiative</strong>
          <div className='flex gap-2'>
            <Logo className='w-5 h-5' fill='#530800' />
            <span>18</span>
          </div>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>Hit Points</strong>
          <span>22 / 22</span>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>Temp HP</strong>
          <span>--</span>
        </div>
      </section>
    </header>
  )
}
