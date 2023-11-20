import React from 'react'
import './newsletter.css'
import { BsArrowUp } from "react-icons/bs";

import { HeadingTitle, HeadingTitle2 } from '../HeadingTitle'
import { SimpleText } from '../TextStyles'

const Newsletter = () => {
  return (
    <div className='wtw_newsletter'>
      <HeadingTitle2>
        Newsletter
      </HeadingTitle2>
      <SimpleText>
        To get our latest news and updates from us
      </SimpleText>
      <div className="wtw_newsletter-input">
        <div className="wtw_newsletter-email">
          <input type="email" placeholder='Please enter your email Address'/>
          <button>Subscribe</button>
        </div>
        <a href='#Home'><BsArrowUp />Back to Top</a>
      </div>
    </div>
  )
}

export default Newsletter