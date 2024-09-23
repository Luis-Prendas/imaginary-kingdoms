import Logo from '@/components/ui/logo'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex justify-center items-center h-full w-full bg-zinc-950 text-zinc-300'>
      <main className='h-full w-full max-w-[1400px] flex justify-center items-center'>
        <nav className='w-[350px] h-full bg-zinc-900 p-4 flex flex-col justify-start items-start gap-4'>
          <Link href='#'>
            <Logo className='w-10 h-10 fill-zinc-300 hover:fill-zinc-100 transition-colors ease-in-out' />
          </Link>
          <Link href='#' className='flex items-center gap-4'>
            <Icon icon='ant-design:home-outlined' className='w-8 h-8' />
            <span className='text-xl font-light'>Home</span>
          </Link>
          <Link href='#' className='flex items-center gap-4'>
            <Icon icon='ant-design:bell-outlined' className='w-8 h-8' />
            <span className='text-xl font-light'>Notifications</span>
          </Link>
        </nav>
        <section className='w-[600px] h-full outline outline-1 outline-zinc-700 z-10'>
          {children}
        </section>
        <aside className='w-[350px] h-full bg-zinc-900'>aside</aside>
      </main>
    </div>
  )
}
