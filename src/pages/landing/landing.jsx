import React from 'react'
import './landing.css'
import Typewriter from 'typewriter-effect';
import "animate.css/animate.min.css";

function Landing() {
  return (
    <div id="heading">
        <h1 className="title landingTitle">
        <Typewriter onInit={(typewriter) => {
        typewriter.typeString('hi, <span class="highlight">TJ</span> here.').start();
        }}/>
        </h1>
        <h2 className='landingDescription'>
            I create cool things sometimes
            <br/>
            <br/>
            I'm a <span className='highlight'>customer solutions developer</span> based in Peterborough
        </h2>
    </div>
  )
}

export default Landing