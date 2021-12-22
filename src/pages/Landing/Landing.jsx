import React from 'react'
import CreatePost from '../CreatePost/CreatePost'
import PostList from '../PostList'

import Kerasel from "../../components/Kerasel/Kerasel"
const Landing = (props) => {
  return (
    <div>
      <h4 style={{color:"red"}}>action</h4>
      <Kerasel genre="action"/>
      <h4 style={{color:"red"}}>sports</h4>
      <Kerasel genre="sports"/>
      <h4 style={{color:"red"}}>strategy</h4>
      <Kerasel genre="strategy"/>
      <PostList user={props.user}/>
    </div>
  )
}

export default Landing
