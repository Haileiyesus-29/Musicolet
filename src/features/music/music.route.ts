import { Router } from 'express'
import * as musicController from './music.controller'
import { authenticate } from '../../middlewares/authenticate'

const musicRouter = Router()

musicRouter.use(authenticate)
musicRouter.get('/', musicController.getMusics)
musicRouter.post('/', musicController.createMusic)
musicRouter.put('/', musicController.updateMusic)
musicRouter.delete('/', musicController.deleteMusic)
musicRouter.get('/:id', musicController.getMusicById)

export default musicRouter
