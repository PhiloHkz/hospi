import { Router } from 'express'
import { testController } from '../controllers/testController.js'

const testRouter = Router()

testRouter
    .get('/', testController)
    

export default testRouter