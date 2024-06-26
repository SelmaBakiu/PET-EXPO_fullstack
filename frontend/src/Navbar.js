import React from 'react'
import{Link} from 'react-router-dom'
import './styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
        <h1>PET EXPO</h1>
        </div>
        <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/admin'>Admin</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        </div>

    </div>
  )
}

export default Navbar
