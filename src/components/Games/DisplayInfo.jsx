import React from 'react'
import './DisplayInfo.css'
const DisplayInfo = (props) => {
  console.log(props.game)
  return (
    <div className='game-detail'>
      <div className='bg-image'>

        <img id='bg-image' src={props.game.background_image} alt="background-img" />
      </div>
      <h3>{props.game.name}</h3>
      <h3>{props.game.genres.map(g => `${g.name} | `)}</h3>
      <h3>{props.game.released}</h3>
      <h3>{props.game.developers[0].name}</h3>   
      <h3>{props.game.platforms.map(p => `${p.platform.name} | `)}</h3>
      {/* <ul>
        {props.game.short_screenshots.map(ss => <li><img src={ss.image} alt="screenshot" /></li>)}
      </ul> */}
      


      <p>{props.game.description_raw}</p>

    </div>
  )
}

export default DisplayInfo