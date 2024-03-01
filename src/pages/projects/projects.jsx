import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./projects.css";

function Projects() {
  return (
    <div id="container">
      <section id="projects">
        <AnimationOnScroll animateIn="animate__backInDown">
          <h1 className="title">projects</h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="projectCard">
            <FontAwesomeIcon
              className="folderIcon"
              size="3x"
              icon={faFolderOpen}
            />
            <h2 className="cardText">Optic AI Hub</h2>
            <h4 className="cardDesc">
              Generate Stunning Images: With our intuitive image generation
              tools, you can effortlessly create high-quality visuals tailored
              to your specifications.
              <br />
              <br />
              ReactJS, NodeJS/Express, CSS
            </h4>
            <div className="card-links">
              <a href="https://opticaihub.co.uk" target="blank">
                <FontAwesomeIcon
                  className="arrowIcon"
                  icon={faArrowUpRightFromSquare}
                  size="2x"
                />
              </a>
              <a href="https://github.com/tevynaugustin/AI-Hub" target="blank">
                <FontAwesomeIcon
                  className="gitIcon"
                  icon={faGithub}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </AnimationOnScroll>
      </section>
    </div>
  );
}

export default Projects;
