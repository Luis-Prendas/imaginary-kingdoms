import { unstable_setRequestLocale } from 'next-intl/server'

export default function NotFound() {
  unstable_setRequestLocale('en')

  return <div>Not found</div>
}
