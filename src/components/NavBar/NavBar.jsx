import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='navigation-bar'>
          {/* <Link to="/"><img id="logo"src="tilt.png" alt='logo'/></Link> */}
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/profiles">Collection</Link>
          <Link to="" onClick={handleLogout}>Sign Out</Link>
        </nav>
      :
        <nav className='navigation-bar'>
          {/* <Link to="/"><img id="logo" src="tilt.png" alt='logo'/></Link> */}
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/login">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      }
    </>
  )
}

export default NavBar
