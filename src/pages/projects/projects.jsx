import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import './projects.css'

function Projects() {
  return (
    <div id="container">
        <section id="projects">
            <AnimationOnScroll animateIn='animate__backInDown'>
                <h1 className="title">projects</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
                <div className="projectCard">
                <FontAwesomeIcon className='folderIcon' size='3x' icon={faFolderOpen} />
                    <h2 className='cardText'>Album E-Commerce Store</h2>
                    <h4 className="cardDesc">
                        An E-Commerce Site where you can add/remove items from your basket
                        dynamically. (not done yet fully)
                        <br /><br />
                        ReactJS, Javascript, HTML/CSS
                    </h4>
                    <a href="https://tevynaugustin.github.io/E-Commerce-Site/" target='blank'>
                    <FontAwesomeIcon className='arrowIcon' icon={faArrowUpRightFromSquare} size='2x'/>
                    </a>
                    <a href="https://github.com/tevynaugustin/E-Commerce-Site" target='blank'>
                        <FontAwesomeIcon className='gitIcon' icon={faGithubSquare} size='3x'/>
                    </a>
                </div>
                </AnimationOnScroll>
        </section>
    </div>
  )
}

export default Projects