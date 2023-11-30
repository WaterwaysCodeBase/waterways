import React from 'react'
import './testimonial.css'
import img2 from '../../img/Rectangle 3.png'
import arrow from '../../img/Frame 131.png'

const Testimonial = () => {
    const Arrow = {
        left: `${props=> props.direction === 'left' && '10px'}`,
        right: `${props=> props.direction === 'right' && '10px'}`,
    }
  return (
    <div className='wtw_testimonial'>
    <h3>Testimonials</h3>
        <div className="nasir">
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
                        <img style={Arrow} src={arrow} alt="" direction='left' />
                        <img style={Arrow} src={arrow} alt="" direction='right' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial