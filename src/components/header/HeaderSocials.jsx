import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href='www.linkedin.com/in/deepaksahnii' target='_blank' rel="noopner noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/deepaksahnii' target='_blank' rel="noopner noreferrer"><FaGithub/></a>
      <a href='https://instagram.com/dsahni33' target='_blank' rel="noopner noreferrer"><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSocials
// FaUserLarge