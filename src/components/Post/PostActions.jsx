import React from 'react'
import '../../styles/Card.css'

const PostActions = (props) => {
  const authorId = props.post.author?._id ? props.post.author._id : props.post.author
  const isAuthor = props.user?.profile === authorId

    console.log(props)
    
  return (

    isAuthor &&
    <div className="interactions">
      <button
        onClick={() => props.handleDeletePost(props.post._id)}
      >Delete</button>
      <button
        onClick={() => props.setEdit(!props.edit)}
      >Edit</button>
    </div>
  )
}

export default PostActions