import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
  <div className='signup-page'>
    <div className='left-container'>
      <div className='form-container'>
        <div className='title-container'>
          <h1 className='acc'>Sign In</h1>
          <h5>Social Network for Game Lovers</h5>
        </div>
        <form
        onSubmit={handleSubmit}
        className='register-form'
        >
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder='Email'
          />
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.pw}
            name="pw"
            onChange={handleChange}
            placeholder='Password'
          />
            <button 
              id='submit-button'
              autoComplete="off"
              type='submit'
              >
                Sign In
              </button>
        </form>
        <div className='redirect-container'>
        <p>Don't have an account?</p>
        <Link className='redirect-link' to='/signup'>
          Sign Up
        </Link>
      </div>
    </div>
  </div>
  <div className='right-container'>
  </div>
</div>
  )
}

export default LoginForm
