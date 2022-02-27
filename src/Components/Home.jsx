import React from 'react'

function home() {
  return (
    <div className="head container con" id='Home'>
        <div className="container">
            <div className="row pb-5 my-5">
                <div className="col-6 my-10 text-start">
                    <h1 className="text-white display-3">Hi! I am</h1>
                    <h1 className="text-white display-2 fw-bold">Prachi Shrestha</h1>
                    <a href="Prachi Shrestha-cv.pdf" download='Prachi Shrestha-cv.pdf'>
                      <button className='btn text-white btn-border my-3 fs-5'>Resume</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default home