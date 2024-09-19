import { NextIntlClientProvider } from 'next-intl'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  return (
    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
  )
}
