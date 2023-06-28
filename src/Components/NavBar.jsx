import React from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <div>
    <div className='navbar'>
    <Link activeClass="active" to="ProjectScroll" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
    <Link activeClass="active" to="AboutScroll" spy={true} smooth={true} offset={-70} duration={500}>About Me</Link>
    <Link activeClass="active" to="ContactScroll" spy={true} smooth={true} offset={-70} duration={500}>Contact Me</Link>
    </div>
    </div>
  )
}

export default NavBar