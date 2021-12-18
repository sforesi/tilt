import { Profile } from '../models/profile.js'
import { Review } from '../models/review.js'

const createReview = async (req, res) => {
  try {
    req.body.author = req.user.Profile
    const review = await new Review(req.body)
    await review.save()
    await Profile.updateOne(
      { _id: req.user.profile },
        { $push: { reviews: review } }
    )
    return res.status(201).json(review)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

export {
createReview
}