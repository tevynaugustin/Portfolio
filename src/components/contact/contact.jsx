import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contact.css'
import { faGithub, faLinkedin, faSquareInstagram, faFonticonsFi } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div>
        <section id="contact">
            <div className="contactContainer">
                <ul>
                    <a href='https://github.com/tevynaugustin'><li className="item"><FontAwesomeIcon className='icon' icon={faGithub} size='2x'/></li></a>
                    <a href='https://www.linkedin.com/in/tevyna/'><li className="item"><FontAwesomeIcon className='icon' icon={faLinkedin} size='2x'/></li></a>
                    <a href='https://www.instagram.com/tiijjaayyy/?next=%2F'><li className="item"><FontAwesomeIcon className='icon' icon={faSquareInstagram} size='2x'/></li></a>
                    <a href='https://www.fiverr.com/tevyn_augustin'><li className="item"><FontAwesomeIcon className='icon' icon={faFonticonsFi} size='2x'/></li></a>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Contact