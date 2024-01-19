import React from 'react'
import './portfoliopage.css'

import Phone from '../../img/phone.png'
import Laptop from '../../img/Laptop.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { SimpleGrid } from '@chakra-ui/react';
import { PortfoilioContent, PortfoilioImage } from '../../utils/data';

const PortfolioPage = () => {

  AOS.init();
  return (
    <div className='wtw_ptf'>
        <div className="wtw_ptf-top">
            <div className="wtw_ptf-header">
                <div className="wtw_ptf-title">
                    <h4>Portfolio</h4>
                    <h1>We are fueled by our clients’ <span>success.</span></h1>
                    <p 
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >
                        The beautiful website examples you see below are just a small sample of the websites we’ve created. We don’t specialize in any industry in particular, because 
                        frankly, that’d be boring! We do prefer to work with growth-driven companies—who have goals to crush!
                    </p>
                </div>
                <div 
                  className="wtw_ptf-list"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <p>INDUSTRIES WE’VE SERVED</p>
                  <ul>
                    <li>Finance</li>
                    <li>E-Commerce</li>
                    <li>Health care</li>
                    <li>Oil & Gas</li>
                    <li>Legal</li>
                  </ul>
                </div>
            </div>
            <div className="wtw_ptf-product">
              <SimpleGrid columns={2} spacing={10}>
                {PortfoilioContent.map((i) => (
                  <div className="wtw_ptf-card">
                    <p>{i.title}</p>
                    <img src={i.img} alt="" />
                  </div>
                ))}
              </SimpleGrid>
            </div>
            <div className="wtw_ptf-section">
              <div className="wtw_ptf-sectionTitle">
                <h4>Your Design PLC Int.</h4>
                <p>Website Design & Mobile App Development for Designers and agenecies</p>
              </div>
              <div className="wtw_ptf-sectionImage">
                  <img src={Phone} alt="" />
              </div>
            </div>
            <div className="wtw_ptf-product">
              <SimpleGrid columns={2} spacing={10}>
                {PortfoilioContent.map((i) => (
                  <div className="wtw_ptf-card">
                    <p>{i.title}</p>
                    <img src={i.img} alt="" />
                  </div>
                ))}
              </SimpleGrid>
            </div>
            <div className="wtw_ptf-section">
              <div className="wtw_ptf-sectionTitle">
                <h4>RED STAR EXPRESS PLC.</h4>
                <p> Website Design & Mobile App Development for Leading Logistics Company</p>
              </div>
              <div className="wtw_ptf-sectionImage">
                  <img src={Laptop} alt="" />
              </div>
            </div>
            <div className="wtw_ptf-brands">
              <h4>BRAND EXPERIENCE</h4>
              <h1>We are humble and proud to work with <span>amazing clients.</span></h1>
              <div className="wtw_ptf-brandImg">
                <SimpleGrid columns={5} spacing={5}>
                  {PortfoilioImage.map((i) => (
                    <img 
                      src={i.img} alt=""
                      data-aos={i.dir} 
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1500"
                    />
                  ))}
                </SimpleGrid>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioPage