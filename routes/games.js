import { Router } from 'express'
import * as gameCtrl from '../controllers/games.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 
router.get('/games', gameCtrl.index)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)


export {
    router
}