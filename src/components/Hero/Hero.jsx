import React from 'react'
import './Hero.css'
import WaqarImage from '../../assets/images/Waqar(3).png'
import Html from '../../assets/images/html.png'
import CSS from '../../assets/images/css.png'
import Bootstrap from '../../assets/images/bootstrap.png'
import Javscript from '../../assets/images/Javascript.png'


const Hero = () => {
  return (
    <>
      <section className='hero-container' id='home'>
        <div className="hero-content">
          <h2>Hi, It's <span>Abdul Waqar</span></h2>
          <h3 className='text-animation'>I'm a
            <span></span>
          </h3>
          <p>
            Passionate Frontend Developer | Transforming Ideas into Seamless and
            Visually Stunning Web Solutions
          </p>
          <div className='btn-group'>
         

          </div>
          <div className="btn-group">
            <a href="#hire" >
              <button className='btnHC'>HIRE</button>
            </a>

            <a href="#contact" > 
              <button className='btnHC'>Contact</button>
              </a>
          </div>
        </div>
        <div className="hero-img">
          <div>
            <img src={WaqarImage} className='waqar' alt="" />
          </div>
          <div>
            <div className="tech-icon"><img src={Html} alt="" /></div>
            <div className="tech-icon"><img src={CSS} alt="" /></div>
            <div className="tech-icon"><img src={Bootstrap} alt="" /></div>
            <div className="tech-icon"><img src={Javscript} alt="" /></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
