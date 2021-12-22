import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchCard from './SearchCard'
import * as gameService from '../../services/gameService'

  const Collections = () => {

  const [collections, setCollections]= useState([])

  const sortCollections = async (e) => {
    e.preventDefault()
      try {
        const data = await gameService.addToCollection(e.target.value)
        setCollections(data.results)
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
    <div className='collections'>
      {collections.map((category)=>(
        <Link to={`/collections/${category.id}`}key={category.id}>
          <SearchCard
          category = {category}
          />
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Collections