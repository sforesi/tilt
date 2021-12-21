import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='navigation-bar'>
          <img id="logo"src="tilt.png" alt='logo'/>
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/profiles">Collection</Link>
          <Link to="" onClick={handleLogout}>Sign Out</Link>
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
