import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import '../../styles/Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='container'>

      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
