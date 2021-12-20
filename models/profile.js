import mongoose from 'mongoose'

const Schema = mongoose.Schema


const collectionSchema = new Schema (
  {
    category: {
      type: String,
    },
    games: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
      }
    ],
  }
)

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ],
  collections: [
      collectionSchema
],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
},
  { timestamps: true, }
)

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
