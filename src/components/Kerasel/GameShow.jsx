import React from 'react'

function GameShow({ game }){
console.log('gammemememememememe', game)

  return (
    <div className='gameCard'>
      <div className='imgContainer'>
    <img  style={{ minWidth: '100%', height: "100%", position: 'absolute',}} src={game.background_image} alt='game' />
    </div>
    </div>

  )
}

export default GameShow