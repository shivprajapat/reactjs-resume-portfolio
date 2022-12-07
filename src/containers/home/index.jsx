import React from 'react'
import { FaFacebook, FaLinkedin,FaInstagram,FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Animate } from "react-simple-animate";
import './style.scss'
const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home_text">
        <h1>Hello I am Coder Mahesh <br/> Mern Stack Developer</h1>
      </div>
      <Animate
          play
          duration={1}
          delay={0.5}
          start={{
            transform: "translateY(600px)"
          }}
          end={{ transform: "translateX(0px)" }}
        >
      <div className="home_text_contact">
        <div className="home_text_contact_button_wrapper">
          <button>Hire me</button>
          <Link to="/">Download resume</Link>
        </div>
        <ul className="home_text_contact_social_wrapper">
          <li><FaFacebook/></li>
          <li><FaLinkedin/></li>
          <li><FaInstagram/></li>
          <li><FaTwitter/></li>
        </ul>
      </div>
      </Animate>
    </section>
  )
}

export default Home