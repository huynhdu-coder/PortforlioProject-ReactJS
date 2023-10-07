import React from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useRef } from 'react';

function Navbar()  {
  const navRef = useRef();
  
  const showNavBar = () => {
    navRef.current.classList.toggle('active');
  }

    return (
      <>
      <header className="header">
      <a href className="logo">
        Daihuynh
      </a>
      <nav className="navbar"  ref={navRef}>
        <ul>
          <li>
            <a href="#page1">Home</a>
          </li>
          <li>
            <a href="#page2">About</a>
          </li>
          <li>
            <a href="#page3">Services</a>
          </li>
          <li>
            <a href="#page4">Project</a>
          </li>
          <li>
            <a href="#page5">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
      </button>
    </header>
    </>
    );
}

export default Navbar