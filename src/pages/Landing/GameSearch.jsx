
import React from 'react'
import SearchGame from "../../components/Games/Search"
import './GameSearch.css'

const Search = () => {
  return (
    <div className='all-games-container'>
      <div className='games-dropdown'>
        <SearchGame genre="action"/>
      </div>
    </div>
  )
}

export default Search
