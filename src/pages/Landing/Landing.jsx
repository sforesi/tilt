import React from 'react'
import PostList from '../PostList'
import Kerasel from "../../components/Kerasel/Kerasel"
import '../../styles/landing.css'

const Landing = (props) => {
  return (
    <div className='main-content'>
      <div className='welcome'>
      <span className='welcometo'>welcome to </span>
      <img className='banner-img' src='tilt.png' alt='banner-logo' />
      </div>
      <div className='subtitle-banner'>
        <span className='placefor'>a social network for game lovers</span>
      </div>
      <h4 className="genre-Title">action</h4>
      <Kerasel genre="action"/>
      <h4 className="genre-Title">sports</h4>
      <Kerasel genre="sports"/>
      <h4 className="genre-Title">strategy</h4>
      <Kerasel genre="strategy"/>
      <PostList user={props.user}/>
    </div>
  )
}

export default Landing
