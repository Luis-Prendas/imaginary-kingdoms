import RootLayout from '@/components/layout/root-layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>
}
