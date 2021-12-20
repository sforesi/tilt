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
    res.status(200).json(response.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const  addToCollection = async (req, res) => {
  try {
    req.body.collectedBy = req.user.profile
    const game = await Game.findOne({ rawgId: req.params.id})
    if(game){
      game.collectedBy.push(req.user.profile)
      await game.save()
      return res.status(201).json(game)
    } else {
      const createGame = await Game.create(req.body)
      return res.status(201).json(createGame)
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}
// function addToCollection(req, res) {
//   req.body.collectedBy = req.user.profile
//   Game.findOne({ rawgId: req.params.id })
//   .then((game) => {
//     if (game) {
//       game.collectedBy.push(req.user.profile)
//       game.save()
//       .then(() => {
//         res.status(200).json(response.data)
//       })
//     } else {
//       Game.create(req.body)
//       .then(()=> {
//         res.redirect(`/games/${req.params.id}`)
//       })
//     }
//   })
// }


  
export {
index,
show,
addToCollection,
search,
}