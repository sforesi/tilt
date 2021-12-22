import { Router } from 'express'
import * as gameCtrl from '../controllers/games.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 

router.get('/', gameCtrl.index)
router.get('/:id', gameCtrl.show)
router.post('/search', gameCtrl.search)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/:id/collections/:category',checkAuth, gameCtrl.addToCollection)


router.post('/:id/reviews', checkAuth, gameCtrl.createReview)



export {
    router
}