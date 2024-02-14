import React from 'react'
import Logo from '../../assets/svg/logo.png'

const Navbar = () => {
  return (
    <div className='main'>
        <div className='logo'>
            <img src={Logo}></img>
        </div>
        <div className='menu'></div>
        <div className='signup'></div>
    </div>
  )
}

export default Navbar