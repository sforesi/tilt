import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchCard from './SearchCard'
import * as rawgService  from '../../services/rawgService'
import '../../styles/searchpage.css'



  const GamesSearch= (props) => {

  const [games, setGames]= useState([])
  const [search, setSearch]= useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()
      try {
        const data = await rawgService.gameSearch(search)
        setGames(data.results)
    } catch (error) {
      throw error
    }
  }

  
  return (
    <div>
    <form 
    className='search'
    onSubmit={handleSubmit}>
          <input
            id="gameTitle"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <input className='searchbtn' type="submit" value="Search" />
        </form>
        <div className='games'>
      {games.map((game)=>(
        <Link to={`/games/${game.id}`}key={game.id}>
          <SearchCard
          game={game}
          />
        </Link>
      ))}
      </div>
    </div>
  )
}

export default GamesSearch