'use client'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import { createSheetAction } from '@/actions/sheet-actions'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'

export default function ButtonCreateSheet() {
  const t = useTranslations()
  const { toast } = useToast()
  const router = useRouter()

  const handleClick = async () => {
    const response = await createSheetAction()
    if (response.status !== 'success') {
      console.error(response.error)
      toast({
        variant: 'destructive',
        title: t('genericErrorMessage.sommetingWentWrong'),
        description: response.error,
      })
      return
    }

    router.push(`sheet/${response.response?.id}`)
  }

  return <Button onClick={handleClick}>{t('sheet.new')}</Button>
}
