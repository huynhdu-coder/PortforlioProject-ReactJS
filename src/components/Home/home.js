import React from 'react'
import './home.css';
import bg from '../../images/bg.png';
import {AiFillLinkedin, AiFillGithub, AiFillFacebook} from "react-icons/ai";
const Home = () => {
  return (
    
    <section className="home">
      <div className="home-sci">
          <a
            href="https://www.facebook.com/profile.php?id=100017514600517"
            target="_blank"
          >
            <AiFillFacebook/>
          </a>
          <a href="https://github.com/huynhdu-coder" target="_blank">
            <AiFillGithub/>
          </a>
          <a href="https://www.linkedin.com/in/huynhdai/" target="_blank">
            <AiFillLinkedin/>
          </a>
        </div>
      <div className='home-container'>
    <div className="home-content">
      <h1>
        Hi, I'm <br></br><span>Dai Huynh</span>
      </h1>
      <h3>-Frontend Developer-</h3>
     
      <div className="btn-box">
        <a href="#page4">My Projects</a>
        <a href="#page5">Contact Me</a>
      </div>
    </div>
    <div className="home-image">
      <img src={bg} />
    </div>
    </div>
  </section>
  )
}

export default Home
