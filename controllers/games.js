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

const addToFavorites = async(req, res) => {
  console.log(req.params.id)
  try {
    req.body.savedBy = req.user.profile
    const favGame = await Game.findById(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    const favorites = profile.collections.find(col => col.category ==='favorites')
    if (favorites) {
      favorites.games.push(favGame._id)
      await profile.save()
      return res.status(201).json(favorites)
    } else {
      profile.collections.push({category: 'favorites'})
      await profile.save()
      const newCollection = profile.collections[profile.collections.length -1]
      newCollection.games.push(favGame._id)
      await profile.save()
      return res.status(201).json(newCollection)
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}

const addToPlayed = async(req, res) => {
  console.log(req.params.id)
  try {
    req.body.savedBy = req.user.profile
    const playedGame = await Game.findById(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    const played = profile.collections.find(col => col.category ==='played')
    if (played) {
      played.games.push(playedGame._id)
      await profile.save()
      return res.status(201).json(played)
    } else {
      profile.collections.push({category: 'played'})
      await profile.save()
      const newCollection = profile.collections[profile.collections.length -1]
      newCollection.games.push(playedGame._id)
      await profile.save()
      return res.status(201).json(newCollection)
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}


const addToWishlist = async(req, res) => {
  console.log(req.params.id)
  try {
    req.body.savedBy = req.user.profile
    const wishGame = await Game.findById(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    const wishlist = profile.collections.find(col => col.category ==='wishlist')
    if (wishlist) {
      wishlist.games.push(wishGame._id)
      await profile.save()
      return res.status(201).json(wishlist)
    } else {
      profile.collections.push({category: 'wishlist'})
      await profile.save()
      const newCollection = profile.collections[profile.collections.length -1]
      newCollection.games.push(wishGame._id)
      await profile.save()
      return res.status(201).json(newCollection)
    }
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
addToFavorites,
addToWishlist,
addToPlayed
}