import { Router } from 'express'
import * as userController from './user.controller'
import { authenticate } from '../../middlewares/authenticate'

const userRouter = Router()

userRouter.post('/', userController.createUser)
userRouter.get('/', authenticate, userController.getUser)
userRouter.put('/', authenticate, userController.updateUser)
userRouter.delete('/', authenticate, userController.deleteUser)

export default userRouter
