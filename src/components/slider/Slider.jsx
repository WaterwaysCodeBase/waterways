import React from 'react'
import './slider.css'
import { homeSliderConent } from '../../utils/data'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../img/img1.jpg'

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3.5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
      <div className='wtw_slider-main'>
        <Carousel responsive={responsive}>
            {homeSliderConent.map((d) => (
            <div className='wtw_slider'>
                <img className='wtw_slider-img' src={d.image} alt="" />
                <div className="wtw_slider-text">
                    <h2>{d.title}</h2>
                    <p>{d.text}</p>
                </div>
            </div>
            ))}
        </Carousel>
      </div>
  )
}

{/* <div className="wtw_slider-button">p</div> */}
{/* <div className='wtw_slider'>
    {homeSliderConent.map((d) => (
        <>
            <div className="wtw_slider-section">
                <div className="wtw_slider-image">
                    <img src={d.image} alt="" />
                </div>
                <div className="wtw_slider-text">
                    <h2>{d.title}</h2>
                    <p>{d.text}</p>
                </div>
            </div>
        </>
    ))}
</div>
<div className="wtw_slider-button">p</div> */}

export default Slider