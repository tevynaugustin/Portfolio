import React from 'react'
import './landing.css'
import Typewriter from 'typewriter-effect';
import "animate.css/animate.min.css";
import CV from '../../Tevyn-Augustin-CV.pdf'
import bgImg from '../../components/video/motion-graphcs-real.mp4';

function Landing() {


  return (
    <section id="landing">
      <div id='videoContainer'>
        <video autoPlay loop muted>
            <source src={bgImg} type='video/mp4'/>
        </video>
    </div>
    <div id="heading">
        <h1 className="title landingTitle">
        <Typewriter onInit={(typewriter) => {
        typewriter.typeString('hi, TJ here.').start();
        }}/>
        </h1>
        <h2 className='landingDescription'>
            I create cool things sometimes
            <br/>
            <br/>
            I'm a customer solutions developer based in Peterborough
        </h2>
        <div className="buttons">
        <a href='mailto:tevynaugustin@gmail.com' className='contactBtn'>Let's talk :)</a>
          <a href={CV} className='downloadCV'>Click to see my resume!</a>
        </div>

          
    </div>
    </section>
  )
}

export default Landing