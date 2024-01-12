import React from 'react'
import './process2.css'

import { primaryColor, secondaryColor } from '../Colors'
import { HeadingTitle5 } from '../HeadingTitle'
import { SimpleText } from '../TextStyles'
import { process2Content, processContent } from '../../utils/data'

import { CustumButton } from '../GetQuoteButton';
import { Box } from '@chakra-ui/react'

const Process2 = () => {
  return (
    <>
    <div className="wtw_process2-top">
        <div className="wtw_process2">
            <HeadingTitle5 color={primaryColor}>
              Our Process
            </HeadingTitle5>
            <SimpleText>
                A strategic approach to branding and design
            </SimpleText>
            {process2Content.map((d) => (
              <>
              <div className="wtw-process2-section">
                <div className="wtw_process2-text">
                  <h4><d.icon />{d.title}</h4>
                  <p>{d.text}</p>
                </div>
                <div className="wtw_process2-image">
                  <img src={d.image} alt="" />
                </div>
              </div>
              <hr />
              </>
            ))}
        </div> 
    </div>
        <div className="wtw_process2-button">
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

export default Process2