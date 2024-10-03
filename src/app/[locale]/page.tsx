import { auth } from '@/auth'
import { getLocale } from 'next-intl/server'
import { redirect } from 'next/navigation'

export default async function RootPage() {
  const session = await auth()
  const locale = await getLocale()
  if (session) redirect(`/${locale}/home`)
  redirect(`/${locale}/login`)
}
