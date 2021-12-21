import React, { useState } from 'react'
import { useNavigate } from 'react-router'
// import '../../styles/Create.css'

// Components
import PostForm from './PostForm'
import Header from '../../components/misc/Header'

//Services
import { createPost } from '../../services/postService.js'

const CreatePost = (props) => {
  const navigate = useNavigate()
  const [post, setPost] = useState('')

  const formData = {
    post: post, // question input

    // error:
    // added_by: props.user.profile, // who created the post
  }

  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      const newPost = await createPost(formData)
      console.log(newPost) //<= verify new post data
      navigate('/posts')
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
      <p>Post</p>
    {/* <Header title='' /> */}
    <PostForm
      post={post}
      setPost={setPost}
      handleCreatePost={handleCreatePost}
    />
  </div>
  )
}

export default CreatePost