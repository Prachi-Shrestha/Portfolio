import React from 'react'
import Facebook from './img/Facebook.png'
import Instagram from './img/Instagram.png'
import linkedin from './img/linkedin.png'

function Contact() {
  return (
    <div className='text-center contact py-5 text-white' id='Contact'> 
        <h1 className='display-3 fw-bold my-5'>Contact Me</h1>

        <h5>prachi.stha21@gmail.com</h5>
        <h5 className='mb-5 mt-3'>9843022807</h5>
        <h3 className='mb-4'>Social Links</h3>
        <ul className = 'mt-2 d-flex justify-content-center flex-row list-unstyled mb-0 pb-4'>
            <li>
                <img src={Facebook} className="me-5" alt="" width={40} height={40}/>                         
            </li>
            <li>
                <img src={Instagram} className="mx-5" alt="" width={40} height={40}/>                
            </li>
            <li>
                <img src={linkedin} className="ms-5" alt="" width={40} height={40}/>        
            </li>
        </ul>
    </div>
  )
}

export default Contact