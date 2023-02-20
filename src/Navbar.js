import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className='nav'>
        <Link to= '/Home'>Home</Link>
        <Link to = '/Login'>Login</Link>
        <Link to = '/About'>About</Link>
        <Link to = '/Query'>Query</Link>
        
    </nav>
      
    </>
  )
}

export default Navbar
