import { Card } from '@/components/ui/card'
import Login from './_components/login'
import Logo from '@/components/ui/logo'

export const metadata = {
  title: 'Login',
  description: 'Login to your account for Imaginary Kingdoms.',
}

export default function LoginPage() {
  return (
    <Card className='w-[350px]'>
      <Login />
    </Card>
  )
}
