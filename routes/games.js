import { Router } from 'express'
import * as gameCtrl from '../controllers/games.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 

router.get('/', gameCtrl.index)
// router.get('/games', gameCtrl.search)
router.get('/:id', gameCtrl.show)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/:id/collection/:category', gameCtrl.addToCollection)
// router.post('/:id/playedCollection', gameCtrl.addToPlayed)
// router.post('/:id/wishlistCollection', gameCtrl.addToWishlist)



export {
    router
}