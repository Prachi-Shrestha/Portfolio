import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav className ="navbar navbar-expand-lg navbar-dark bg-black">
            <div className ="container-fluid d-flex justify-content-center">
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className ="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className ="navbar-nav mb-2 mb-lg-0 d-flex justify-content-around">
                      <li className ="nav-item">
                        <Link className ="nav-link mx-4 fs-6 active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className ="nav-item">
                        <Link className ="nav-link mx-4 fs-6" to="About">About</Link>
                      </li>
                      <li className ="nav-item">
                        <Link className ="nav-link mx-4 fs-6" to="Education">Education</Link>
                      </li>
                      <li className ="nav-item">
                        <Link className ="nav-link mx-4 fs-6" to="Skills">Skills</Link>
                      </li>
                      <li className ="nav-item">
                        <Link className ="nav-link mx-4 fs-6" to="Contact">Contact Me</Link>
                      </li>
                  </ul>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Header