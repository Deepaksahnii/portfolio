import React from 'react'
import './portfolio.css'
import PortfolioItems from './PortfolioItems'
import IMG1 from '../../images/bg.png'
import IMG2 from '../../images/bg.png'
import IMG3 from '../../images/bg.png'
import IMG4 from '../../images/bg.png'
import IMG5 from '../../images/bg.png'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         <PortfolioItems image={IMG1} title="The title" link="https://github.com"/>
         <PortfolioItems image={IMG2} title="The title" link="https://github.com"/>
         <PortfolioItems image={IMG3} title="The title" link="https://github.com"/>
         <PortfolioItems image={IMG4} title="The title" link="https://github.com"/>
         <PortfolioItems image={IMG5} title="The title" link="https://github.com"/>
      </div>
    </section>
  )
}

export default Portfolio