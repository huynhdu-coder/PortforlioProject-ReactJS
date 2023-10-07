import React from 'react'
import './contact.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../Contact/swiper.css';
import kempster from '../../images/kempster.jpg';
import ella from '../../images/ella.jpg';
import tyler from '../../images/tyler.jpg';
import {AiFillLinkedin, AiFillGithub, AiFillFacebook} from "react-icons/ai";



export default function Contact() {
  return (
    <section className="contact" id="page5">
    <h2> Get In Touch</h2>
    <div className="contact-container">
      <div className="form-container">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            defaultValue={''}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="message-container">
            <div className="slide-container">
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
              <SwiperSlide>
              <div className="slide-card ">
                <div className="image-content">
                  <div className="card-image">
                    <img src={kempster}/>
                  </div>
                </div>
                <div className="card-cont">
                  <h2>Kyle Kempster</h2>
                  <p className="description">
                    "I had a great time working with Brian. He is a hard-working
                    student who are always willing to learn new things and enjoy
                    helping other students at WMC."
                  </p>
                  <button className="button">View More</button>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="slide-card">
                <div className="image-content">
                  <div className="card-image">
                    <img src={ella} />
                  </div>
                </div>
                <div className="card-cont">
                  <h2>Ella Terselic</h2>
                  <p className="description">
                    "We have the same Website Development course and Dai has
                    proved to the team why he is suitable for the roles of
                    Designer and Project Management. Dai is hard-working,
                    careful, and creative. He makes sure everthing goes on plan
                    and improves our project surpass than we expected. It is a
                    great experience working with him. "
                  </p>
                  <button className="button">View More</button>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="slide-card">
                <div className="image-content">
                  <div className="card-image">
                    <img src={tyler}/>
                  </div>
                </div>
                <div className="card-cont">
                  <h2>Tyler Meiners</h2>
                  <p className="description">
                    "Working with Dai is an exciting journey. He shared with me
                    new things that he learns everytime we have a team meeting.
                    We all have great passion on Web Development and UX design.
                    During the course of IT1080, the proffesor was always
                    impressed by our products. "
                  </p>
                  <button className="button">View More</button>
                </div>
              </div>
              </SwiperSlide>
              </Swiper>
            </div>
        </div>
        </div>
  </section>
  );
};

