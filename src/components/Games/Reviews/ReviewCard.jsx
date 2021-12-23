import React from "react";
import * as reviewService from '../../../services/reviewService'
import '../../../styles/DisplayInfo.css'


const ReviewCard = (props) => {
  console.log('see me!', props.review)



  return ( 
    <div className="review-card">
      <div className="review-container">
        <p>
          {props.review.content}
        </p>
      </div>
    </div>
  )
}

export default ReviewCard