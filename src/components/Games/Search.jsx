import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchCard from './SearchCard'
import * as rawgService  from '../../services/rawgService'

  const Games= () => {

  const [games, setGames]= useState([])
  useEffect(()=>{
    const searchGame = async () => {

        try {
          const data = await rawgService.gamesGenre('action')
          setGames(data.results)
      } catch (error) {
        throw error
      }
    } 
    searchGame()
  }, [] ) 
  const searchGame = async (e) => {
    e.preventDefault()
      try {
        const data = await rawgService.gamesGenre(e.target.value)
        setGames(data.results)
    } catch (error) {
      throw error
    }
  }
  
  return (
    <div className='content'>
      <div className='drop-down'>
    <select name="games" onChange={searchGame}>
      <option value="shooter">select genre</option>
      <option selected value="action">action</option>
      <option value="strategy">strategy</option>
      <option value="role-playing-games-rpg">shooter</option>
      <option value="board-games">board-games</option>
      <option value="sports">sports</option>
      <option value="casual">casual</option>
      <option value="simulation">simulation</option>
      <option value="puzzle">puzzle</option>
      <option value="arcade">arcade</option>
      <option value="platformer">platformer</option>
      <option value="racing">racing</option>
      <option value="massively-multiplayer">multiplayer</option>
      <option value="adventure">adventure</option>
      <option value="fighting">fighting</option>
      <option value="family">family</option>
      <option value="educational">educational</option>
      <option value="card">card</option>
      <option value="family">family</option>
      <option value="shooter">shooter</option>
    </select>
    </div>
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

export default Games