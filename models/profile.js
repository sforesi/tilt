import mongoose, { Collection } from 'mongoose'

const Schema = mongoose.Schema


const collectionSchema = new Schema (
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: Collection,
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
    required: true
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
