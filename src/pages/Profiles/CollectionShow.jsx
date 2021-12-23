import React from 'react'

function CollectionShow({ game }){

  return (
    <div className='gameCard'>
      <div className='imgContainer'>
        <img src={game.image} alt='game' />
      </div>
    </div>
  )
}

export default CollectionShow