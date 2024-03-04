import React from 'react'
import './aboutme.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


function About() {
  return (
    <div id='container'>
      <section id="about">
      <AnimationOnScroll animateIn="animate__backInDown">
        <h1 id='AboutTop' className="title">about me</h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__zoomIn'>
            <h3 className='description'>
                I'm currently employed as a PEP Developer by Paragon Customer Communications in 
                Peterborough. With over a year of experience in the industry, I specialize in
                web design, User interface (UI) design and the utilization of libraries & frameworks
                such as JQuery, React, etc, and I'm constantly striving to improve my skills and learn 
                new technologies.
                <br/> <br/>
                I believe heavily in working towards purpose, and i'm always looking for more efficient
                ways to create solutions to help businesses grow. I'm passionate about creating clear,
                modern designs that convey a message effectively.
                <br/><br/>
                When i'm not coding i enjoy gaming, going to the gym and listening to music. 
            </h3>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__backInDown">
        <h1 id='About' className="title">about me</h1>
        </AnimationOnScroll>

        <br/>

        {/* <AnimationOnScroll animateIn='animate_fadeInUp'>
          <ul className="skillList">
            <li className="skill">HTML & CSS</li>
            <li className="skill">Jquery</li>
            <li className="skill">ReactJS</li>
            <li className="skill">C++</li>
            <li className="skill">C#</li>
            <li className="skill">SQL</li>
          </ul>
        </AnimationOnScroll>  */}
        </section>
    </div>
  )
}

export default About