import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
      
      <form className='userDetails'>
      <h1>Login</h1>
      <input className='input' type='text' placeholder='userName'/>
      <br/>
      <input className='input' type='text' placeholder='password'/>
      <br/>
      <button className='btn1'>Login</button>
      </form>

    </div>
  )
}

export default Login
