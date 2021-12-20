import { Profile } from '../models/profile.js'
import { Game } from '../models/game.js'

import axios from 'axios'
import { response } from 'express'


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
    const BASE_URL = `https://api.rawg.io/api/games?page_size=50&genres=${req.query.genre}&key=${process.env.API_KEY}`
    const response = await axios.get(BASE_URL)
    res.status(200).json(response.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const show = async (req, res) => {
  console.log('SEE ME!', req.params.id)
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

const addToFavorites = async(req, res) => {
  console.log(req.params.id)
  try {
    req.body.savedBy = req.user.profile
    const favGame = Game.findOne({rawgId: req.params.id })
    if (favGame) {
      favGame.savedBy.push(req.user.profile)
      await favGame.save()
      return res.status(201).json(favGame)
    } else {
      const createFavGame = await favGame.create(req.body)
      return res.status(201).json(createFavGame)
    }     
  } catch (err) {
    return res.status(500).json(err)
  }
}

const addToPlayed = async(req, res) => {
  console.log(req.params.id)
  try {
    
  } catch (err) {
    return res.status(500).json(err)
  }
}


const addToWatchlist = async(req, res) => {
  console.log(req.params.id)
  try {
    
  } catch (err) {
    return res.status(500).json(err)
  }
}


// const  saveToDatabase = async (req, res) => {
//   try {
//     const game = await Game.findOne({ rawgId: req.params.id})
//     if(game){
//       return res.status(201).json(game)
//     } else {
//       const createGame = await Game.create(req.body)
//       return res.status(201).json(createGame)
//     }
//   } catch (err) {
//     return res.status(500).json(err)
//   }
// }

export {
index,
show,
search,
addToFavorites,
addToWatchlist,
addToPlayed
}