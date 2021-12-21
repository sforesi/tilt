import React from "react";
import "./DisplayInfo.css";
const DisplayInfo = (props) => {
  console.log(props.game.rawg.name);
  return (
    <div className="game-detail">
      <div className="left-column">
        <div className="image-container">
          <img
            id="bg-image"
            src={props.game.rawg.background_image}
            alt="background-img"
          />

        </div>
      </div>
      <div className="right-column">
        <p className="title">{props.game.rawg.name}</p>
        <p>{props.game.rawg.genres.map((g) => `${g.name} | `)}</p>
        <p>{props.game.rawg.released}</p>
        <p>{props.game.rawg.developers[0].name}</p>
        <p>{props.game.rawg.platforms.map((p) => `${p.platform.name} | `)}</p>
        <p className="description">{props.game.rawg.description_raw}</p>
      </div>
    </div>
  );
};

export default DisplayInfo;