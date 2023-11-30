import React from 'react'
import './game.css'
import { CustumButton, CustumButton2 } from '../GetQuoteButton'
import { Box } from '@chakra-ui/react'
import { secondaryColor } from '../Colors'

import Group from '../../img/groupI.png'

const Game = () => {
  return (
    <>
        <div className="wtw_game">
            <div className="wtw_game-section">
                <h1>Waterways Digital Limited</h1>
                <h1>We’re the game changer. We’re changing the whole game.</h1>
                <div className="wtw_game-buttons">
                    <Box>
                        <CustumButton
                        bg={secondaryColor}
                        color={"white"}
                        label={"Book A Free Consultation"}
                        />
                    </Box>
                    <Box>
                        <CustumButton2
                        bg={'transparent'}
                        color={"#00000"}
                        label={"Book A Free Consultation"}
                        />
                    </Box>
                </div>
                <div className="wtw_game-img">
                    <img src={Group} alt="" />
                </div>
            </div>
            <div className="wtw_game-about">
                <div className="wtw_game-aboutUs">
                    <h3>About US</h3>
                    <p>
                        We are skilled in design, management, content, and programming. We make our 
                        customers the priority and use our vast experiences to provide cutting-edge 
                        digital solutions
                    </p>
                    <p>
                        Waterways Digital World offers clients unique, comprehensive, and cost-effective digital solutions. 
                        We specialize in Website & Mobile Development, Graphics Design & General Printing, ICT, and Brand Consultant.
                        Waterways Digital World has worked with clients worldwide and is a trusted ICT industry brand.  
                    </p>
                    <p>
                        When you work with Waterways Digital, you become a part of our family. So, we dedicate our 
                        talents and resources to positioning your business as an industry achiever. 100% client satisfaction 
                        is our motto.
                    </p>
                </div>
                <div className="wtw_game-aboutUs">
                    <h3>01. 3 years of experience</h3>
                    <p>
                        Our years of experience mean you get target-oriented marketing strategies that are proven to work. 
                        We'll help you drive traffic, increase your business and improve sales. 
                    </p>
                    <h3>02. Successful Track Record</h3>
                    <p>
                        Look through our portfolio to see examples of clients we've worked with to achieve success. Our 
                        dedication and expertise help us to keep and maintain many long-term relationships. We'll be glad 
                        to work with your brand too.
                    </p>
                    <h3>Competitive Prices</h3>
                    <p>
                        We offer your business advanced and cutting-edge solutions to meet your marketing goals. Our aim 
                        is to improve your brand value, and we do all of this at a very competitive price. We also offer 
                        customizable packages to serve you better.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Game