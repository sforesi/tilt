import React from 'react'
import '../../styles/Card.css'

const PostCard = (props) => {
  return (
    <div className="post-card">

      <div className="post-container">
        <p>{props.post.post}</p>
      </div>


    </div>
  )
}

export default PostCard