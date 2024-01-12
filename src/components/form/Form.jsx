import React from 'react'
import './form.css'
import img1 from '../../img/form.png'

const Form = () => {
  return (
    <div className='wtw_form'>
        <div className="wtw_form-image">
            <h1>Get Started Here</h1>
            <p>Fill in the form to get in touch.</p>
            <img src={img1} alt="" />
        </div>
        <div className="wtw_form-input">
            <form action="">
                <div className="wtw_form-double">
                    <div className="wtw_form-single">
                        <label>First name</label>
                        <input type="text" placeholder='Input text'/>
                    </div> 
                    <div className="wtw_form-single">
                        <label>Last name</label>
                        <input type="text" placeholder='Input text'/>
                    </div>
                </div>
                <div className="wtw_form-single">
                    <label>Email</label>
                    <input type="email" placeholder='Input text'/>
                </div>
                <div className="wtw_form-single">
                    <label>What service are you interested in</label>
                    <input type="text" placeholder='Please select'/>
                </div>
                <div className="wtw_form-single">
                    <label>When would you like to begin work on this?</label>
                    <input type="text" placeholder='Please select'/>
                </div>
                <div className="wtw_form-single">
                    <label>Your Role/Job Title</label>
                    <input type="text" placeholder='Please select'/>
                </div>
                <div className="wtw_form-single">
                    <label>Tell us about your business and goals</label>
                    <textarea type="text" placeholder='Input Text'/>
                </div>
                <div className="wtw_form-double">
                    <div className="wtw_form-single">
                        <label>Phone Number</label>
                        <input type="text" placeholder='Input text'/>
                    </div>
                    <div className="wtw_form-single">
                        <label>Best Way to reach you</label>
                        <input type="text" placeholder='Input text'/>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form