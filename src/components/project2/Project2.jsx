import React from 'react'
import './project2.css'
import P21 from '../../img/p21.png'
import P22 from '../../img/p22.png'
import P23 from '../../img/p23.png'
import P24 from '../../img/p24.png'
import P25 from '../../img/p25.png'
import P26 from '../../img/p26.png'

const Project2 = () => {
  return (
    <div className='wtw_project2'>
        <h1>Selected Projects</h1>
        <p>We are proud of our work. Check them out</p>
        <div className="wtw_project2-section">
            <div className="wtw_project2-image">
                <img src={P21} alt="" />
            </div>
            <div className="wtw_project2-image">
                <img src={P22} alt="" />
            </div>
            <div className="wtw_project2-image">
                <img src={P23} alt="" />
            </div>
            <div className="wtw_project2-image">
                <img src={P24} alt="" />
            </div>
            <div className="wtw_project2-image">
                <img src={P25} alt="" />
            </div>
            <div className="wtw_project2-image">
                <img src={P26} alt="" />
            </div>
        </div>
        <a href="#wtw">See More {`>>`}</a>
    </div>
  )
}

export default Project2