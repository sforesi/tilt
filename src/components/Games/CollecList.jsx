import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchCard from './SearchCard'
import * as rawgService  from '../../services/rawgService'

  const Collections = () => {

  const [collections, setCollections]= useState([])

  const sortCollections = async (e) => {

    e.preventDefault()
      try {
        const data = await rawgService.Games(e.target.value)
        setCollections(data.results)
        console.log(rawgService.Games)
    } catch (error) {
      throw error
    }
  }
  
  return (
    <div className='content'>
      <div className='drop-down'>
    <select name="collections" onChange={sortCollections}>
      <option value="genre">select genre</option>
      <option value="favorites">favorites</option>
      <option value="played">played</option>
      <option value="wishlist">wishlist</option>
    
    </select>
    </div>
    <div className='games'>
      {collections.map((collection)=>(
        <Link to={`/collection/${collection.id}`}key={collection.id}>
          <SearchCard
          collection={collection}
          />
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Collections