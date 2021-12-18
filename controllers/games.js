import { Profile } from '../models/profile.js'
import { Game } from '../models/game.js'
import axios from 'axios'

const rpg = 'role-playing-games-rpg'
// const action= 'action'
const strategy= 'strategy'
const shooter = 'shooter'
const sports = 'sports'
const indie = 'indie'

// async function index(req, res) {
//   axios
//   .get(`https://api.rawg.io/api/games?page_size=5&genres=${rpg}&key=${process.env.API_KEY}`)
//   .then((response))
// }


async function index(req, res) {
  try {
    const games = `https://api.rawg.io/api/games?page_size=5&genres=${rpg}&key=${process.env.API_KEY}`
    const response = await axios.get(games)
    res.status(201).json(response.data)
  } catch(err) {
  return res.status(500).json(err)
  }
  try {
    const games = `https://api.rawg.io/api/games?page_size=5&genres=${strategy}&key=${process.env.API_KEY}`
    const response = await axios.get(games)
    res.status(201).json(response.data)
  } catch(err) {
  return res.status(500).json(err)
  }
  try {
    const games = `https://api.rawg.io/api/games?page_size=5&genres=${indie}&key=${process.env.API_KEY}`
    const response = await axios.get(games)
    res.status(201).json(response.data)
  } catch(err) {
  return res.status(500).json(err)
  }
  try {
    const games = `https://api.rawg.io/api/games?page_size=5&genres=${shooter}&key=${process.env.API_KEY}`
    const response = await axios.get(games)
    res.status(201).json(response.data)
  } catch(err) {
  return res.status(500).json(err)
  }
  try {
    const games = `https://api.rawg.io/api/games?page_size=5&genres=${sports}&key=${process.env.API_KEY}`
    const response = await axios.get(games)
    res.status(201).json(response.data)
  } catch(err) {
  return res.status(500).json(err)
  }
}

export {
index,
}