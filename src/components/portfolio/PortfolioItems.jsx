import React from 'react'
import './portfolio.css'

const PortfolioItems = (property) => {
  return (
    <div>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={property.image} alt="" />
          </div>
          <h3>{property.title}</h3>
          <div className="portfolio__item-cta">
          <a href={property.link} className='btn' target='_blank' rel='noopener noreferrer'>Visit</a>
          </div>
        </article>
    </div>
  )
}

export default PortfolioItems