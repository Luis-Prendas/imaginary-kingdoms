import { Card } from '@/components/ui/card'
import Rooms from './_components/rooms'

export default function RoomsPage() {
  return (
    <section className='w-full h-full flex justify-center items-center'>
      <Card className='w-[350px]'>
        <Rooms />
      </Card>
    </section>
  )
}
