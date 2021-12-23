import React from "react";
import "../../styles/DisplayInfo.css"
import CollectionButtons from "./CollectionButtons";
import Reviews from "./Reviews/Reviews"

const DisplayInfo = (props) => {
  console.log(props.game);
  const gameDescription = props.game.rawg.description_raw.split('.').slice(0,3).join('.').concat('.')
  const gameYear = props.game.rawg.released.split('-').slice(0,1)
  return (
    <div className="display-info">
      <div className="container-2">
        <div className="banner-image">
          <img 
          id="banner-image"
          src={props.game.rawg.background_image}
          alt="banner-img"
          />
        </div>
        <div className="game-detail">
          <div className="left-column">
            <div className="image-container">
              <img
                id="cover-image"
                src={props.game.rawg.background_image}
                alt="background-img"
              />
            </div>
            <div className="details">
              <p>{props.game.rawg.genres.map((g) => `${g.name} | `)}</p>
              <p>{props.game.rawg.developers[0].name}</p> 
              <p>{props.game.rawg.platforms.map((p) => `${p.platform.name} | `)}</p>
            </div>
          </div>
          <div className="right-column">
            <div className="header">
              <p className="title">{props.game.rawg.name}</p>
              <p>{gameYear}</p>
            </div>
            <p className="description">{gameDescription}</p>
            <CollectionButtons
            game={props.game}
            />
            <Reviews
            {...props}
        
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default DisplayInfo;