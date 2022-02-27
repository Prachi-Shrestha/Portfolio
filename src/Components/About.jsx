import React from 'react'
import image from './img/about.jpg'
// import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function About() {
  // const myRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     setmyAbout(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  // const [myAbout, setmyAbout] = useState();
  const { ref: myRef, inView: myAbout } = useInView();

  return (
    <div id='About' ref={myRef}>
      <div className="container my-5">
        <h1 className='display-3 fw-bold mb-md-5 mb-3'>About me</h1>
        <div className="row align-items-center">
          <div className="col-md-6 px-5 mb-md-0 mb-3 py-md-0 py-4">
            <div className={`${myAbout ? 'photoBorder mx-md-7' : 'mx-md-7'}`}>
              <img className='' src={image} alt="" width={'100%'}/>
            </div>
          </div>
          <div className="col-md-6">
            <p className='fs-4 text-start'>A Computer Engineer currently working as a Junior Frontend Developer, dedicated to building visually attractive and fully responsive websites with clean code efficiently and in a timely manner in order to provide good user experience.<br></br><br></br>
            Hard working individual who can easily adapt to new developments and a fast learner who is keen to learn and grow and with an aim to become a full stack developer in the near future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About