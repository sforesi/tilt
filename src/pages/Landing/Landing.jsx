import React from 'react'
import CreatePost from '../CreatePost/CreatePost'

import Kerasel from "../../components/Kerasel/Kerasel"
const Landing = () => {
  return (
    <div>
      <div>

      <h4>action</h4>
      <Kerasel genre="action"/>
      <h4>sports</h4>
      <Kerasel genre="sports"/>
      <h4>strategy</h4>
      <Kerasel genre="strategy"/>
    </div>
    <CreatePost/
    >
      </div>    
  //   <div className="layout">
  //   <Header title='Create Post' />
  //   <PostForm
  //     post={post}
  //     setPost={setPost}
  //     handleCreatePost={handleCreatePost}
  //   />
  // </div>
  )
}

export default Landing
