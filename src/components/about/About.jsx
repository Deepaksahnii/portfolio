import React from 'react'
import './about.css'
import ME from '../../images/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {ImLocation2} from 'react-icons/im'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiences</h5>
              <small>Fresher, 2022 Pass-Out</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects completed</h5>
              <small>5</small>
            </article>

            <article className='about__card'>
              <ImLocation2 className='about__icon'/>
              <h5>Current Location</h5>
              <small>Khatima, Uttarakhand</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci optio dicta quidem corrupti nobis quas autem. Atque ut nisi mollitia vero error minima reiciendis vitae autem, dolore consequatur nesciunt fugit? Voluptatum, amet nihil.
          </p>
          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About