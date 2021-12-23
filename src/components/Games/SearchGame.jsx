import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchCard from './SearchCard'
import * as rawgService  from '../../services/rawgService'

  const GamesSearch= (props) => {

  const [games, setGames]= useState([])
  const [search, setSearch]= useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()
      try {
        const data = await rawgService.gameSearch(search)
        setGames(data.results)
        console.log(data.results)
    } catch (error) {
      throw error
    }
  }

  
  return (
    <div>
    <form onSubmit={handleSubmit}>
          <input
            id="gameTitle"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
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