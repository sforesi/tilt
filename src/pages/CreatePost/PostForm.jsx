import React from 'react'

const PostForm = (props) => {
  return (
    <form className="create-form" onSubmit={props.handleCreatePost}>
      <div className="post-prompt">
      </div>
      <input 
        required 
        name="thread"
        autoComplete='off'
        placeholder='post'
        value={props.postForm.thread}
        onChange={(e) => props.handleChange(e)}
        />
        <input 
        required 
        name="date"
        type="date"
        autoComplete='off'
        placeholder='post'
        value={props.postForm.date}
        onChange={(e) => props.handleChange(e)}
        />
      <button type="submit">Save</button>
    </form>
    

  )
}

export default PostForm