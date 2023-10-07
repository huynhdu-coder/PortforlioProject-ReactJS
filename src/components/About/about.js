import React from 'react';
import './about.css';
import aboutImg from '../../images/aboutIMG.jpg';

const About = () => {
  return (
    <section className="about" id="page2">
    <img src={aboutImg} />
    <div className="about-text">
      <h1>About Me</h1>
      <h3>Frontend Developer</h3>
      <p>
      <p>
        I am a Junior at the University of Cincinnati, majoring in Information
        Technology with the Software Development track. I am an international
        student from Vietnam and have a huge passion in website development. I
        have been studied abroad for almost 5 years. To me, not only this is a
        fun experience, but it is also a challenge for me. I have to prove to
        everyone that I am a great son, a hardworking student, and a successful
        employer. Read below to understand more about me!
      </p>
      </p>
    </div>
  </section>
   )
}

export default About