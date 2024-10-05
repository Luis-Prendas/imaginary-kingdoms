const { Server } = require('socket.io')
const { createServer } = require('http')
const next = require('next')
const { PrismaClient } = require('@prisma/client')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const prisma = new PrismaClient()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res)
  })

  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  })

  // Manejar conexiones de Socket.io
  io.on('connection', (socket) => {
    socket.on('allPlayersRoom', async (roomId) => {
      // Obtener todos los usuarios en la sala
      const users = await prisma.player.findMany({
        where: {
          roomId: roomId,
        },
        select: {
          user: {
            select: {
              id: true,
              name: true,
              characterSheets: true, // Devuelve solo el campo de `characterSheets`
            },
          },
        },
      })

      // Emitir la información de los usuarios en la sala en real-time
      io.emit('playersRoom', users)
    })
    socket.on('disconnect', () => {
      console.log('Usuario desconectado', socket.id)
    })
  })

  const PORT = process.env.PORT || 8989
  server.listen(PORT, () => {
    console.log(`> Servidor escuchando en http://localhost:${PORT}`)
  })
})
