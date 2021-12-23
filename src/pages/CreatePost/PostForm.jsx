import React from 'react'

const PostForm = (props) => {

  return (
    <form className="create-form" onSubmit={props.handleCreatePost}>
      <div className="post-prompt">
      </div>
      <div className='postarea'>
      <textarea
        required 
        className='textarea'
        name="thread"
        autoComplete='off'
        placeholder='whats on your mind?'
        value={props.postForm.thread}
        onChange={(e) => props.handleChange(e)}
        />
      <button type="submit" className='postbutton'>Post</button>
      </div>
    </form>
    

  )
}

export default PostForm