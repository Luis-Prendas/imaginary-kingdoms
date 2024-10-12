'use client'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useSheetStore } from '@/store/sheetStore'
import Link from 'next/link'

export default function ButtonCreateSheet() {
  const t = useTranslations()
  const router = useRouter()
  const locale = useLocale()
  const { newSheet } = useSheetStore()

  return (
    <Button asChild>
      <a href={`/${locale}/create`}>{t('sheet.newCharacterSheet')}</a>
    </Button>
  )
}
