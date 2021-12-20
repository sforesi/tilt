import React from 'react'

function GameShow({ game }){
console.log('gammemememememememe', game)

  return (
    <>
    <img src={game.background_image} alt='game' />
    </>

  )
}

export default GameShow