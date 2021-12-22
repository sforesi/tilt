import React from "react";

const SearchCard=(props) =>{
  return(
<div>
  <div className="wrapper">
  <img className="game-image" src={props.game.background_image} alt='game' />
  </div>
</div>
    
  )
}
export default SearchCard