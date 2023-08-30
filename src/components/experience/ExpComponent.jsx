import React from 'react'
import './experiences.css'

const ExpComponent = (property)=> {
  return (
    <div>
        <article className="experiences__details">
              <property.icon className="experiences__details-icon"/>
              <div>
                <h4>{property.name}</h4>
                <small className='text-light'>{property.epe}</small>
              </div>
            </article>
    </div>
  )
}

export default ExpComponent