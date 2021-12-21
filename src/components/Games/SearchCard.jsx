import React from "react";

const SearchCard=(props) =>{
  return(
<div>
  <div className="wrapper">
  <img className="game-image"  style={{ Width: '1500px', height: "175px",}} src={props.game.background_image} alt='game' />
  </div>
</div>
    
  )
}
export default SearchCard