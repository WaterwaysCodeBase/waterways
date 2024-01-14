import React from 'react'
import './team.css'

import { 
    BsFacebook,
    BsLinkedin,
  } from "react-icons/bs";

import team1 from '../../img/team1.png'

const Team = () => {
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300;
      }
    
      const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300;
      }
  return (
    <div className='wtw_team'>
        <div className="wtw_team-section">
            <h1>Our Team</h1>
            <p>We’re the game changer. We’re changing the whole game.</p>
            <div className="wtw_team-slider" id='slider'>
                <div className="wtw_team-member">
                    <img src={team1} alt="" />    
                    <div className="wtw_team-info">
                        <a href='#name'>Adewole Isaac</a>
                        <span>Digital Product Designer</span>
                        <div className="wtw_team-icon">
                            <BsFacebook />
                            <BsLinkedin />
                        </div>
                    </div>            
                </div>
                <div className="wtw_team-member">
                    <img src={team1} alt="" />    
                    <div className="wtw_team-info">
                        <a href='#name'>Adewole Isaac</a>
                        <span>Digital Product Designer</span>
                        <div className="wtw_team-icon">
                            <BsFacebook />
                            <BsLinkedin />
                        </div>
                    </div>            
                </div>
                <div className="wtw_team-member">
                    <img src={team1} alt="" />    
                    <div className="wtw_team-info">
                        <a href='#name'>Adewole Isaac</a>
                        <span>Digital Product Designer</span>
                        <div className="wtw_team-icon">
                            <BsFacebook />
                            <BsLinkedin />
                        </div>
                    </div>            
                </div>
                <div className="wtw_team-member">
                    <img src={team1} alt="" />    
                    <div className="wtw_team-info">
                        <a href='#name'>Adewole Isaac</a>
                        <span>Digital Product Designer</span>
                        <div className="wtw_team-icon">
                            <BsFacebook />
                            <BsLinkedin />
                        </div>
                    </div>            
                </div>
                <div className="wtw_team-member">
                    <img src={team1} alt="" />    
                    <div className="wtw_team-info">
                        <a href='#name'>Adewole Isaac</a>
                        <span>Digital Product Designer</span>
                        <div className="wtw_team-icon">
                            <BsFacebook />
                            <BsLinkedin />
                        </div>
                    </div>            
                </div>
                <div className="wtw_team-member">
                    <img src={team1} alt="" />    
                    <div className="wtw_team-info">
                        <a href='#name'>Adewole Isaac</a>
                        <span>Digital Product Designer</span>
                        <div className="wtw_team-icon">
                            <BsFacebook />
                            <BsLinkedin />
                        </div>
                    </div>            
                </div>
            </div>
            <div className="wtw_team-arrow">
                <p id="left" onClick={slideLeft}>{`<`}</p>
                <p id="left" onClick={slideRight}>{`>`}</p>
            </div>
        </div>
    </div>
  )
}

export default Team