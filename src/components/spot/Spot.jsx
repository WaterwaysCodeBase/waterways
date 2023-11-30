import React from 'react'
import './spot.css'
import { CustumButton } from '../GetQuoteButton'
import { secondaryColor } from '../Colors'

const Spot = () => {
  return (
    <div className='wtw_spot'>
        <h5>BE QUICK! FREE SPOTS FOR DECEMBER ARE ALMOST GONE</h5>
        <h1>Claim your no-obligation FREE strategy session</h1>
        <p>
            <span className='wtw_spot-warning'>WARNING:</span> Prior to claiming your Free strategy session, it's essential to recognize 
            that this opportunity is not suitable for everyone. It is exclusively for individuals 
            genuinely committed to establishing their brand and business for long-term success, 
            and who are prepared to invest in realizing their objectives.
        </p>
        <p>
            <span>Hence, we strongly advise prompt booking.</span> Our Digital Strategists have a limited 
            number of available slots for free sessions each month, and they are rapidly being reserved. 
            While the strategy sessions are currently free, this offer won't last indefinitely. Act now to 
            secure your session before charges are reinstated.
        </p>
        <p>
            <span>Here's your next step:</span> Begin by completing the form above, accessible through the 
            button below. Rest assured, the process is straightforward and uncomplicated.
        </p>
        <p>
            Subsequently, we will engage in a discussion to learn more about your business, understand 
            your goals, and more. I am utterly confident that my agency can elevate your outcomes, a fact 
            substantiated by our positive reviews from numerous satisfied clients.
        </p>
        <p>
            This is precisely why I am staking resources valued at N50,000. Click the link below 
            promptly to schedule your call.
        </p>
        <p>
            <span>Abraham Smith</span> <br />
            Senior Digital Strategist <br />
            Waterways Digital Solution
        </p>
        <div className="wtw_spot-button">
            <CustumButton
                bg={secondaryColor}
                color={"white"}
                label={"Book A Free Consultation"}
            />
        </div>
    </div>
  )
}

export default Spot