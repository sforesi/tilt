import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameSchema = new mongoose.Schema(
  {
    rawgId: Number,
    reviews: [{type: Schema.Types.ObjectId, ref: "Review"}],
  }
)

const Game = mongoose.model('Game', gameSchema)

export {
  Game,
}