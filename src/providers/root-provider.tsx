export default function RootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`dark`}>{children}</body>
    </html>
  )
}
