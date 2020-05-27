import React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/services/'>services</Link>
      <Link to='/capabilities/'>Capabilities</Link>
      <Link to='/portfolio/'>Portfolio
      </Link>
      <Link to='/contact/'>Contact</Link>

    </nav>
  )
}

export default NavBar