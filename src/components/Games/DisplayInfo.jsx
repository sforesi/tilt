import React from 'react'
import './DisplayInfo.css'
const DisplayInfo = (props) => {
  console.log(props.game.rawg.name)
  return (
    <div className='game-detail'>
      <div className='bg-image'>

        <img id='bg-image' src={props.game.rawg.background_image} alt="background-img" />
      </div>
      <h3>{props.game.rawg.name}</h3>
      <h3>{props.game.rawg.genres.map(g => `${g.name} | `)}</h3>
      <h3>{props.game.rawg.released}</h3>
      <h3>{props.game.rawg.developers[0].name}</h3>   
      <h3>{props.game.rawg.platforms.map(p => `${p.platform.name} | `)}</h3>
      {/* <ul>
        {props.game.short_screenshots.map(ss => <li><img src={ss.image} alt="screenshot" /></li>)}
      </ul> */}
      


      <p>{props.game.rawg.description_raw}</p>

    </div>
  )
}

export default DisplayInfo