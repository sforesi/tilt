import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameSchema = new mongoose.Schema(
  {
    title: String,
    coverArt: String,
    genre: String,
    rawg_id: Number,
    releaseYear: Number,
    rating: Number,
    description: String,
    reviews: [{type: Schema.Types.ObjectId, ref: "Review"}],
    collectedBy: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    platforms: [],
    developer: String,

  }
)

const Game = mongoose.model('Game', gameSchema)

export {
  Game,
}