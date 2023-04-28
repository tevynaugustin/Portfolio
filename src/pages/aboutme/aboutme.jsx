import React from 'react'
import './aboutme.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


function About() {
  return (
    <div id='container'>
      <section id="about">
        <AnimationOnScroll animateIn="animate__backInDown">
        <h1 id='About' className="title">about me</h1>
        </AnimationOnScroll>
        
        <AnimationOnScroll animateIn='animate__fadeInUp'>
            <h3 className='description'>
                I'm currently employed as a PEP Developer <br/> by Paragon Customer Communications <br/> in 
                Peterborough. With over a year <br/> of experience in the industry, I specialise <br/> in
                web design, User interface (UI) <br/> design and the utilization of libraries <br/> & frameworks
                such as JQuery, <br/> React, etc, and I'm constantly striving <br/> to improve my skills and learn 
                <br/>new technologies.
                <br/> <br/>
                I believe heavily in working towards <br/> purpose, and i'm always looking <br/> for more efficient
                ways to create <br/> solutions to help businesses <br/> grow. I'm passionate about <br/>creating clear,
                modern designs <br/> that convey a message effectivley.
                <br/><br/>
                When i'm not coding, I enjoy <br/> reading fantasy books, gaming,<br/> exercising and listening to music. <br/> I'm also
                fond of natures, and <br/> when i'm bored i'd likely <br/> go on walks to either take <br/> pictures, clear my head, or Both.
                
            </h3>
        </AnimationOnScroll>

        <br/>

        <AnimationOnScroll animateIn='animate_fadeInUp'>
          <ul className="skillList">
            <li className="skill">HTML & CSS</li>
            <li className="skill">Jquery</li>
            <li className="skill">ReactJS</li>
            <li className="skill">C++</li>
            <li className="skill">C#</li>
            <li className="skill">SQL</li>
          </ul>
        </AnimationOnScroll> 
        </section>
    </div>
  )
}

export default About