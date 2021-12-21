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
  console.log(search)
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
    console.log(res)
    const data = await res.json()
    console.log(data.message)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
