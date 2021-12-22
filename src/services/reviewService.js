import * as tokenService from './tokenService'

const BASE_URL = '/api/games/'



export const createReview = async (gameId, review) => {
  try {
    const res = await fetch(`${BASE_URL}${gameId}/reviews`, {
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