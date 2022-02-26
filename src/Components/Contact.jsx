import React from "react";
import Facebook from "./img/Facebook.png";
import Instagram from "./img/Instagram.png";
import linkedin from "./img/linkedin.png";
import emailjs from "emailjs-com"

function submitmail(e){
    e.preventDefault();
    emailjs.sendForm('service_s16umki','template_gpoamjf',e.target,'user_QxyUKJmF1KeiocG5K2CWE').then(res=>{console.log(res);})
}
function Contact() {
  return (
    <div
      className="d-flex justify-content-center contact py-5 text-white container con"
      id="Contact"
    >
      <div>
        <h1 className="display-3 fw-bold mt-5 mb-2 pt-4 mx-5">Contact Me</h1>
        {/* <p className="mb-5">
          You can get in touch with me through one of the following platforms
        </p> */}
        {/* <h5>prachi.stha21@gmail.com</h5> */}
        <h5 className="my-3">Send me a mail</h5>
        <form action="" className="mx-3" onSubmit={submitmail}>
          <input type="text" name="name" className="form-control mb-3" placeholder="Name" required/>
          <input type="email" name="email" className="form-control mb-3" placeholder="Email" required/>
          <textarea
            name="message"
            id="" className="form-control mb-3"
            rows="4"
            placeholder="Message"
          ></textarea>
          <div className="text-start">
            <button type="submit" className="btn btn-light mb-4">Send Message</button>
          </div>
        </form>
        <h3 className="mb-4">Social Links</h3>
        <ul className="mt-2 d-flex justify-content-center flex-row list-unstyled mb-0 pb-4">
          <li>
            <a href="https://www.facebook.com/pra.stha.39/">
              <img
                src={Facebook}
                className="me-5"
                alt=""
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/prachi_stha/">
              <img
                src={Instagram}
                className="mx-5"
                alt=""
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/prachi-shrestha-58161b151/">
              <img
                src={linkedin}
                className="ms-5"
                alt=""
                width={40}
                height={40}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
