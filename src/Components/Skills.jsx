import React from "react";
import { $ } from "react-jquery-plugin";
import { useInView } from 'react-intersection-observer';

function progress() {
  $(".p_bar").each(function () {
    $(this)
      .find(".w_bar")
      .animate(
        {
          width: $(this).attr("data-max"),
        },
        {
          duration: 5000,
          step: function (now) {
            $(this)
              .next()
              .text(Math.ceil(now) + "%");
          },
        }
      );
  });
}

function reverse() {
  $(".p_bar").each(function () {
    $(this)
      .find(".w_bar")
      .animate(
        {
          width: 0,
        },
        {
          step: function (now) {
            $(this)
              .next()
              .text(0 + "%");
          },
        }
      );
  });
}
function Skills() {
  const { ref: myRef2, inView: mySkills } = useInView();
  console.log(mySkills);
  if(mySkills){  
    progress();
  }
  else{
    reverse();
  }
  return (
    <div id="Skills" ref={myRef2}>
      <div className="container py-5">
        <h1 className="display-3 fw-bold mb-5">Skills</h1>
        <section id="progress" className="mx-lg-5 px-lg-5 mb-4">
        <div className="d-flex justify-content-between align-items-center">
            <h2 className="ms-lg-5 ps-lg-5">HTML</h2>
            <div className="p_bar" data-max="90%">
              <div className="w_bar" data-value="0"></div>
              <h2 className="per">0%</h2>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="ms-lg-5 ps-lg-5">CSS3</h2>
            <div className="p_bar" data-max="90%">
              <div className="w_bar" data-value="0"></div>
              <h2 className="per">0%</h2>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="ms-lg-5 ps-lg-5">JavaScript</h2>
            <div className="p_bar" data-max="75%">
              <div className="w_bar" data-value="0"></div>
              <h2 className="per">0%</h2>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
              <h2 className="ms-lg-5 ps-lg-5">JQuery</h2>
              <div className="p_bar" data-max="75%">
                <div className="w_bar" data-value="0"></div>
                <h2 className="per">0%</h2>
              </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
              <h2 className="ms-lg-5 ps-lg-5">React JS</h2>
              <div className="p_bar" data-max="60%">
                <div className="w_bar" data-value="0"></div>
                <h2 className="per">0%</h2>
              </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
              <h2 className="ms-lg-5 ps-lg-5">Photoshop</h2>
              <div className="p_bar" data-max="48%">
                <div className="w_bar" data-value="0"></div>
                <h2 className="per">0%</h2>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
