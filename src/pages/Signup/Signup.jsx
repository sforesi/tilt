import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])
  const navigate = useNavigate()

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>

      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

// const handleSubmit = async (e) => {
//   e.preventDefault()
//   try {
//     await signup(formData)
//     props.handleSignupOrLogin() // set state in App.jsx
//     navigate('/posts') // if everything worked, redirect a user
//   } catch (error) {
//     setMsg(error.message)
//   }
// }

export default Signup
