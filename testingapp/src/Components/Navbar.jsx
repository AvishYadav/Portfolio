import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  return (
    <div className='navbar' id='myNavbar'>
        <ul>
          <li className='logo'><Link to="/"><img src="" alt="LOGO" /></Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a></li>
        </ul>
      
    </div>
  )
}

export default Navbar
