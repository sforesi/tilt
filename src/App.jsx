import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profile from './pages/Profiles/Profile'
import GameDetail from './pages/Games/GameDetail'
import GameSearch from './pages/Landing/GameSearch'
import PostList from './pages/PostList'
import GamesSearch from './components/Games/SearchGame'
import * as authService from './services/authService'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/games/:rawg_id"
          element={<GameDetail />}

        />
        <Route
          path="/games"
          element={<GameSearch />}
        />
        <Route
          path="/search"
          element={<GamesSearch />}
        />
        <Route path='/posts'
          element={<PostList user={user}/>}
        />
      

      </Routes>
    </>
  )
}

export default App
