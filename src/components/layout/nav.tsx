'use client'
import Logo from '@/components/ui/logo'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useLocale } from 'next-intl'

export default function Nav() {
  const locale = useLocale()

  return (
    <nav className='w-[350px] h-full bg-zinc-900 p-4 flex flex-col justify-start items-start gap-4'>
      <Link href={`/${locale}/home`}>
        <Logo className='w-10 h-10 fill-zinc-300 hover:fill-zinc-100 transition-colors ease-in-out' />
      </Link>
      <Link href={`/${locale}/home/rooms`} className='flex items-center gap-4'>
        <Icon icon='ic:baseline-games' className='w-8 h-8' />
        <span className='text-xl font-light'>Room games</span>
      </Link>
    </nav>
  )
}
