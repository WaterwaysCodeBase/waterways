import React from 'react'
import './goals2.css'

import {
    Box
} from "@chakra-ui/react";

import goal1 from '../../img/image 7.png'
import goal2 from '../../img/image 10.png'
import goal3 from '../../img/image 11.png'
import rectangle from '../../img/Rectangle 2.png'

import { secondaryColor } from '../Colors';
import { CustumButton } from '../GetQuoteButton';

const Goals2 = () => {
  return (
    <>
    <div className="wtw_goals2-section">
        <h3 className='wtw_header'>Whatever your goal is for your website, we will help you succeed.</h3>
        <div className='wtw_goals2'>
            <div className="wtw_goals2-left">
                <div className="wtw_goals2-img">
                    <img src={goal3} alt="" />
                </div>
                <div className="wtw_goals2-text">
                    <h4>Branding and design for a new business</h4>
                    <p>
                        As a brand and identity consultant, we understand the importance of making a lasting 
                        first impression. At Waterways Digital Ltd., we can help new businesses with branding, 
                        including logo design, messaging, collateral, guidelines, and website design. Trust us to 
                        help you get it right.
                    </p>
                </div>
            </div>
            <div className="wtw_goals2-right">
                <div className="wtw_goals2-img">
                    <img src={goal2} alt="" />
                </div>
                <div className="wtw_goals2-text">
                    <h4>Rebranding an existing business</h4>
                    <p>
                        Is there a new direction for your company? Or is your brand identity now ancient and 
                        uninspiring? If yes, it’s time to refresh your brand. Rebranding is a big (and sometimes complicated) 
                        move, but we will help you navigate this seamlessly.
                    </p>
                </div>
            </div>
            <div className="wtw_goals2-left">
                <div className="wtw_goals2-img">
                    <img src={goal1} alt="" />
                </div>
                <div className="wtw_goals2-text">
                    <h4>Design of additional brand stationary and assets.</h4>
                    <p>
                        Your brand goes beyond logo and colours. It involves your messaging, your voice, your tone, and your culture. 
                        It also needs to be consistent. Through clearly defined brand guidelines, we will help you ensure that your 
                        brand is used the right way – every time.
                    </p>
                </div>
            </div>
            <div className="wtw_goals2-guide">
                <div className="wtw_goals2-guide_img">
                    <img src={rectangle} alt="" />
                </div>
                <div className="wtw_goals2-guide_text">
                    <h4>Brand strategy and guideline development</h4>
                    <p>
                        Here’s one mistake we see a lot of businesses make… they spend money on ads 
                        to a website that isn’t designed to convert. From website copy down to 
                        retargeting, we are obsessed about building websites that drive results.
                    </p>
                </div>
            </div>
            <Box>
                <CustumButton
                    bg={secondaryColor}
                    color={"white"}
                    label={"Get a Quote"}
                />
            </Box>
        </div>
    </div>
    </>
  )
}

export default Goals2