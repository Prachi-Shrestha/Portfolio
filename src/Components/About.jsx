import React from 'react'
import image from './img/about.jpg'

function About() {
  return (
    <div id='About'>
      <div className="container my-5">
        <h1 className='display-3 fw-bold mb-md-5 mb-3'>About me</h1>
        <div className="row align-items-center">
          <div className="col-md-6 px-5 mb-md-0 mb-3">
            <img src={image} alt="" width={'60%'}/>
          </div>
          <div className="col-md-6">
            <p className='fs-4'>A Computer Engineer currently working as a Frontend Developer, dedicated to building attractive and fully responsive websites with clean code efficiently and in a timely manner in order to provide good user experience.<br></br><br></br>
            Hard working individual and a fast learner who is keen to learn and grow and with an aim to become a full stack developer in the near future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About