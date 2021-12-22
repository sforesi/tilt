import React, { useState, useEffect } from 'react'
import { getAllPosts } from '../services/postService'

// Components
import PostCard from '../components/Post/PostCard'
import CreatePost from "../pages/CreatePost/CreatePost"


const PostList = (props) => {
  const [posts, setPosts] = useState([])

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
          />
      ))}

    </div>
  )
}

export default PostList