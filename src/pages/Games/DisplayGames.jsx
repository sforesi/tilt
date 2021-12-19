import { Game } from "../../../models/game.js"
import axios from 'axios'


// build a component that maps through game data and returns an array of game card components 
// create a game card component
  // this component will have a button/function that calls upon a create game service 
  // that service will line up with a route in controller 
  // the only difference between this and any other create functionality is that instead of form data we want to pass in props.game, props.game should be available in the game card through the mapping function in the game index component 
// we may need to create an object withing game card that looks at the properties withing schema and then sets the values based on data pulled from RAWG 

// const DisplayGames = (props) => {
  
//   const selectedGames = props.Games.map((game, idx) => {
//     return (
//       game.category === props.gameCategory && 
//       <Game
//         key={idx}
//         game={game}
//         addToCart={props.addToCart}
//       />
//     )
//   })

//   return (
//     <div className="product-list">
//           {selectedGames}
//     </div>
//   )
// }

// export default DisplayGames



function createReview(req, res) {
  
}