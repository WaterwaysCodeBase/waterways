import React from 'react'
import './development.css'

import dev from '../../img/dev.png'
import { CustumButton } from '../GetQuoteButton'
import { secondaryColor } from '../Colors'

const Development = () => {
  return (
    <div className='wtw_development'>
        <h1>Get Your Design, Development, & Digital Marketing In <span>One Place!</span></h1>
        <div className="wtw_development-content">
            <img src={dev} alt="" />
            <div className="wtw_development-text">
                <h3>Why Choose Us</h3>
                <p>
                    Your project will be handled by an expert who is` determined to help you 
                    succeed. That's why every project we take on is managed in the best 
                    possible way. We pride ourselves on delivering excellence. 
                </p>
                <h3>High-Performance Digital Solutions</h3>
                <p>
                    We work with you to bring your business technically advanced 
                    and high-performance digital solutions. These solutions are 
                    also user-friendly and will deliver tangible results. 
                </p>
                <CustumButton
                    bg={secondaryColor}
                    color={"white"}
                    label={"Book A Free Consultation"}
                />
            </div>
        </div>
    </div>
  )
}

export default Development