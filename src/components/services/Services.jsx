import React from 'react'
import './services.css'

import { servicesContent } from '../../utils/data'

const Services = () => {
  return (
    <div className="wtw_services-top">
      <div className='wtw_services'>
          <h1>WHAT YOU SHOULD EXPECT</h1>
          <span>You Get a Beautiful, Data-Driven Website That’s Fast, Responsive & Attract Leads.</span>
          <div className="wtw_services-section">
              {servicesContent.map((d) => (
                  <div className="wtw_services-box">
                      <h4><d.icon />{d.title}</h4>
                      <p>{d.text}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default Services