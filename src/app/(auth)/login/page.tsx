import { Card } from '@/components/ui/card'
import Login from './_components/login'

export const metadata = {
  title: 'Login',
  description: 'Login to your account for Imaginary Kingdoms.',
}

export default function LoginPage() {
  return (
    <main className='flex justify-center items-center h-full w-full'>
      <Card className='w-[350px]'>
        <Login />
      </Card>
    </main>
  )
}
