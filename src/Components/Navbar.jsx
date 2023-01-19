import React from 'react'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <div className='navbar' id='myNavbar'>
        <header>
			   <h3>LOGO</h3>
			   <button className="nav-btn" onClick={showNavbar}><FaBars /></button>
			   <nav ref={navRef}>
				    <a href="/tools">Tools</a>
				    <a href="/works">Works</a>
				    <a href="/#">About Me</a>
				    <a href="/goals">Goals</a>
				    <button className="nav-btn nav-close-btn" onClick={showNavbar}>	<FaTimes /></button>
		     </nav>
		    </header>
    </div>
  )
}

export default Navbar;





