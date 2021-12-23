import React from 'react'
import { useState } from 'react'

function GameShow({ game }){

  return (
    <div className='gameCard'>
      <div className='imgContainer'>
        <img src={game.background_image} alt='game' />
      </div>
    </div>

  )
}

export default GameShow