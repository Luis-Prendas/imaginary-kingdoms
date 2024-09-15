import { ThemeProvider } from './theme-provider/theme-provider'

export default function RootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
