import React from 'react'
import './testimonial.css'
import img2 from '../../img/Rectangle 3.png'
import left from '../../img/Frame 131.png'

const Testimonial = () => {
  return (
    <div className='wtw_testimonial'>
        <h3>Testimonials</h3>
        <div className="wtw_testimonial-section">
            <div className="wtw_testimonial-image">
                <img src={img2} alt="" />
            </div>
            <div className="wtw_testimonial-text">
                <p>James Brown</p>
                <span>Senior Product Manager</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Eget sed facilisi id aliquet vitae quam. 
                    Ultricies consequat viverra eget tempor vitae eget. Ornare erat odio id suspendisse auctor. 
                    Pellentesque id amet mus nunc eget massa. Nibh in consequat et arcu quam id integer sem dui. 
                    Non laoreet venenatis non ipsum lectus arcu donec vivamus. Eleifend at. 
                </p>
                <div className="wtw_testimonial-buttons">
                    <img src={left} alt="" />
                    <img src={left} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial