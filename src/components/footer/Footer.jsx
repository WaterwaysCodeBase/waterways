import React from 'react'
import './footer.css'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

import logo from '../../img/logo-white.png'

const Footer = () => {
  return (
    <>
        <div className='wtw_footer'>
            <div className="wtw_footer-header">
                <div className="wtw_footer-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="wtw_footer-text">
                    <h4>About Us</h4>
                    <p>
                        We offer the best digital solution services and are known for our creativity, passion, 
                        innovation, and efficiency. We’re the brand that your business needs to succeed.
                    </p>
                </div>
            </div>
            <div className="wtw_footer-info">
                <div className="wtw_footer-list">
                    <p>
                        Contact us
                        <span></span>
                    </p>
                    <ul>
                        <li>+234 8066654012</li>
                        <li>info@waterwaysdigital.com</li>
                        <li>Blog</li>
                    </ul>
                    <div className="wtw_footer-socials">
                        <p><BsFacebook /></p>
                        <p><BsInstagram /></p>
                        <p><BsLinkedin /></p>
                    </div>
                </div>
                <div className="wtw_footer-list">
                    <p>
                        Services
                        <span></span>
                    </p>
                    <ul>
                        <li>Branding Identity Design</li>
                        <li>Product Design</li>
                        <li>Training</li>
                    </ul>
                </div>
                <div className="wtw_footer-list">
                    <p>
                        Latest Blog Post
                        <span></span>
                    </p>
                    <ul>
                        <li>Powerful Event</li>
                        <li>What you should know about Waterways Digital World</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="wtw_copyright">
            <p>©2023. Waterways Digital World. All Rights</p>
        </div>
    </>
  )
}

export default Footer