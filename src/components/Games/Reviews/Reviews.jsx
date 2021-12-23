import React, {useState} from "react";
import ReviewCard from "./ReviewCard";
import CreateReview from "./CreateReview";
import * as reviewService from '../../../services/reviewService'
import '../../../styles/DisplayInfo.css'



const Reviews = (props) => {
  // const [content, setContent] = useState('')



  return ( 
    <div>
      <h1 className="review-header">Reviews</h1>
      <CreateReview {...props}/>
      {props.reviews.map((review) => (
        <ReviewCard key={review._id} review={review}/>
      ) )}

    </div>
  )
}

export default Reviews