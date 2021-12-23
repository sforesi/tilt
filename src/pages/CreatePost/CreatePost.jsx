import React, { useState } from 'react'
// Components
import PostForm from './PostForm'

//Services
import { createPost } from '../../services/postService.js'

const CreatePost = (props) => {

  const [postForm, setPostForm] = useState({
    thread: "",
    author: props.user?.profile,
  })

  const handleChange = e => {
    setPostForm({
      ...postForm,
      [e.target.name]: e.target.value,
    })
  }


  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      const newPost = await createPost(postForm)
      props.setPosts([newPost, ...props.posts])
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
    <PostForm
      postForm={postForm}
      setPost={setPostForm}
      user={props.user}
      handleCreatePost={handleCreatePost}
      handleChange={handleChange}
    />
  </div>
  )
}

export default CreatePost