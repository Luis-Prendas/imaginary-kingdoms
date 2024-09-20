import { Metadata } from 'next'
import Register from './_components/register'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register to your account for Imaginary Kingdoms.',
}

export default function RegisterPage() {
  return (
    <Card className='w-[350px]'>
      <Register />
    </Card>
  )
}
