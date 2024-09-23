import { Sidebar } from '@/components/ui/sidebar'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex justify-start items-start h-full w-full'>
      <Sidebar className='bg-zinc-950 w-[400px] h-full' />
      <main className='w-full h-full'>{children}</main>
    </div>
  )
}
