import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" name="" placeholder='Username' required />
        <input type="password" name="" placeholder='Password' required />
        <button>Login</button>
        <p>Error: please enter all fields</p>
        <span>Don't have an account? <Link to="/register" className='link'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login