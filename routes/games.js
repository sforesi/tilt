import { Router } from 'express'
import * as gameCtrl from '../controllers/games.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as reviewCtrl from '../controllers/reviews.js'

const router = Router()

// ========= Public Routes ========= 
router.get('/', gameCtrl.index)
router.get('/:id', gameCtrl.show)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/:id', reviewCtrl.createReview)


export {
    router
}