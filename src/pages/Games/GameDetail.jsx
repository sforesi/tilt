import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Services 
import * as gameService from '../../services/gameService'

// Components
import DisplayInfo from '../../components/Games/DisplayInfo'

const GameDetail = (props) => {
  const {rawg_id} = useParams()  
  const [game, setGame] = useState()
// 8821
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameData = await gameService.getGame(rawg_id)
        console.log('see me', gameData)
        setGame(gameData)
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
      />
      }
    </>

  )

}
  
export default GameDetail