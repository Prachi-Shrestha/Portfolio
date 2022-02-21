import React from "react";
import Scrollspy from 'react-scrollspy'

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-black fixed-top"
        id="navbar"
      >
        <div className="container-fluid d-flex justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <Scrollspy
              className="scrollspy navbar-nav mb-2 mb-lg-0 d-flex justify-content-around"
              items={[
                "Home",
                "About",
                "Education",
                "Skills",
                "Contact",
              ]}
              currentClassName="isCurrent"
            >
              {/* <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-around"> */}
                <li className="nav-item">
                  <a
                    className="nav-link mx-4 fs-6"
                    aria-current="page"
                    href="#Home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4 fs-6" href="#About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4 fs-6" href="#Education">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4 fs-6" href="#Skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4 fs-6" href="#Contact">
                    Contact Me
                  </a>
                </li>
              {/* </ul> */}
            </Scrollspy>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
