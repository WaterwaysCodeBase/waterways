import React, { useState } from 'react'
import './contact.css'
import Group from '../../img/group2.png'
import { 
  BsChevronDown, 
  BsChevronUp,
  BsPinFill,
  BsEnvelope,
  BsTelephone,
} from "react-icons/bs";

const Contact = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
        return setSelected(null)
        }

        setSelected(i)
    }

  return (
    <>
        <div className="wtw_contact">
            <div className="wtw_contact-section">
                <form action="">
                    <p>Contact us</p>
                    <h1>Get in touch today</h1>
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='Your Email' />
                    <input type="text" placeholder='Your Phone Number' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your message'/>
                    <button>Send message</button>
                </form>
            </div>
            <div className="wtw_contact-section">
                <div className="wtw_contact-image">
                    <img src={Group} alt="" />
                </div>
                <div className="wtw_contact-text">
                    <p><span><BsPinFill /></span>Address dolor sit amet consectetur. <br /> Nibh donec porttitor.</p>
                    <p><span><BsEnvelope /></span>info@waterwaysdigital.com</p>
                    <p><span><BsTelephone /></span>+2348066654012</p>
                </div>
            </div>
        </div>
        <div className="wtw_faq">
            <h1>Frequently asked questions</h1>
            <h4>Exercitation dolore reprehenderit fugi</h4>
            {data.map((item, i) => (
              <div className="wtw_faq-question">
                  <div className="wtw_faq-title" onClick={() => toggle(i)}>
                  <h2>{item.title}</h2>
                  <span>{selected === i ? <BsChevronUp /> : <BsChevronDown />}</span>
                  </div>
                  <div className={selected === i ? 'wtw_faq-show' : 'wtw_faq-comment'}>
                  <p>{item.comment}</p>
                  </div>
              </div>
          ))}
        </div>
    </>
  )
}

const data = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Vel diam.',
      comment: 'Lorem ipsum dolor sit amet consectetur. Ultricies lacus ac quam ornare vulputate. Donec varius fermentum venenatis rhoncus vestibulum quis auctor in risus. At imperdiet et tincidunt et. Morbi faucibus id non sagittis. Duis duis viverra quisque ultrices dignissim aliquet a ut. Amet tristique eu posuere non quam non. ',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Vel diam.',
      comment: 'Lorem ipsum dolor sit amet consectetur. Ultricies lacus ac quam ornare vulputate. Donec varius fermentum venenatis rhoncus vestibulum quis auctor in risus. At imperdiet et tincidunt et. Morbi faucibus id non sagittis. Duis duis viverra quisque ultrices dignissim aliquet a ut. Amet tristique eu posuere non quam non. ',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Vel diam.',
      comment: 'Lorem ipsum dolor sit amet consectetur. Ultricies lacus ac quam ornare vulputate. Donec varius fermentum venenatis rhoncus vestibulum quis auctor in risus. At imperdiet et tincidunt et. Morbi faucibus id non sagittis. Duis duis viverra quisque ultrices dignissim aliquet a ut. Amet tristique eu posuere non quam non. ',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Vel diam.',
      comment: 'Lorem ipsum dolor sit amet consectetur. Ultricies lacus ac quam ornare vulputate. Donec varius fermentum venenatis rhoncus vestibulum quis auctor in risus. At imperdiet et tincidunt et. Morbi faucibus id non sagittis. Duis duis viverra quisque ultrices dignissim aliquet a ut. Amet tristique eu posuere non quam non. ',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Vel diam.',
      comment: 'Lorem ipsum dolor sit amet consectetur. Ultricies lacus ac quam ornare vulputate. Donec varius fermentum venenatis rhoncus vestibulum quis auctor in risus. At imperdiet et tincidunt et. Morbi faucibus id non sagittis. Duis duis viverra quisque ultrices dignissim aliquet a ut. Amet tristique eu posuere non quam non. ',
    }
  ]

export default Contact