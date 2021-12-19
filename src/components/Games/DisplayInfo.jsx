import React from 'react'
import './DisplayInfo.css'
const DisplayInfo = (props) => {
  console.log(props.game)
  return (
    <div className='game-detail'>
      <img src={props.game.background_image} alt="background-img" />
      <h1>Game Details</h1>
      <h3>{props.game.name}</h3>
      <h3>{props.game.released}</h3>
      <h3>{props.game.developers[0].name}</h3>
      {props.game.description_raw}

    </div>
  )
}

export default DisplayInfo