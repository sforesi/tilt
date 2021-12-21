const BASE_URL = '/api/games'


export const gamesGenre = async (genre) => {
  try {
    const res = await fetch(`${BASE_URL}?genre=${genre}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const gameSearch = async (search) => {
  try {
    const res = await fetch(`${BASE_URL}?search=${search}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}
