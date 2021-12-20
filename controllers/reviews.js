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


  // const index = async (req, res) => {
  //   try {
  //     const reviews = await Review.find({})
  //       .populate('author')
  //       .sort({ createdAt: 'desc' })
  //     return res.status(200).json(reviews)
  //   } catch (err) {
  //     return res.status(500).json(err)
  //   }
  // }
  
  // const show = async (req, res) => {
  //   try {
  //     const review = await Review.findById(req.params.id)
      
  //       .populate('author')
  //     return res.status(200).json(review)
  //   } catch (err) {
  //     return res.status(500).json(err)
  //   }
  // }
  
  // const update = async (req, res) => {
  //   try {
  //     // const updateData = { thread: String }
  //     const updatedReview = await Review.findByIdAndUpdate(
  //       req.params.id,
  //       // updateData,
  //       { new: true }
  //     )
  //     return res.status(200).json(updatedReview)
  //   } catch (err) {
  //     return res.status(500).json(err)
  //   }
  // }
  
  // const deleteReview = async (req, res) => {
  //   try {
  //     await Review.findByIdAndDelete(req.params.id)
  //     const profile = await Profile.findById(req.user.profile)
  //     profile.reviews.remove({ _id: req.params.id })
  //     await profile.save()
  //     return res.status(204).end()
  //   } catch (err) {
  //     return res.status(500).json(err)
  //   }
  // }

  
  export {
    createReview,
    // index,
    // show,
    // update,
    // deleteReview as delete,
  }
  