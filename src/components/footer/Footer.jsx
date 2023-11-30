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
            </div>
            <div className="wtw_footer-info">
                <div className="wtw_footer-text">
                    <a href="#social">About us</a>
                    <a href="#social">Web Design</a>
                </div>
                <div className="wtw_footer-text">
                    <a href="#social">Brand Design</a>
                    <a href="#social">Web Design</a>
                </div>
                <div className="wtw_footer-text">
                    <a href="#social">Printing</a>
                    <a href="#social">Academy</a>
                </div>
                <div className="wtw_footer-text">
                    <a href="#social">Help Center</a>
                    <a href="#social">Chat Support</a>
                </div>
                <div className="wtw_footer-text">
                    <input type="text" placeholder='English'/>
                    <a href="#social">info@waterwaysdigital.com</a>
                </div>
            </div>
        </div>
        <div className="wtw_copyright">
            <p>©2023. Waterways Digital World. All Rights</p>
            <div className="wtw_footer-contact">
                <p>Contact Us:</p>
                <a href="#facebook">Facebook</a>
                <a href="#instagram">Instagram</a>
                <a href="#linkedin">Linkedin</a>
            </div>
        </div>
    </>
  )
}

export default Footer