import mongoose from 'mongoose'

const Schema = mongoose.Schema

const postSchema = new Schema (
  {
    thread: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile'
    },
    added_by: {type: mongoose.Schema.Types.ObjectId,ref: 'Profile'},
    date: {type: Date, default: Date.now}
  },
  { timestamps: true}
)

const Post = mongoose.model('Post', postSchema)

export {
  Post
}