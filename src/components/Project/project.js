import React from 'react'
import './project.css';
import diningHall from '../../images/dining hall.jpg'
import webDev from '../../images/web-dev.jpg'
import usDes from '../../images/ux-des.webp'
const Project = () => {
  return (
    <section className="project" id="page4">
    <div className="title">
      <h2>My Project</h2>
    </div>
    <div className="box">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={diningHall}/>
            <h1>UC Dining Hall ReDesign</h1>
          </div>
          <div className="flip-card-back">
    
            <p>
              Understanding basic steps of designing a system and a website
              including developing wireframes, prototypes, sketches, and HTI
              model,...
            </p>
            <div className="btn-box">
              <a href="#page4">GitHub</a>
              <a href="#page5">View Demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={webDev}  />
            <h1>Website Design</h1>
          </div>
          <div className="flip-card-back">
            <p>
              Developing a restaurant website using HTML, CSS, JavaScript, and
              Figma. Making website run responsively, functionally, and
              informatively to enhance user experience. Receiving a full score
              for the project working on class.
            </p>
            <div className="btn-box">
              <a href="#page4">GitHub</a>
              <a href="#page5">View Demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={usDes}  />
            <h1>E-commerce Website</h1>
          </div>
          <div className="flip-card-back">
            <p>
              Developing an e-commerce website like Amazon with ReactJS and
              Figma. Improving the effiency of the website as well as the
              functionality.
            </p>
            <div className="btn-box">
              <a href="#page4">GitHub</a>
              <a href="#page5">View Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Project