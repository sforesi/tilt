import { Profile } from '../models/profile.js'
import { Game } from '../models/game.js'

import axios from 'axios'


const index = async (req, res) => {
  try {
    const BASE_URL = `https://api.rawg.io/api/games?page_size=5&genres=${req.query.genre}&key=${process.env.API_KEY}`
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
    res.status(200).json(response.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const createReview = async (req, res) => {
  try {
    req.body.author = req.user.Profile
    const game = await Game.findById(req.params.id)
    game.reviews.push(req.body)
    await game.save()
    const newReview = game.reviews[game.reviews.length - 1]
    return res.status(201).json(newReview)
    } catch (err) {
      return res.status(500).json(err)
    }
  }


export {
index,
show,
createReview,
addReview,
}