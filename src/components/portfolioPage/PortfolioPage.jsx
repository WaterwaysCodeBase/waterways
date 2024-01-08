import React from 'react'
import './portfoliopage.css'

import arrow from '../../img/arrow.png'
import image57 from '../../img/Image 57.png'
import image58 from '../../img/Image 58.png'
import image59 from '../../img/Image 59.png'
import image60 from '../../img/Image 60.png'
import image61 from '../../img/Image 61.png'
import image62 from '../../img/Image 62.png'
import image63 from '../../img/Image 63.png'
import image64 from '../../img/Image 64.png'
import image65 from '../../img/Image 65.png'
import image66 from '../../img/Image 66.png'

import { 
    BsArrowRightShort
  } from "react-icons/bs";

const PortfolioPage = () => {
  return (
    <div className='wtw_ptf'>
        <div className="wtw_ptf-header">
            <div className="wtw_ptf-header_text">
                <h1>Portfolio</h1>
                <p>Lorem occaecat proident excepteur commodo et nulla eiusmod. Elit esse aute officia dolor elit aute</p>
            </div>
            <div className="wtw_ptf-header_image">
                <img src={arrow} alt="" />
            </div>
        </div>
        <div className="wtw_ptf-section">
            <div className="wtw_ptf-section_text">
                <h4>Pefume Rebranding</h4>
                <h2>Paris secrets</h2>
                <p>Sint occaecat deserunt aliquip do occaecat ut quis. Cupidatat magna fugiat quis sit duis est in volup</p>
                <button>View project <BsArrowRightShort /></button>
            </div>
            <div className="wtw_ptf-section_img">
                <div><img src={image57} alt="" /></div>
                <div><img src={image58} alt="" /></div>
                <div><img src={image59} alt="" /></div>
            </div>
        </div>
        <div className="wtw_ptf-section1">
            <div className="wtw_ptf-section_text">
                <h4>Tesla Web Design</h4>
                <h2>Oceanic feeling</h2>
                <p>Sint occaecat deserunt aliquip do occaecat ut quis. Cupidatat magna fugiat quis sit duis est in volup</p>
                <button>View project <BsArrowRightShort /></button>
            </div>
            <div className="wtw_ptf-section_img">
                <div><img src={image60} alt="" /></div>
                <div><img src={image61} alt="" /></div>
            </div>
        </div>
        <div className="wtw_ptf-section">
            <div className="wtw_ptf-section_text">
                <h4>Swiss Brand Design</h4>
                <h2>Pure summer garden</h2>
                <p>Sint occaecat deserunt aliquip do occaecat ut quis. Cupidatat magna fugiat quis sit duis est in volup</p>
                <button>View project <BsArrowRightShort /></button>
            </div>
            <div className="wtw_ptf-section_img">
                <div><img src={image62} alt="" /></div>
                <div><img src={image63} alt="" /></div>
                <div><img src={image64} alt="" /></div>
            </div>
        </div>
        <div className="wtw_ptf-section1">
            <div className="wtw_ptf-section_text">
                <h4>Product Design</h4>
                <h2>Fairy tales</h2>
                <p>Sint occaecat deserunt aliquip do occaecat ut quis. Cupidatat magna fugiat quis sit duis est in volup</p>
                <button>View project <BsArrowRightShort /></button>
            </div>
            <div className="wtw_ptf-section_img">
                <div><img src={image66} alt="" /></div>
                <div><img src={image65} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioPage