import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input type="text" name="" placeholder='Username' required />
        <input type="email" name="" placeholder='Email' required />
        <input type="password" name="" placeholder='Password' required />
        <button>Register</button>
        <p>Error: please enter all fields</p>
        <span>Already have an account? <Link to="/login" className='link'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register