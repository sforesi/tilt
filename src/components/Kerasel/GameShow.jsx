import React from 'react'
import { useState } from 'react'

function GameShow({ game }){
console.log('gammemememememememe', game)
const [games, setGames] = useState([])

  return (
    <div className='gameCard'>
      <div className='imgContainer'>
        <img src={game.background_image} alt='game' />
      </div>
    </div>

  )
}

export default GameShow