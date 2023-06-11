import { server } from './server/Server'

server.listen({ port: process.env.PORT }, () => {
  console.log(`Server running in: http://localhost:${process.env.PORT}`)
})
