import React from 'react'
import './process.css'

import { primaryColor, secondaryColor } from '../Colors'
import { HeadingTitle5 } from '../HeadingTitle'
import { SimpleText } from '../TextStyles'
import { processContent } from '../../utils/data'

import { CustumButton } from '../GetQuoteButton';
import { Box } from '@chakra-ui/react'


const Process = () => {
  return (
    <>
        <div className="wtw_process">
            <HeadingTitle5 color={primaryColor}>
              LET'S TALK ABOUT YOUR GOALS
            </HeadingTitle5>
            <SimpleText>
              Tap into the potential of strategic website design.
            </SimpleText>
            {processContent.map((d) => (
              <>
              <div className="wtw-process-section">
                <div className="wtw_process-text">
                  <h4><d.icon />{d.title}</h4>
                  <p>{d.text}</p>
                </div>
                <div className="wtw_process-image">
                  <img src={d.image} alt="" />
                </div>
              </div>
              <hr />
              </>
            ))}
        </div> 
        <div className="wtw_process-button">
        <Box>
          <CustumButton
              bg={secondaryColor}
              color={"white"}
              label={"Get a Quote"}
            />
        </Box>
        </div>
    </>
  )
}

export default Process