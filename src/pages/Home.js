import * as React from "react";
// 1. import `ChakraProvider` component
import {
  Box,

  Flex,

  Icon,
  Image,

  SimpleGrid,
  Stack,
  Text,
  VStack,

} from "@chakra-ui/react";
import Section from "../components/Section";
import TypingEffect from "../components/TypingEffect";

import {
  bgLight,
  bgPrimary,

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

} from "../components/HeadingTitle";
import {

  BsGlobe,

  BsPersonVcard,
} from "react-icons/bs";
import { SimpleText } from "../components/TextStyles";
import SimpleCard from "../components/SimpleCard";
import { homeCardContent } from "../utils/data";

import Slider from "../components/slider/Slider";
import SimpleCard2 from "../components/simplecard2/SimpleCard2";
import Testimonial from "../components/testimonial/Testimonial";

import BNewsletter from "../components/bNewsletter/BNewsletter";
import GeneralPageLayout from "../components/layout/GeneralPageLayout";

export default function Home() {
  const words = ["Excellence ", "Innovation ", "Trust ", "Impact "];
  return (
    <GeneralPageLayout>
      <Section
        id={"Home"}
        bg={"white"}
        h={{ sm: "100vh", md: "auto" }}
        mt={{ base: "-4em", md: "-5.79em" }}
        pt={{ base: "7em", md: "10em" }}
      // sectionStyle={{
      //   paddingTop: ,
      // }}
      >
        <Flex
          pb={"5em"}
          w={{ base: "100%", md: "90%" }}
          px={{ base: ".5em", md: "" }}
          m={"auto"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex={1}>
            <Stack spacing={"1.5em"}>
              <Text>DIGITAL SERVICE PROVIDER</Text>
              <Stack alignSelf={"flex-start"}>
                <HeadingTitle color={textPrimary}>
                  Centered On
                  <TypingEffect
                    words={words}
                    typingSpeed={300}
                    erasingSpeed={50}
                    delay={10000}
                  />
                </HeadingTitle>
              </Stack>
              <SimpleText
                fontSize={"1.4375rem"}
                fontFamily={"Quicksand"}
                fontWeight={"500"}
                lineHeight={"1.2em"}
              >
                Our passion for innovation and commitment to excellence drive us
                to create solutions that meet your needs and also exceed your
                expectations.
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
      <Section
        bg={bgLight}
        id={""}
        sectionStyle={{
          paddingTop: "7em",
          paddingBottom: "7em",
        }}
      >
        <Stack width={{ base: "99%", md: "85%" }} m={"auto"} spacing={"4em"}>
          <VStack
            textAlign={"center"}
            width={{ base: "99%", md: "85%" }}
            m={"auto"}
          >
            <HeadingTitle2>
              Excellent digital services that help businesses succeed.
            </HeadingTitle2>

            {/* <Text textAlign={"center"} fontSize={"1.5em"} textColor={"white"}>
              Your business records are safely kept on the cloud and ready to be
              downloaded in one click.
            </Text> */}
          </VStack>
          <Flex
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
            // alignItems="center"
            justify={"start"}
            gap={{ base: "3em", md: "1em" }}
          >
            <Box flex="1">
              <Stack
                align={"start"}
                direction={{ base: "", md: "row" }}
                spacing={{ base: 3, md: 5 }}
              >
                <Box bg={"transparent"} rounded={"lg"}>
                  <Icon
                    as={BsPersonVcard}
                    fontSize={"2em"}
                    boxSize={{ base: "1em", md: "1.5em" }}
                    color={textPrimary}
                  />
                </Box>

                <VStack align={"start"} spacing={"2em"}>
                  <HeadingTitle3 color={textPrimary}>
                    Brand Identity{" "}
                  </HeadingTitle3>
                  <SimpleText
                    fontSize={"1.4375rem"}
                    fontFamily={"Quicksand"}
                    fontWeight={"500"}
                    lineHeight={"1.2em"}
                  >
                    The right branding strategy attracts the right clients. We
                    will showcase your value and make you stand out. Your brand
                    is more than just a logo; it's the heart and soul of your
                    business
                  </SimpleText>
                  <Box>
                    <FreeConsultationButton />
                  </Box>
                </VStack>
              </Stack>
            </Box>
            <Box flex="1">
              <Stack
                align={"start"}
                direction={{ base: "", md: "row" }}
                spacing={{ base: 3, md: 5 }}
              >
                <Box bg={"transparent"} rounded={"lg"}>
                  <Icon
                    as={BsGlobe}
                    fontSize={"2em"}
                    boxSize={{ base: "1em", md: "1.5em" }}
                    color={textPrimary}
                  />
                </Box>

                <VStack align={"start"} spacing={"2em"}>
                  <HeadingTitle3 color={textPrimary}>
                    Website Design
                  </HeadingTitle3>
                  <SimpleText>
                    Your website is the digital face of your business. Every
                    business deserves a beautiful website that builds trust with
                    the client base and helps to drive sales. This is our
                    Mission.
                  </SimpleText>

                  <Box>
                    <FreeConsultationButton />
                  </Box>
                </VStack>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      </Section>
      <Section
        bg={"white"}
        id={""}
        sectionStyle={{
          paddingTop: "7em",
          paddingBottom: "7em",
        }}
      >
        <Stack width={{ base: "99%", md: "90%" }} m={"auto"} spacing={"4em"}>
          <VStack
            textAlign={"center"}
            width={{ base: "99%", md: "6xl" }}
            m={"auto"}
            spacing={"2em"}
          >
            <HeadingTitle2>
              Our Goal is Giving the Best For Digital Solution services.
            </HeadingTitle2>

            <SimpleText>
              We’re the brand that your business needs to succeed. Waterways
              Digital World offers you a chance to work with digital marketing
              specialists with a proven track record.
            </SimpleText>
          </VStack>
          <Flex
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
            // alignItems="center"
            justify={"start"}
            gap={{ base: "3em", md: "1em" }}
          >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"2em"}>
              <SimpleCard content={homeCardContent} />
            </SimpleGrid>
          </Flex>
        </Stack>
      </Section>
      <Section
        bg={bgPrimary}
        id={""}
        sectionStyle={{
          paddingTop: "7em",
          paddingBottom: "7em",
        }}
      >
        <Stack width={{ base: "99%", md: "90%" }} m={"auto"} spacing={"4em"}>
          <VStack
            textAlign={"center"}
            width={{ base: "99%", md: "6xl" }}
            m={"auto"}
            spacing={"2em"}
          >
            <SimpleText color={'white'}>
              At Waterways Digital Ltd, Our mission is clear
            </SimpleText>
            <HeadingTitle2 color={textSecondary}>
              Here's what sets us apart
            </HeadingTitle2>
          </VStack>
          <Slider />
        </Stack>
      </Section>
      <Section py={"7em"}>
        <Stack minH={""} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack justifyItems={"center"} spacing={6} w={"full"} maxW={"lg"}>
              <SimpleText>Litmust Service Ltd.</SimpleText>
              <HeadingTitle3>
                How We Created a Game-Changing Job Portal for UK Recruitment
                Agencies
              </HeadingTitle3>
              <Box>
                <CustumButton
                  bg={secondaryColor}
                  color={"white"}
                  label={"Learn more >>"}
                />
              </Box>
            </Stack>
          </Flex>
          <Flex flex={1} borderRadius={"full"}>
            <Image
              borderRadius={"full"}
              alt={"Login Image"}
              objectFit={"cover"}
              src={
                "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            />
          </Flex>
        </Stack>
      </Section>
      <Section
        bg={bgLight}
        sectionStyle={{
          paddingTop: "3em",
          paddingBottom: "1em",
        }}
      >
        <VStack
          textAlign={"center"}
          width={{ base: "99%", md: "6xl" }}
          m={"auto"}
          spacing={"2em"}
        >
          <SimpleText>
            Recent Work
          </SimpleText>
          <HeadingTitle3 color={primaryColor}>
            Seeing our clients win is what gets us excited.
          </HeadingTitle3>
        </VStack>
        <SimpleCard2 />
      </Section>
      <Section>
        <Testimonial />
      </Section>


    </GeneralPageLayout>
  );
}
