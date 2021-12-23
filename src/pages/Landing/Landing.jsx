import React from 'react'
import PostList from '../PostList'
import Kerasel from "../../components/Kerasel/Kerasel"
import '../../styles/landing.css'

const Landing = (props) => {
  return (
    <div className='main-content'>
      <h4 className="genre-Title">Action</h4>
      <Kerasel genre="action"/>
      <h4 className="genre-Title">Sports</h4>
      <Kerasel genre="sports"/>
      <h4 className="genre-Title">Strategy</h4>
      <Kerasel genre="strategy"/>
      <PostList user={props.user}/>
    </div>
  )
}

export default Landing
