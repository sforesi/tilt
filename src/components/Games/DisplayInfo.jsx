import React from "react";
import "./DisplayInfo.css";
const DisplayInfo = (props) => {
  console.log(props.game.rawg.name);
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
              <p>{props.game.rawg.released}</p>
            </div>
            <p className="description">{props.game.rawg.description_raw}</p>
        <div className="collection-buttons">
          <button></button>
          <button></button>
          <button></button>
        </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DisplayInfo;