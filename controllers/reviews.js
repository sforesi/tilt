
import { Review } from '../models/review.js'
import {Game} from '../models/game.js'

const createReview = async (req, res) => {
  try {
    req.body.game = req.params.id
    req.body.author = req.user.profile
    const review = await Review.create(req.body)
    const game = await Game.findById(req.params.id)
    game.reviews.push(review._id)
    await game.save()
    res.status(201).json(review)

  } catch (err) {
    return res.status(500).json(err)
  }
}
    
  
  export {
    createReview,
}
  