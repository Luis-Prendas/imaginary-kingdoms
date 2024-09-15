import { auth } from '@/auth'
import ButtonLogout from '@/components/buttoms/button-logout'

export default async function Home() {
  const session = await auth()

  if (!session) {
    return <div>Not authenticated</div>
  }

  return (
    <div className='container'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <ButtonLogout>Logout</ButtonLogout>
    </div>
  )
}
