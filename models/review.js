import mongoose from 'mongoose'

const Schema = mongoose.Schema


const reviewSchema = new Schema (
  {
    content: String,
    game: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Game'
      }
    ],
    author: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
      }
    ]
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}