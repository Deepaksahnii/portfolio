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
         <PortfolioItems image={IMG1} title="Portfolio-Website" link="deepaksahni.netlify.app"/>
         <PortfolioItems image={IMG2} title="iNotebook-To-Do App" link="inoteboook.netlify.app"/>
         <PortfolioItems image={IMG3} title="Responsive-Website" link="responsivewpage.netlify.app/"/>
         <PortfolioItems image={IMG4} title="NetFlix clone" link="https://clonenetflixsite.netlify.app/"/> 
      </div>
    </section>
  )
}

export default Portfolio