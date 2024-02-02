import React from 'react'
import './goals.css'

import {
    Box
} from "@chakra-ui/react";

import goal1 from '../../img/image 1.png'
import goal2 from '../../img/image 2.png'
import goal3 from '../../img/image 3.png'
import goal4 from '../../img/image 4.png'

import { secondaryColor } from '../Colors';
import { CustumButton } from '../GetQuoteButton';



const Goals = () => {
  return (
    <>
    <div className="wtw_goals-section">
        <h3 className='wtw_header'>Whatever your goal is for your website, we will help you succeed.</h3>
        <div className='wtw_goals'>
            <div className="wtw_goals-left">
                <div className="wtw_goals-img"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <img src={goal1} alt="" />
                </div>
                <div className="wtw_goals-text"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <h4>A corporate website that improves your brand image</h4>
                    <p>
                        Your website says something about your brand – something good or bad. 
                        With the high level of skepticism on the internet today, your website 
                        will be a key factor that determines if you get that client, partner 
                        or investor. Work with a team that understands the importance of 
                        excellence. Work with Wateways Digital Ltd.
                    </p>
                </div>
            </div>
            <div className="wtw_goals-right">
                <div className="wtw_goals-img"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <img src={goal2} alt="" />
                </div>
                <div className="wtw_goals-text"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <h4>A custom-made web application that is functional and user-friendly</h4>
                    <p>
                        Do you have an idea and need the right digital partner to make it a 
                        reality? Do you need a team with experience building web and mobile 
                        applications that not only look good, but also work seamlessly? Get 
                        in touch and let’s bring that project to life.
                    </p>
                </div>
            </div>
            <div className="wtw_goals-left">
                <div className="wtw_goals-img"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <img src={goal3} alt="" />
                </div>
                <div className="wtw_goals-text"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <h4>A beautiful e-commerce website that helps generate sales</h4>
                    <p>
                        Looking to sell online? Well, your search is over! With our experienced 
                        team crafting beautiful online stores on WooCommerce, Shopify, OpenCart 
                        and Magento platforms, Waterways Digital Ltd. is your partner for eCommerce 
                        success.
                    </p>
                </div>
            </div>
            <div className="wtw_goals-right">
                <div className="wtw_goals-img"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <img src={goal4} alt="" />
                </div>
                <div className="wtw_goals-text"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <h4>A marketing website that attracts, engages and converts visitors</h4>
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

export default Goals