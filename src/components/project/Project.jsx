import React from 'react'
import './project.css'
import img1 from '../../img/image 6.png'

const Project = () => {
  return (
    <div className='wtw_project'>
        <h1>Selected Projects</h1>
        <p>We are proud of our work. Check them out</p>
        <div className="wtw_project-section">
            <div className="wtw_project-image">
                <img src={img1} alt="" />
            </div>
            <div className="wtw_project-image">
                <img src={img1} alt="" />
            </div>
            <div className="wtw_project-image">
                <img src={img1} alt="" />
            </div>
        </div>
        <a href="#wtw">More {`>>`}</a>
    </div>
  )
}

export default Project