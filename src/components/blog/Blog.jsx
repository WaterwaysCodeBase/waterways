import React from 'react'
import './blog.css'
import Slider from '../slider/Slider'

import { homeSliderConent } from '../../utils/data'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from '../../img/img1.jpg'

const Blog = () => {
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
    <div className='wtw_blog'>
        <h1>Blog</h1>
        <span>Dolore dolore voluptate aliqua ut mi</span>
        <Carousel responsive={responsive}>
            {homeSliderConent.map((d) => (
            <div className='wtw_blog-slider'>
                <img className='wtw_blog-img' src={d.image} alt="" />
                <div className="wtw_blog-text">
                    <h2>{d.title}</h2>
                    <p>{d.text}</p>
                </div>
            </div>
            ))}
        </Carousel>
    </div>
  )
}

export default Blog