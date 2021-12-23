import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchCard from './SearchCard'
import * as gameService from '../../services/gameService'
import { addToCollection } from '../../services/gameService'
import '../../styles/collections.css'

  const Collections = () => {

  const [collections, setCollections]= useState([])

  
  return (
    <div className='content'>
      <div className='drop-down'>
    <select name="collections">
      <option value="genre">select collection</option>
      <option value="favorites">favorites</option>
      <option value="played">played</option>
      <option value="wishlist">wishlist</option>
    
    </select>
    </div>
    <div className='collections'>
      {collections.map((category, id)=>(
        <Link to={`${id}/collection/${category.id}`}key={category.id}>
          <SearchCard
          category = {category}
          addToCollection={addToCollection}
          />
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Collections