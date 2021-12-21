import React from 'react'

const PostForm = (props) => {
  return (
    <form className="create-form" onSubmit={props.handleCreatePost}>
      <div className="review-prompt">
        <label Enter review></label>
      </div>
      {/* <input 
        required 
        name="review"
        autoComplete='off'
        placeholder='review'
        value={props.name}
        onChange={(e) => props.setReview(e.target.value)}
        /> */}
        <textarea
        className='input-field'
        value={props.name}
      ></textarea>
      <button>
        Save
      </button>
    </form>
    

  )
}

export default PostForm