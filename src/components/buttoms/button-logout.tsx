'use client'
import { Button } from '@/components/ui/button'
import { Loader2, LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'

export default function ButtonLogout({ ...props }) {
  const t = useTranslations()
  const locale = useLocale()

  const [isPending, startTransition] = useTransition()

  const handleClick = async () => {
    startTransition(async () => {
      await signOut({
        callbackUrl: `/${locale}/login`,
      })
    })
  }

  return (
    <Button
      {...props}
      disabled={isPending}
      onClick={handleClick}
      className='flex items-center gap-2'
    >
      {isPending ? (
        <Loader2 className='h-4 w-4 animate-spin' />
      ) : (
        <LogOut className='h-4 w-4' />
      )}
      {t('home.logout')}
    </Button>
  )
}
