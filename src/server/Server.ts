import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

fastify.get('/', (_, res) => {
  return res.send('Aoba')
})

export { fastify }
