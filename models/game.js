import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema(
  {
    title: String,
    coverArt: String,
    genre: String,
    releaseYear: Number,
    rating: Number,
    description: String,
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
      }
    ]
  }
)

const Game = mongoose.model('Game', gameSchema)

export {
  Game
}