import React from 'react'
import Navbar from './Navbar'

function Header({ setSearch }) {
  return (
    <div>
      <Navbar setSearch={setSearch} />
    </div>
  )
}

export default Header
