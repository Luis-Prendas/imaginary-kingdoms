import ButtonCreateSheet from '@/components/buttoms/button-create-sheet'
import ButtonLogout from '@/components/buttoms/button-logout'
import { LanguageSwitcher } from '@/components/language-switcher/language-switcher'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex justify-center items-center h-full w-full bg-[#ffa455] text-[#530800]'>
      <div className='w-full flex justify-end items-center gap-4 absolute top-0 right-0 p-4'>
        <ButtonCreateSheet />
        <LanguageSwitcher />
        <ButtonLogout />
      </div>
      <main className='h-full w-full flex justify-center items-center'>{children}</main>
    </div>
  )
}
