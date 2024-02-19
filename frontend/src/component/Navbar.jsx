import React from 'react'
import logo from '../assets/Linkedin.svg'
import './Style/navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-main'>
        <div className='searchbox'>
        <span><img src={logo}></img></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar