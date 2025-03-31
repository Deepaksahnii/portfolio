import React from 'react'
import './portfolio.css'
import PortfolioItems from './PortfolioItems'
import IMG1 from '../../images/bg1.png'
import IMG2 from '../../images/bg2.png'
import IMG3 from '../../images/bg3.png'
import IMG4 from '../../images/bg4.png'
import IMG5 from '../../images/bg5.png'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         <PortfolioItems image={IMG1} title="Portfolio-Website" link="https://deepaksahni.netlify.app"/>
         <PortfolioItems image={IMG2} title="INotebook To-do" link="https://inoteboook.netlify.app/"/>
         <PortfolioItems image={IMG3} title="Responsive-Website" link="https://responsivewpage.netlify.app"/>
         <PortfolioItems image={IMG4} title="NetFlix clone" link="https://clonenetflixsite.netlify.app/"/> 
         <PortfolioItems image={IMG5} title="TextUtils" link="https://textutils3.netlify.app/"/> 
         <PortfolioItems image={IMG5} title="TextUtils" link="https://textutils3.netlify.app/"/> 
      </div>
    </section>
  )
}

export default Portfolio