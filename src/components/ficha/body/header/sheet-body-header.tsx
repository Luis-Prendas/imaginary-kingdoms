import Logo from '@/components/ui/logo'
import { Separator } from '@/components/ui/separator'

interface Props {
  lockSheet: boolean
}

export default function SheetBodyHeader({ lockSheet }: Props) {
  return (
    <header className='flex flex-col w-full'>
      <div className='flex justify-between'>
        <section className='flex flex-col w-full mb-1'>
          <input
            type='text'
            name='characer-sheet-name'
            id='characer-sheet-name'
            defaultValue='Travok Bofdann'
            placeholder='Character name...'
            className='bg-transparent text-4xl font-bold'
            disabled={lockSheet}
          />
          <input
            type='text'
            name='characer-sheet-name'
            id='characer-sheet-name'
            defaultValue='Hill Dwarf Far Traveler'
            placeholder='Character description...'
            className='bg-transparent'
            disabled={lockSheet}
          />
          <div className='flex gap-2'>
            <select className='bg-transparent appearance-none flex justify-center items-center' disabled={lockSheet}>
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
            <Separator className='bg-[#5308003f] h-6' orientation='vertical' />
            <p>Druid</p>
            <Separator className='bg-[#5308003f] h-6' orientation='vertical' />
            <p>
              Level <span>4</span>
            </p>
            <Separator className='bg-[#5308003f] h-6' orientation='vertical' />
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
