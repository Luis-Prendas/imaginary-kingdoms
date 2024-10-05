'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'
import { Loader2, LogIn } from 'lucide-react'
import { useState, useTransition } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useSession } from 'next-auth/react'
import io from 'socket.io-client'
import { useRouter } from 'next/navigation'

const socket = io() // Conectar al servidor WebSocket

export default function RoomPage() {
  const t = useTranslations()
  const { data: session } = useSession()
  const router = useRouter()

  const [isPending, startTransition] = useTransition()
  const [roomId, setRoomId] = useState<string | null>(null)

  const createRoom = () => {
    startTransition(async () => {
      if (!roomId) return
      socket.emit('joinRoom', roomId, session?.user.id) // Unirse a la sala
      router.push(`room/${roomId}`)
    })
  }

  return (
    <Card className='w-[350px] bg-[#fffbdd] text-[#530800]'>
      <CardHeader>
        <CardTitle>{t('rooms.rooms')}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='createRoom'>{t('rooms.roomId')}</Label>
          <Input id='createRoom' type='text' placeholder={t('rooms.roomId')} onChange={(e) => setRoomId(e.target.value)} />
        </div>
      </CardContent>
      <CardFooter className='flex justify-end gap-4'>
        <Button
          disabled={isPending}
          onClick={() => createRoom()}
          className='flex items-center gap-2 text-[#530800] bg-transparent outline outline-1 outline-[#530800]'
        >
          {isPending ? <Loader2 className='h-4 w-4 animate-spin' /> : <LogIn className='h-4 w-4' />}
          {t('rooms.create')}
        </Button>
        <Button
          disabled={isPending}
          className='flex items-center gap-2 text-[#530800] bg-transparent outline outline-1 outline-[#530800]'
        >
          {isPending ? <Loader2 className='h-4 w-4 animate-spin' /> : <LogIn className='h-4 w-4' />}
          {t('rooms.join')}
        </Button>
      </CardFooter>
    </Card>
  )
}
