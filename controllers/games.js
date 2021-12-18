import { Profile } from '../models/profile.js'
import { Game } from '../models/game.js'
import axios from 'axios'

// const rpg = 'role-playing-games-rpg'
// // const action= 'action'
// const strategy= 'strategy'
// const shooter = 'shooter'
// const sports = 'sports'
// const indie = 'indie'


const genre = "sports"
// req.query

const index = async (req, res) => {
  try {
    const BASE_URL = `https://api.rawg.io/api/games?page_size=1&genres=${genre}&key=${process.env.API_KEY}`
    const response = await axios.get(BASE_URL)
    res.status(200).json(response.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const show = async (req,res) => {
  try {
    console.log('SEE ME', req.params.id)
    const BASE_URL = `https://api.rawg.io/api/games/?id=${req.params.id}?key=${process.env.API_KEY}`
    const response = await axios.get(BASE_URL)
    res.status(200).json(response.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export {
index,
show,
}