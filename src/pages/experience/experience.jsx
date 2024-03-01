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
          <h2 className="jobTitle">
            PEP (Paragon E-Commerce Platform) Developer <br /> @{" "}
            <span className="highlight">Paragon</span>
          </h2>
          <h4 className="expDate">March 2022 - Present</h4>
          <AnimationOnScroll animateIn="animate__slideInLeft">
            <ul className="descList">
              <li className="descItem">
                <h4>
                  As a PEP (Paragon E-Commerce Platform) Developer, I lead in
                  designing and implementing innovative software solutions,
                  seamlessly integrating e-commerce functionality with our
                  robust content management system.
                </h4>
              </li>
              <li className="descItem">
                <h4>
                  Working closely with clients like Connells, Kellogg's Point of
                  Sale, Molson Coors, Aviva and many more. I understand their
                  unique business challenges and craft solutions that are
                  scalable, maintainable, and of the highest quality. My role
                  covers the entire development lifecycle, ensuring our clients
                  receive tailored solutions that elevate their online presence
                  and streamline digital operations.
                </h4>
              </li>
              <li className="descItem">
                <h4>
                  I am also responsible for ensuring that the solutions they
                  develop are scalable, maintainable, and meet high-quality
                  standards. I take pride in delivering impactful solutions for
                  major enterprises, blending technical expertise with a deep
                  understanding of their strategic objectives.
                </h4>
              </li>
            </ul>
          </AnimationOnScroll>
        </AnimationOnScroll>
      </section>
    </div>
  );
}

export default Experience;
