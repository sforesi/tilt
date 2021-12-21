import React from 'react'

const PostForm = (props) => {
  return (
    <form className="create-form" onSubmit={props.handleCreatePost}>
      <div className="review-prompt">
        <label>Enter your review</label>
      </div>
      <input
        required
        name="review"
        autoComplete='off'
        placeholder="review"
        value={props.name}
        onChange={(e) => props.setReview(e.target.value)}
      />
      <textarea
        className='input-field'
        value={props.name}
      ></textarea>

      <div className="border"></div>

      <div className="review-prompt">
        <label>Review</label>
        <button
          type="button"
          id="plus-button"
          onClick={() => props.setToggleCode(!props.toggleReview)}
        >+</button>
      </div>

      <div className="border"></div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm