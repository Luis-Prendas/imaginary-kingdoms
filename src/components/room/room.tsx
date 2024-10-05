'use client'
import { auth } from '@/auth'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io() // Conectar al servidor WebSocket

export default function Room() {
  const { data: session } = useSession()
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [room, setRoom] = useState('')
  const [currentRoom, setCurrentRoom] = useState('')

  useEffect(() => {
    // Escuchar mensajes entrantes
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    // Limpiar el efecto
    return () => {
      socket.off('message')
    }
  }, [])

  const createRoom = () => {
    console.log('Creando sala')
    if (room) {
      console.log('Uniendo a la sala')
      socket.emit('joinRoom', room, session?.user.id) // Unirse a la sala
      setCurrentRoom(room)
      setMessages([]) // Limpiar mensajes al cambiar de sala
      setRoom('') // Limpiar input de sala
      return
    }
  }

  const sendMessage = () => {
    if (input && currentRoom) {
      socket.emit('message', { room: currentRoom, message: input }) // Enviar mensaje a la sala
      setInput('') // Limpiar el input
    }
  }

  return (
    <div>
      <div>
        <input type='text' value={room} onChange={(e) => setRoom(e.target.value)} placeholder='Nombre de la sala' />
        <button onClick={createRoom}>Crear/Unirse a sala</button>
      </div>
      {/* <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button onClick={sendMessage}>Enviar</button> */}
    </div>
  )
}
