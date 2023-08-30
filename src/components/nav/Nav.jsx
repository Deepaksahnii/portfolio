import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {IoIosPaper} from 'react-icons/io'
import {MdConnectWithoutContact} from 'react-icons/md'
import { useState } from 'react'

function Nav() {

  const [activeButton,setActiveButton] = useState('#header');

  return (
    <nav>
      <a href='#header' className={activeButton === '#header' ? 'active':''} onClick={()=>setActiveButton('#header')}><BiHomeHeart/></a>
      <a href='#about' className={activeButton === '#about' ? 'active':''} onClick={()=>setActiveButton('#about')}><FaUserCircle/></a>
      <a href='#experiences' className={activeButton === '#experiences' ? 'active':''} onClick={()=>setActiveButton('#experiences')}><FaGraduationCap/></a>
      <a href='#portfolio' className={activeButton === '#portfolio' ? 'active':''} onClick={()=>setActiveButton('#portfolio')}><IoIosPaper/></a>
      <a href='#contact' className={activeButton === '#contact' ? 'active':''} onClick={()=>setActiveButton('#contact')}><MdConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav