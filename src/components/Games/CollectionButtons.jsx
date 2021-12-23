import React from "react";
import * as gameService from '../../services/gameService'
import playButton from '../../assets/played-icon.png'
import favButton from '../../assets/favorites-icon.png'
import wishButton from '../../assets/wishlist-icon.png'
import '../../styles/DisplayInfo.css'



const CollectionButtons = ({game}) => {
  console.log(game)
  const gameId = game.game._id
  const handleCollection = async(e) => {
    const data = await gameService.addToCollection(e.target.id, gameId)
    
  } 

  return(
    <div className="collection-buttons">
      <button 
      onClick={(e) => handleCollection(e)}
      id="favorites"
      >
        <img src={favButton} alt="" />
      </button>
      <button 
      onClick={(e) => handleCollection(e)}
      id="played">
        <img src={playButton} alt="" />
      </button>
      <button 
      onClick={(e) => handleCollection(e)}
      id="wishlist">
        <img src={wishButton} alt="" />

      </button>
    </div>
  )
}






export default CollectionButtons
