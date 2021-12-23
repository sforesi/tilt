import React from 'react'
import { useState } from 'react'

function GameShow({ game }){
  
const [hover, setHover] = useState(false)

  return (
    <div 
    className='gameCard'
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    >
      <div className='imgContainer'>
        {hover && <p>{game.name}</p>}
        <img src={game.background_image} alt='game' />
      </div>
    </div>

  )
}

export default GameShow