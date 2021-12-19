import React from 'react'

function GameShow({ game }){
console.log('gammemememememememe', game)

  return (
    <div className='gameCard'>
    <img src={game.background_image} alt='game' />
    </div>

  )
}

export default GameShow