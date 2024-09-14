import '@/styles/globals.css'
import RootProvider from '@/providers/root-provider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '%s | Imaginary Kingdoms',
  description: 'A place where you can create your own imaginary kingdoms.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RootProvider>
      <div
        className={`antialiased w-full h-full dark:bg-zinc-950 dark:text-zinc-200`}
      >
        {children}
      </div>
    </RootProvider>
  )
}
