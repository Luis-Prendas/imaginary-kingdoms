'use client'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io()

type PageProps = {
  params: {
    roomId: string
  }
}

export default function RoomIdPage({ params }: PageProps) {
  const { data: session } = useSession()
  const { roomId } = params

  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.emit('allPlayersRoom', roomId)

    socket.on('playersRoom', (data) => {
      console.log('Recibido datos de los usuarios en la sala', data)
      setUsers(data)
    })

    return () => {
      socket.off('playersRoom')
    }
  }, [])

  return (
    <div>
      <p>Luis</p>
      <code>{JSON.stringify(users)}</code>
    </div>
  )
}
