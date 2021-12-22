import React from 'react';
import { Link } from 'react-router-dom';
import CollectionShow from './CollectionShow';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/kerasel.css"



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const CollectCarousel = ({games, title}) => {
  
  console.log("hi there are games", games)
  console.log('test')

return (
  
  <div className='keraselContainer'>
    <h1>{title}</h1>
    <Carousel 
    ssr
    partialVisible
    itemClass="image-item"
    responsive={responsive}
    
    >
      {games.map((game) => (
      <Link to={`/games/${game._id}`}key={game.id}>
        <CollectionShow 
          game={game}
          key={game.id} 
        />
      </Link>
      ))}
    </Carousel>
      {/* <PostList
    /> */}

  </div>
  
)
}

export default CollectCarousel