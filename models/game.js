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

const gameSchema = new mongoose.Schema(
  {
    title: String,
    coverArt: String,
    genre: String,
    rawg_id: Number,
    releaseYear: Number,
    rating: Number,
    description: String,
    reviews: [reviewSchema],
    collectedBy: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  }
)

const Game = mongoose.model('Game', gameSchema)

export {
  Game
}