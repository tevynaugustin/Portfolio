import React from 'react'
import './aboutme.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import logo from './pic.png'

function About() {
  return (
    <div id='container'>
        <AnimationOnScroll animateIn="animate__backInDown">
        <h1 id='About' className="title">about me</h1>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__backInDown'>
          <img src={logo} alt="" />  
        </AnimationOnScroll>   
        
        <AnimationOnScroll animateIn='animate__fadeInUp'>
            <h3 className='description'>
                I'm currently employed as a PEP Developer by Paragon Customer Communications in 
                Peterborough. With over a year of experience in the industry, I specialise in
                web design, User interface (UI) design and the utilization of libraries & frameworks
                such as JQuery, React, etc, and I'm constantly striving to improve my skills and learn 
                new technologies.
                <br/> <br/>
                I believe heavily in working towards purpose, and i'm always looking for more efficient
                ways to create solutions to help businesses grow. I'm passionate about creating clear,
                modern designs that convey a message effectivley.
                <br/><br/>
                When i'm not coding, I enjoy reading fantasy books, gaming, exercising and listening to music. I'm also
                fond of natures, and when i'm bored i'd likely go on walks to either take <br/> pictures, clear my head, or Both.
                
            </h3>
        </AnimationOnScroll>

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
    </div>
  )
}

export default About