import ButtonLogout from '@/components/buttoms/button-logout'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex justify-center items-center h-full w-full bg-[#ffa455] text-[#530800]'>
      <ButtonLogout />
      <main className='h-full w-full flex justify-center items-center'>{children}</main>
    </div>
  )
}
