import React from 'react'
import './newsletter.css'
import { BsArrowUp } from "react-icons/bs";

import { HeadingTitle, HeadingTitle2 } from '../HeadingTitle'
import { SimpleText } from '../TextStyles'

const Newsletter = () => {
  return (
    <div className='wtw_newsletter'>
      <div className="wtw_newsletter-input">
        <div className="wtw_newsletter-email">
        </div>
        <a href='#Header'><BsArrowUp />Back to Top</a>
      </div>
    </div>
  )
}

export default Newsletter