// import React, { useState, useEffect } from 'react';
// import Form from './Form';
// import GameInfo from './GameInfo';
// import * as rawgService  from '../../services/rawgService'

// function App() {
//   const [game, setGame] = useState('');
//   const [gameTitle, setGameTitle] = useState('')

//   const handleSubmit = title => {
//     setGameTitle(title)
//   };

//   useEffect(() => {
//     const getGenre = async () => {
//     const data = await rawgService.gamesGenre(gameTitle)
//     setGame(data.results)
//     }
//   getGenre()
// }, [gameTitle])

//   return (
//     <div className="App">
//       <div>HELLOOOOOOO</div>
//       <Form handleSubmit={handleSubmit} />
//       {game.Name ? <GameInfo game={game} /> : null}
//     </div>
//   );
// }

// export default App;