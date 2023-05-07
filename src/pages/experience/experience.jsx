import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './experience.css'

function Experience() {
  return (
    <div id='container'>
        <section id="experience">
            <AnimationOnScroll animateIn="animate__backInDown">
                <h1 className="title">experience</h1>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn='animate__backInDown'>
                <h2 className='jobTitle'>Customer Solutions Developer <br/> @ <span className='highlight'>Paragon</span></h2>
                <h4 className='expDate'>March 2022 - Present</h4>
                <AnimationOnScroll animateIn='animate__slideInLeft'>
                <ul className="descList">
                    <li className="descItem">
                        <h4>As a Customer Solutions Developer I am 
                        responsible for designing, developing, and implementing software 
                        solutions to meet the needs of customers.</h4>
                    </li>
                    <li className="descItem">
                        <h4>I work closely with customers to understand their requirements and 
                        develop solutions that solve their problems.</h4>
                    </li>
                    <li className="descItem">
                    <h4>I am also responsible for ensuring that the solutions they develop are scalable, 
                    maintainable, and meet high-quality standards.</h4>
                    </li>
                </ul>
                </AnimationOnScroll>
            </AnimationOnScroll>
        </section>
    </div>
  )
}

export default Experience