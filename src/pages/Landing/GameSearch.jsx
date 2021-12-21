
import React from 'react'
import SearchGame from "../../components/Games/Search"
import '../../styles/GameSearch.css'

const Search = () => {
  return (
    <div className='page-container'>
      <div className='games-dropdown'>
        <SearchGame genre="action"/>
      </div>
    </div>
  )
}

export default Search
