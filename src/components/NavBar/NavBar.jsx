import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='navigation-bar'>
          <img id="logo"src="tilt.png" alt='logo'/>
          <Link to="/">HOME</Link>
          <Link to="/games">GAMES</Link>
          <Link to="/profile">COLLECTION</Link>
          <Link to="/search">SEARCH</Link>
          
          {/* New post? */}
          {/* <Link to="/new">POSTS</Link> */}

          <Link to="" onClick={handleLogout}>SIGN OUT</Link>
        </nav>
      :
        <nav className='navigation-bar'>
          <img id="logo" src="tilt.png" alt='logo'/> 
          <Link to="/">HOME</Link>
          <Link to="/games">GAMES</Link>
          <Link to="/login">SIGN IN</Link>
          <Link to="/signup">SIGN UP</Link>
        </nav>
      }
    </>
  )
}

export default NavBar
