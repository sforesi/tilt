import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchCard from './SearchCard'
import * as rawgService  from '../../services/rawgService'

  const GamesSearch= (props) => {

  const [games, setGames]= useState([])

  const searchGame = async (e) => {

    e.preventDefault()
      try {
        const data = await rawgService.gameSearch(e.target.value)
        setGames(data.results)
        console.log(data.results)
    } catch (error) {
      throw error
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(games)
    setGames('')
  };
  
  return (
    <div>
      <h1 style={{color: "green"}}>HEEEEELELLLLOADASDASDASDASDASDASDASDKDLOFWEOFJNM</h1>
    <form onSubmit={handleSubmit}>
          <input
            id="gameTitle"
            type="text"
            value={setGames}
            onChange={searchGame}
          />
          <input type="submit" value="Search Game" />
      {games.map((game)=>(
        <Link to={`/games/${game.id}`}key={game.id}>
          <SearchCard
          game={game}
          />
        </Link>
      ))}
        </form>
    </div>
  )
}

export default GamesSearch