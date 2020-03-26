import { Router } from 'express'

import { UserController } from './controllers'

const routes = Router()

routes
  .route('/users')
  .post(UserController.create)
  .get(UserController.getAll)

export default routes
