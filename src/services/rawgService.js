const BASE_URL = '/api/games'


export const gamesGenre = async (genre, page) => {
  try {
    const res = await fetch(`${BASE_URL}?genre=${genre}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

