
import * as tokenService from './tokenService'
const BASE_URL = '/api/games/' //<= does this route look familiar?

export const getAllGames = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}


export const getGame = async (rawg_id) => {
  console.log(rawg_id)
  try {
    const res = await fetch(`${BASE_URL}${rawg_id}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}


export const addToCollection = async (category, id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}/collection/${category}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(category)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}