import React from 'react';
import './Footer.css';

const Footer = () => {
  return (  
<footer>
    <div className="footer-content">
      <div className="footer-logo">
        <a href className="logo">
          Daihuynh
        </a>
      </div>
      <div className="footer-links">
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
      </div>
    </div>
    <div className="footer-info">© 2023 Dai Huynh</div>
  </footer>
  )
}

export default Footer