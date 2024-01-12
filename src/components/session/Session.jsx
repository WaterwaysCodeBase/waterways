import React from 'react'
import './session.css'
import img1 from '../../img/business.png'

const Session = () => {
  return (
    <div className="wtw_session-section">
        <div className='wtw_session'>
            <h5>BE QUICK! FREE SPOTS FOR DECEMBER ARE ALMOST GONE</h5>
            <h1>Book <span>30 Minutes Free</span> Strategy Session</h1>
            <p>
                Claim your 100% FREE, no-obligation 30-minute Strategy Session Call (typically valued at N50,000). 
                During this session, we'll delve into your goals, formulate a customized plan, and address any 
                questions you may have.
            </p>
            <div className="wtw_session-expect">
                <div className="wtw_session-image">
                <img src={img1} alt="" />
                </div>
                <div className="wtw_session-list">
                    <ol>
                        <h3>HERE’S WHAT TO EXPECT:</h3>
                        <li>
                            Swift confirmation via email upon receiving your request. Ensure to check your spam 
                            folder if you don't find it in your inbox.
                        </li>
                        <li>
                            Expect a call from one of Waterways strategists promptly—within 24 hours on weekdays 
                            and 48 hours over the weekend.
                        </li>
                        <li>
                            Collaborative clarification of your requirements to ensure a precise understanding.
                        </li>
                        <li>
                            Exchange of insightful ideas tailored to assist you in reaching your goals effectively.
                        </li>
                        <li>
                            When you're prepared to commence, receive a personalized quote or proposal tailored to your needs.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Session