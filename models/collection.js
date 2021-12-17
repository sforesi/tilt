import mongoose from 'mongoose'

const collectionSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ['favorites','watchList', 'played'],
      default: 'favorited'
    },
    games: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
      }
    ]
  }
)

const Collection = mongoose.model('Collection', collectionSchema)

export {
  Collection
}