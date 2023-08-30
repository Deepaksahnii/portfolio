import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../images/franky1.png';
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container" id='header'>
        <h5>Hello I'm</h5>
        <h1>Deepak Sahni</h1>
        <h5 className="text-light">Web Developer</h5>

        <CTA/>

        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="Profile" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header