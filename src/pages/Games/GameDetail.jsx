import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Services 
import * as gameService from '../../services/gameService'

// Components


const GameDetail = (props) => {
  const {rawg_id} = useParams()  
// 8821
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameData = await gameService.getGame(rawg_id)
        console.log('see me', gameData)

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