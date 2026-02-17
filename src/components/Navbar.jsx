import React from 'react'
import "../styles/main.scss";


const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar__list'>
            <li>Portfolio</li>
            <li>Projects</li>
            <li>Blogs</li>
        </ul>
    </nav>
  )
}

export default Navbar