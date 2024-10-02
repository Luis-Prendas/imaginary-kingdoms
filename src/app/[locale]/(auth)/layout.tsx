import Logo from '@/components/ui/logo'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex justify-center items-center flex-col h-full w-full gap-4 pb-40 bg-[#ffa455] text-[#530800]'>
      <Logo className='w-32 h-32' fill='#530800' />
      <h1 className='text-3xl font-semibold'>Imaginary Kingdoms</h1>
      {children}
    </main>
  )
}
