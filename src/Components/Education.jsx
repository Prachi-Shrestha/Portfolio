import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Education() {
  return (
    <div id='Education'>
        <div className="education py-5">
          <div className="container">
            <h1 className='display-3 fw-bold'>Education</h1>
            <div className="d-flex justify-content-center mt-5">
              <div className="d-flex justify-content-evenly align-items-center ">
                <div className='border-black d-flex align-items-center justify-content-center me-5'>
                  <FontAwesomeIcon className='icon' icon="fa-solid fa-school" />
                </div>
                <div>
                  <h3>Modern Indian School</h3>
                  <small>2005-2016</small>
                  <h5>Class: 2 - 12</h5>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center my-5">
              <div className="d-flex justify-content-evenly align-items-center  ps-md-5 ms-md-4">
                <div className='border-black d-flex align-items-center justify-content-center me-5 ms-md-5'>
                  <FontAwesomeIcon className='icon' icon="fa-solid fa-building-columns" />
                </div>
                <div>
                  <h3>National College of Engineering</h3>
                  <small>2016-2022</small>
                  <h5>Bachelor in Computer Engineering</h5>
                </div>
              </div>
            </div>
              
          </div>
        </div>
    </div>
  )
}

export default Education