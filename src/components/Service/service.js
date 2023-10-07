import React from 'react'
import './service.css';
import serImg1 from '../../images/ser-img1.jpeg';



const Service = () => {
  return ( 
  <section className="service" id="page3">
  <div className="title">
    <h2> Services</h2>
  </div>
  <div className="box">
    <div className="card">
      <h4>Web Development</h4>
      <div className="pra">
        <p>
          Working with UX/UI design team for User Experience processes
          including building a reponsive website from scratch. Advancedly use
          HTML,CSS, and JavaScript. Having a base knowdledge on wirefram
          layout to come up with multiple ideas that fit business needs and
          goals.
        </p>
      </div>
      <button>Read More</button>
    </div>

    <div className="card">
      <i className="bx bxs-network-chart" />
      <h4>UX/UI Design</h4>
      <div className="pra">
        <p>
           Designing website product based on company needs and theme by using Figma. Process over UX/UI life cycle including researching, brainstorming, design, and test.
        </p>
      </div>
      <button>Read More</button>
    </div>
    <div className="card">
      <i className="bx bxs-edit-alt" />
      <h4>Graphic Design</h4>
      <div className="pra">
        <p>
          Design innovative, mordern, and attention-caught graphic to improve the look of the website and company product.
        </p>
      </div>
      <button>Read More</button>
    </div>
    <div className="card">
      <i className="bx bx-chalkboard" />
      <h4>Website Research</h4>
      <div className="pra">
        <p>
          Perform multiple website research process to figure out the most suitable design and layout for company
        </p>
      </div>
      <button>Read More</button>
    </div>
    <div className="card">
      <i className="bx bx-chalkboard" />
      <h4>System Dev</h4>
      <div className="pra">
        <p>
          Based on the system of the company, suggestion on system improvement will be processed. By using multiple models
        </p>
      </div>
      <button>Read More</button>
    </div>
    <div className="card">
      <i className="bx bx-chalkboard" />
      <h4>Project Management</h4>
      <div className="pra">
        <p>
          Have experience on team leader and time management. Promise to improve the effiency of the team and reduce time-consuming to the lowest.
        </p>
      </div>
      <button>Read More</button>
    </div>
  </div>
</section> 
)
}

export default Service
