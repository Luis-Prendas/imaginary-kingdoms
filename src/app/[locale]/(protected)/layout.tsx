import Nav from '@/components/layout/nav'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex justify-center items-center h-full w-full bg-zinc-950 text-zinc-300'>
      <main className='h-full w-full flex justify-center items-center'>
        <Nav />
        <div className='w-full h-full outline outline-1 outline-zinc-700 z-10'>
          {children}
        </div>
        <aside className='w-[350px] h-full bg-zinc-900'>aside</aside>
      </main>
    </div>
  )
}
