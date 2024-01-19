import React from 'react'
import './footer.css'
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

import logo from '../../img/logo-white.png'

const Footer = () => {
  return (
    <>
            <div className='wtw_footer'>
                <div className="wtw_mainFooter">
                    <div className="wtw_footer-header">
                        <div className="wtw_footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="wtw_footer-info">
                            <div className="wtw_footer-text">
                                <h2>Services</h2>
                                <a href="/services/website-design">Web Design</a>
                                <a href="/services/branding-and-design">Brand Design</a>
                                <a href="/services/general-printing">Printing</a>
                            </div>
                            <div className="wtw_footer-text">
                                <h2>Resources</h2>
                                <a href="#social">Blog</a>
                                <a href="/portfolio">Portfolio</a>
                            </div>
                            <div className="wtw_footer-text">
                                <h2>Company</h2>
                                <a href="/about-us">About Us</a>
                                <a href="/contact-us">Contact Us</a>
                                <a href="#social">FAQ</a>
                            </div>
                        </div>
                        <div className="wtw_footer-newsletter">
                            <h2>Subscribe to our newsletter</h2>
                            <p>For product announcements and exclusive insights</p>
                            <div className="wtw_footer-newsletter_input">
                                <input type="text" placeholder='Input your email'/>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <div className="wtw_copyright">
                <select name="" id="">
                    <option value="0">English</option>
                </select>
                <p>©2023. Waterways Digital World. All Rights</p>
                <div className="wtw_footer-contact">
                    <a href="#facebook"><BsFacebook /></a>
                    <a href="#instagram"><BsInstagram /></a>
                    <a href="#linkedin"><BsLinkedin /></a>
                    <a href="#linkedin"><BsYoutube /></a>
                </div>
            </div>
    </>
  )
}

export default Footer