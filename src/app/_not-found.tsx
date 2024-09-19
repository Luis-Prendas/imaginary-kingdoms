import { unstable_setRequestLocale } from 'next-intl/server'

interface NotFoundParams {
  locale: string
}

export default function NotFound({
  params: { locale },
}: {
  params: NotFoundParams
}) {
  unstable_setRequestLocale(locale)

  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      {/* ... resto del contenido ... */}
    </div>
  )
}

// Alternativamente, si prefieres renderizado dinámico, puedes usar esto en lugar de unstable_setRequestLocale:
// export const dynamic = 'force-dynamic';
