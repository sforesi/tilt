import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'


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
