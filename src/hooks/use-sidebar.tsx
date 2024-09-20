import { Anchor, ShieldQuestion } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

export function useSidebar() {
  const t = useTranslations()
  const locale = useLocale()

  const SideBar = [
    {
      label: t('sidebar.generalInformation.generalInformation'),
      options: [
        {
          icon: <ShieldQuestion />,
          label: t('sidebar.generalInformation.introduction'),
          href: `/${locale}/generalInformation/introduction`,
        },
        {
          icon: <Anchor />,
          label: t('sidebar.generalInformation.regionOfPourtas'),
          href: `/${locale}/generalInformation/pourtas`,
        },
      ],
    },
  ]

  return { SideBar }
}
