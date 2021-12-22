import * as tokenService from './tokenService'

const BASE_URL = '/api/reviews/'



export const createReview = async (review) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(review)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}