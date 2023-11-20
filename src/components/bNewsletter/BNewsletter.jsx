import React from 'react'
import Section from '../Section'
import { bgLight, primaryColor, secondaryColor } from '../Colors'
import { HeadingTitle4, HeadingTitle5 } from '../HeadingTitle'
import { SimpleText, SimpleText2 } from '../TextStyles'
import { Flex, Image, Stack, VStack } from '@chakra-ui/react'
import Newsletter from '../newsletter/Newsletter'
import goals from '../../img/goals.png'

const BNewsletter = () => {
  return (
    <div>
        <Section 
      py={"3em"}
      bg={bgLight}
      >
      <VStack
            textAlign={"center"}
            width={{ base: "99%", md: "6xl" }}
            m={"auto"}
          >
            <HeadingTitle5 color={primaryColor}>
              LET'S TALK ABOUT YOUR GOALS
            </HeadingTitle5>
            <SimpleText>
              Tap into the potential of strategic website design.
            </SimpleText>
          </VStack>
        <Stack
          minH={""} 
          direction={{ base: "column", md: "row" }} mt={{ base: '4em', md: '2em' }} alignItems={'center'}>
          <Flex
            pl={8} 
            pr={8} 
            flex={1} 
            align={"center"} 
            justify={"center"}
            direction={"column"}
          >
            <Stack
              justifyItems={"center"}  
              spacing={2} w={"full"} 
              maxW={"lg"}
              mb={'3em'}
            >
              <HeadingTitle4
                color={primaryColor}
              >
                Schedule time to talk
              </HeadingTitle4>
              <SimpleText2>
                Speak to an expert and hear for yourself how our digital services can help your business grow and succeed. Ready? Grab a block of time.
              </SimpleText2>
              <p
                style={{
                  color:`${secondaryColor}`,
                  cursor: "pointer",
                  fontSize: '18px',
                  textDecorationLine: 'underline',
                  width: '150px'
                }}
              >
                Learn more
              </p>
            </Stack>
            <Stack
              justifyItems={"center"}  
              spacing={2} w={"full"} 
              maxW={"lg"}
              mb={'3em'}
            >
              <HeadingTitle4
                color={primaryColor}
              >
                Get a FREE Strategy Session
              </HeadingTitle4>
              <SimpleText2>
                Speak to an expert and hear for yourself how our digital services can help your business grow and succeed. Ready? Grab a block of time.
              </SimpleText2>
              <p
                style={{
                  color:`${secondaryColor}`,
                  cursor: "pointer",
                  fontSize: '18px',
                  textDecorationLine: 'underline',
                  width: '150px'
                }}
              >
                Learn more
              </p>
            </Stack>
          </Flex>
          <Flex 
            flex={1} 
            borderRadius={"full"}  
            pl={'2em'}
            pr={'2em'}
          >
            <Image
              alignSelf={'center'}
              borderRadius={'20px'}
              // width={'100%'}
              alt={"Login Image"}
              src={goals}
            />
          </Flex>
        </Stack>
        <Newsletter />
      </Section>
    </div>
  )
}

export default BNewsletter