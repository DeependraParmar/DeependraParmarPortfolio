import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/robot.png";
import resume from "../assets/Resume.pdf"
import { BiMenuAltRight } from "react-icons/bi";

export default function Header() {                                                                        
  return (
    <>
      <nav>
        <NavContent className={"navbar"} />
        <NavContent className={"hamburgermenu"} />
      </nav>
    </>
  )
}

const toggle = () => {
  const menu = document.querySelector(".hamburgermenu");
  menu.classList.toggle("toggle");
}

const NavContent = ({ className }) => (
  <section className={className}>
    <Link to={'/'} className='logo'>
      <img src={logo} alt="" className='logoimg' />
    </Link>
    <div className="navlinks">
      <ul>
        <li>
          <Link to='/' onClick={toggle}>Home</Link>
        </li>
        <li>
          <Link to='/blogs' onClick={toggle}>Blogs</Link>
        </li>
        <li>
          <Link to='/projects' onClick={toggle}>Projects</Link>
        </li>
        <li>
          <Link to='/services' onClick={toggle}>Services</Link>
        </li>
        <li>
          <Link to='/experience' onClick={toggle}>Experience</Link>
        </li>
        <li>
          <Link to='/about' onClick={toggle}>About</Link>
        </li>
        <li>
          <Link to='/contact' onClick={toggle}>Contact</Link>
        </li>
      </ul>
    </div>
    <div className="navbuttons">
      <ul>
        <li><a href={resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
        <li><a href="https://www.buymeacoffee.com/deependraparmar" target='_blank' rel='noopener noreferrer' className='solid'>Buy me a Coffee	&#9749;</a></li>
      </ul>
    </div>
    <div className="burger" id='burger'>
      <BiMenuAltRight color='$main' size={40} onMouseOver={toggle}  />
    </div>
  </section>
)