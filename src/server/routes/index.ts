import { Router } from 'express'

const router = Router()

router.get('/', (_, res) => {
  return res.send('Aoba')
})
router.get('/teste', (_, res) => {
  return res.send('testando hehe')
})

export { router }
