import React from "react";
import * as gameService from '../../services/gameService'


const CollectionButtons = ({game}) => {
  console.log(game)
  const gameId = game.game._id
  const handleCollection = async(e) => {
    console.log('CATEGORY!!!!', e.target.id)
    console.log('GAME ID!!!!',gameId)
    const data = await gameService.addToCollection()
    
  } 

  return(
    <div>
      <button 
      onClick={(e) => handleCollection(e)}
      id="favorites">FAVORTIE
      </button>
      <button 
      onClick={(e) => handleCollection(e)}
      id="played">PLAYED
      </button>
      <button 
      onClick={(e) => handleCollection(e)}
      id="wishlist">WISHLIST
      </button>
    </div>
  )
}




export default CollectionButtons