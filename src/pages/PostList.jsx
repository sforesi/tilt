import React, { useState, useEffect } from 'react'
import { getAllPosts,updatePost, deletePost } from '../services/postService'

// Components
import PostCard from '../components/Post/PostCard'
import CreatePost from "../pages/CreatePost/CreatePost"


const PostList = (props) => {
  const [posts, setPosts] = useState([])



  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId)
      setPosts(posts.filter((post) => post._id !== postId))
    } catch (error) {
      throw error
    }
  }


  // const handleUpdatePost = (e) => {
  //   setPosts({
  //     ...posts,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      console.log("postDAta", postData)
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) }
  }, [])

  return (
    <div className="layout">
      <h1>Posts</h1>
      <CreatePost
      user={props.user}
      posts={posts}
      setPosts={setPosts}
      />
      {posts.length&&
      posts?.map((post) => (
        <PostCard
          post={post}
          key={post._id}
          handleDeletePost={handleDeletePost}
          />
      ))}
    </div>
  )
}

export default PostList