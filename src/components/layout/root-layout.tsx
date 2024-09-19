import RootProvider from '@/providers/root-provider'
import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '%s | Imaginary Kingdoms',
  description: 'A place where you can create your own imaginary kingdoms.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`dark`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
