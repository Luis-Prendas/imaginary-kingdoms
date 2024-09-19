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
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}
