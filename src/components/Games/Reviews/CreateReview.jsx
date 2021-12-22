import React, {useState} from "react";
import * as reviewService from '../../../services/reviewService'



const CreateReview = (props) => {
  console.log(props)
const [content, setContent] = useState('')
const formData = {
  content: content
}

const handleSubmit = async(e) => {
  e.preventDefault()
  const newReview = await reviewService.createReview(props.game.game._id, formData)
  props.setReviews([newReview, ...props.reviews])
  setContent('')
}
  return ( 
    <form onSubmit={handleSubmit}>
      <input type="text" name="content" value={content} onChange={(e) => setContent(e.target.value)}/>
      <button type="submit">
        save review
      </button>
    </form>
  )
}

export default CreateReview