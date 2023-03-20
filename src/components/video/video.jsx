import React from 'react'
import './video.css';
import bgImg from './background-img.mp4';

function Video() {
  return (
    <div id='videoContainer'>
        <video autoPlay loop muted>
            <source src={bgImg} type='video/mp4'/>
        </video>
    </div>
  )
}

export default Video