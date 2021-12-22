import React from 'react'
import '../../styles/Card.css'

const PostActions = (props) => {
  const authorId = props.post.added_by?._id ? props.post.added_by._id : props.post.added_by
  const isAuthor = props.user?.profile === authorId

  return (

    isAuthor &&
    <div className="interactions">
      <button
        onClick={() => props.handleDeletePost(props.post._id)}
      >Delete</button>
      {/* <button
        onClick={() => props.handleUpdatePost(props.post._id)}
      >update</button> */}
    </div>
  )
}

export default PostActions