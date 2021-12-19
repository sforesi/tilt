import React, { useEffect } from 'react'

// Services 
import * as gameService from '../../services/gameService'

// Components


const GameDetail = (props) => {
  const rawg_id = 8821

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameData = await gameService.getGame(rawg_id)

      } catch (error) {
        throw error
      }
    }
    fetchGame()
  }, [rawg_id])

  return (
    <div>
      
    </div>

  )

}
  
export default GameDetail