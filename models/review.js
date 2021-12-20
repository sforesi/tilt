import mongoose from 'mongoose'

const Schema = mongoose.Schema


const reviewSchema = new Schema (
  {
    review: String,
    author: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
      }
    ]
  }
)

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}