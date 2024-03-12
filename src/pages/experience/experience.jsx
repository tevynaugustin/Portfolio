import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./experience.css";

function Experience() {
  return (
    <div id="container">
      <section id="experience">
        <AnimationOnScroll animateIn="animate__backInDown">
          <h1 className="title">experience</h1>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInDown">
          <div className="flex">
          <div className="jobContainer">
            <h2 className="jobTitle">
              PEP (Paragon E-Commerce Platform) Developer @{" "}
              <span className="highlight">Paragon</span>
            </h2>
            <h4 className="expDate">March 2022 - Present</h4>
            
              <ul className="descList">
                <li className="descItem">
                  <h4>
                    I lead in designing and implementing innovative software
                    solutions, seamlessly integrating e-commerce functionality
                    with our robust content management system.
                  </h4>
                </li>
              </ul>
            
          </div>
          
          <div className="jobContainer">
            <h2 className="jobTitle">
              Website Manager @ <span className="highlight">Ace Interiors</span>
            </h2>
            <h4 className="expDate">November 2022 - Present</h4>
            
              <ul className="descList">
                <li className="descItem">
                  <h4>
                    I lead in designing and implementing innovative software
                    solutions, seamlessly integrating e-commerce functionality
                    with our robust content management system.
                  </h4>
                </li>
              </ul>
            
          </div>
          </div>
        </AnimationOnScroll>
      </section>
    </div>
  );
}

export default Experience;
