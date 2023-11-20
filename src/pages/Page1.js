import React from 'react'

import {
    Box,
    Button,
    Container,
    Flex,
    GridItem,
    Icon,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VStack,
    background,
    textDecoration,
} from "@chakra-ui/react";

import Section from "../components/Section";

import {
    bgLight,
    bgPrimary,
    bgTertairy,
    primaryColor,
    secondaryColor,
    textPrimary,
    textSecondary,
} from "../components/Colors";

import {
    CustumButton,
    FreeConsultationButton,
} from "../components/GetQuoteButton";

import {
    HeadingTitle,
    HeadingTitle2,
    HeadingTitle3,
    HeadingTitle4,
    HeadingTitle5,
} from "../components/HeadingTitle";
import { SimpleText } from '../components/TextStyles';
import Goals from '../components/goals/Goals';
import Process from '../components/process/Process';
import Services from '../components/services/Services';
import Project from '../components/project/Project';
import BNewsletter from '../components/bNewsletter/BNewsletter';
import Footer from '../components/footer/Footer';

const Page1 = () => {
  return (
    <>
      <Section
        id={"Home"}
        bg={"white"}
        h={{ sm: "100vh", md: "auto" }}
        mt={{ base: "-4em", md: "-5.79em" }}
        pt={{ base: "7em", md: "10em" }}
      >
        <Flex
          pb={"5em"}
          w={{ base: "100%", md: "90%" }}
          px={{ base: ".5em", md: "" }}
          m={"auto"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex={1.3}>
            <Stack spacing={"1.5em"}>
              <Text>WEBSITE DESIGN</Text>
              <Stack alignSelf={"flex-start"}>
                <HeadingTitle2 color={textPrimary}>
                    You need a beautiful website that drives results.
                </HeadingTitle2>
              </Stack>
              <SimpleText
                fontSize={"1.4375rem"}
                fontFamily={"Quicksand"}
                fontWeight={"500"}
                lineHeight={"1.2em"}
              >
                From concept and strategy, to design and implementation, Watarways’ 
                award-winning Website Design team will bring your new website vision to 
                life.
              </SimpleText>
              <Box>
                <CustumButton
                  bg={secondaryColor}
                  color={"white"}
                  label={"Book A Free Consultation"}
                />
              </Box>
            </Stack>
          </Box>
          <Box flex={1}></Box>
        </Flex>
      </Section>   
      <Goals /> 
      <Process /> 
      <Services /> 
      <Project /> 
      <BNewsletter />
      <Footer />
    </>
  )
}

export default Page1