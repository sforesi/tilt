import React from 'react'

const PostForm = (props) => {
  return (
    <form className="create-form" onSubmit={props.handleCreatePost}>
      <div className="post-prompt">
      </div>
      <input 
        required 
        name="post"
        autoComplete='off'
        placeholder='post'
        value={props.post}
        onChange={(e) => props.setPost(e.target.value)}
        />
        <textarea
        className='text-area'
        value={props.post}
      ></textarea>
      <button type="submit">Save</button>
    </form>
    

  )
}

export default PostForm