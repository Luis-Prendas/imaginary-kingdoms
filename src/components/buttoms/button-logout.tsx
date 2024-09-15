'use client'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

export default function ButtonLogout({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  const handleClick = async () => {
    await signOut({
      callbackUrl: '/login',
    })
  }

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  )
}
