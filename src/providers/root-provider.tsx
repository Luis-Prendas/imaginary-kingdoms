import LanguageProvider from './language-provider/language-provider'
import { ThemeProvider } from './theme-provider/theme-provider'
import { SessionProvider } from 'next-auth/react'

export default function RootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
      >
        <LanguageProvider>{children}</LanguageProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
