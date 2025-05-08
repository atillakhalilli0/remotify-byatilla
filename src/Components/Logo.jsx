import React from 'react'
import logo from '../assets/remotify-logo_2.png'
function Logo() {
  return (
    <>
     <a href="#">
        <img className="object-cover filter brightness-0 invert" src={logo} alt="logo" />
      </a> 
    </>
  )
}

export default Logo
