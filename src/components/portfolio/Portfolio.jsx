import React from 'react'
import './portfolio.css'
import PortfolioItems from './PortfolioItems'
import IMG1 from '../../images/portfolio1.jpg'
import IMG2 from '../../images/portfolio2.jpg'
import IMG3 from '../../images/portfolio3.jpg'
import IMG4 from '../../images/portfolio4.jpg'
import IMG5 from '../../images/portfolio5.png'

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