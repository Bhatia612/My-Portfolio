import React from 'react'
import "../styles/main.scss";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar__list'>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar