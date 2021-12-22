import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Services 
import * as gameService from '../../services/gameService'

// Components
import DisplayInfo from '../../components/Games/DisplayInfo'

const GameDetail = (props) => {
  const {rawg_id} = useParams()  
  const [game, setGame] = useState()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameData = await gameService.getGame(rawg_id)
        console.log('GAME DATA', gameData)
        setGame(gameData)
        setReviews(gameData.game.reviews)
      } catch (error) {
        throw error
      }
    }
    fetchGame()
  }, [rawg_id])

  return (
    <>
      {game &&
      <DisplayInfo
      game={game}
      reviews={reviews}
      setReviews={setReviews}
      />
      }
    </>

  )

}
  
export default GameDetail