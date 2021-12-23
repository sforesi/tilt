const BASE_URL = '/api/games'


export const gamesGenre = async (genre, page) => {
  try {
    const res = await fetch(`${BASE_URL}?genre=${genre}&page=${page}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const gameSearch = async (search) => {
  try {
    const res = await fetch(`${BASE_URL}/search`,{
      headers:{
        "content-type":"application/json"
      },
        body:JSON.stringify({
          search: search
        }),
        method: "POST"
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
