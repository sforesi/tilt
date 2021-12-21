import { Profile } from '../models/profile.js'
import { Game } from '../models/game.js'

import axios from 'axios'


const index = async (req, res) => {
  try {
    const BASE_URL = `https://api.rawg.io/api/games?page_size=50&genres=${req.query.genre}&key=${process.env.API_KEY}`
    const response = await axios.get(BASE_URL)
    res.status(200).json(response.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}
const search = async (req, res) => {
  try {
    const BASE_URL = `https://api.rawg.io/api/games?page_size=50&search=${req.params.id}&key=${process.env.API_KEY}`
    const response = await axios.get(BASE_URL)
    res.status(200).json(response.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const show = async (req, res) => {
  try {
    const BASE_URL = `https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`
    const response = await axios.get(BASE_URL)
    const game = await Game.findOne({ rawgId: req.params.id})
    if (game) {
      const gameData = {
        game: game,
        rawg: response.data,
      }
      return res.status(201).json(gameData)
    } else {
      req.body.rawgId = req.params.id
      const createGame = await Game.create(req.body)
      const gameData = {
        game: createGame,
        rawg: response.data,
      }
      return res.status(201).json(gameData)
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}

const addToCollection = async(req, res) => {
  try {
    req.body.savedBy = req.user.profile
    const game = await Game.findById(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    const thisCollection = profile.collections.find(
      (col) => col.category === req.params.category
    )
    if (thisCollection) {
      thisCollection.games.push(game._id)
      await profile.save()
      return res.status(201).json(thisCollection)
    } else {
      profile.collections.push(
        {category: req.params.category}
      )
      await profile.save()
      const newCollection = profile.collections[profile.collections.length -1]
      newCollection.games.push(game._id)
      await profile.save()
      return res.status(201).json(newCollection)
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}


export {
index,
show,
addToCollection,
search,
}