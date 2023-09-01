import React from 'react'
import './contact.css'


import {MdEmail} from 'react-icons/md'
import {GrInstagram} from 'react-icons/gr'
import {RiWhatsappFill} from 'react-icons/ri'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cljiatg', 'template_icj49b3', form.current, 'zBn5xYsIcYiI7T6Ot')
      .then((result) => {
        alert("Your Message sent successfully.")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dsahni633@gmail.com</h5>
            <a href="mailto:dsahni633@gmail.com">Send a message</a>
          </article><article className="contact__option">
            <GrInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Deepak Sahni</h5>
            <a href="https://www.instagram.com/dsahni33/" target="_blank" rel='noopener noreferrer'>Visit Profile</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=+919917269636" rel='noopener noreferrer'>Send a message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' />
          <input type="email" name="email" placeholder='Your Email' />
          <textarea name="message" rows="10" placeholder='Your Message Here'></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact