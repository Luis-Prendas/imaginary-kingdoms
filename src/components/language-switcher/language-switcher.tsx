'use client'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

export function LanguageSwitcher() {
  const t = useTranslations()
  const router = useRouter()

  const handleChangeLanguage = (newLocale: string) => {
    const newPath = new URL(window.location.href)
    newPath.pathname = newPath.pathname.replace(/\/en\/|\/es\//, '/' + newLocale + '/')
    router.replace(newPath.href)
    router.refresh()
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='flex items-center gap-2'>{t('languageSwitcher.title')}</Button>
      </PopoverTrigger>
      <PopoverContent className='bg-[#fffbdd] flex flex-col justify-center items-center gap-2 w-auto'>
        <Button onClick={() => handleChangeLanguage('en')} className='bg-[#530800ad] text-[#fffbdd] hover:bg-[#530800ad]/90'>
          {t('languageSwitcher.english')}
        </Button>
        <Button onClick={() => handleChangeLanguage('es')} className='bg-[#530800ad] text-[#fffbdd] hover:bg-[#530800ad]/90'>
          {t('languageSwitcher.spanish')}
        </Button>
      </PopoverContent>
    </Popover>
  )
}
