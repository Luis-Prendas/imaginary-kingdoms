import { useTranslations } from 'next-intl'

export const dynamic = 'force-dynamic'

export default function NotFound() {
  const t = useTranslations('NotFound')

  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  )
}
