import * as tokenService from './tokenService'


const BASE_URL = '/api/posts/'

export const getAllPosts = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createPost = async (post) => {
  console.log("HUNTER", post)
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(post)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}