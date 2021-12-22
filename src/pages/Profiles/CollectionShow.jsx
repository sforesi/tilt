import React from 'react'
import { useState } from 'react'

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