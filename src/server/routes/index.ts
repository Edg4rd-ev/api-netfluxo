import { Router } from 'express'
import { UsersController } from '../controllers'

const router = Router()

router.get('/', (_, res) => {
  return res.send('Aoba')
})
router.post('/user/create', UsersController.create)

export { router }
