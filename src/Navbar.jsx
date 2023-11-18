import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='Navbar'>
        <nav>
            <ul>
                <li><a href='#' className='Nav-link'>HOME</a></li>
                <li><a href='#' className='Nav-link'>ABOUT DISTRICT</a></li>
                <li><a href='#' className='Nav-link'>FESTIVALS</a></li>
                <li><a href='#' className='Nav-link'>TOURISM</a></li>
                <li><a href='#' className='Nav-link'>GALLERY</a></li>
                <li><a href='#' className='Nav-link'>CONTACT</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar