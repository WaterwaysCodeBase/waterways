import * as React from "react";

// 1. import `ChakraProvider` component
import { Box, Flex, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import Section from "../components/Section";
import TypingEffect from "../components/TypingEffect";

import {
  bgLight,
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
import { Bs0Circle } from "react-icons/bs";

export default function Home() {
  const words = ["Excellence ", "Innovation ", "Trust ", "Impact "];
  return (
    <>
      <Section
        id={""}
        // bg={'tr'}
        sectionStyle={{
          height: "100vh",
          marginTop: "-5.79em",
          paddingTop: "10em",
        }}
      >
        <Flex w={"90%"} m={"auto"}>
          <Box flex={1}>
            <Stack spacing={"1.5em"}>
              <Text>DIGITAL SERVICE PROVIDER</Text>
              <Stack alignSelf={"flex-start"}>
                <HeadingTitle color={textPrimary}>
                  Centered On{" "}
                  <TypingEffect
                    words={words}
                    typingSpeed={300}
                    erasingSpeed={50}
                    delay={10000}
                  />
                </HeadingTitle>
              </Stack>
              <Text
                fontSize={"1.4375rem"}
                fontFamily={"Quicksand"}
                fontWeight={"500"}
                lineHeight={"1.2em"}
              >
                Our passion for innovation and commitment to excellence drive us
                to create solutions that meet your needs and also exceed your
                expectations.
              </Text>
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
        <Stack width={"90%"} m={"auto"} spacing={"4em"}>
          <Box width={"4xl"} m={"auto"} textAlign={"center"}>
            <HeadingTitle2>
              Excellent digital services that help businesses succeed.
            </HeadingTitle2>
          </Box>
          <Box display={"flex"} flexDirection={{ base: "", md: "row" }}>
            <Flex flex={1}>
              <Box flex={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   width="104"
                  //   height="88"
                  viewBox="0 0 104 88"
                  fill="none"
                >
                  <g filter="url(#filter0_d_114_719)">
                    <path
                      d="M76.6667 64H27.3333C25.3888 63.9986 23.5244 63.2255 22.1494 61.8506C20.7745 60.4756 20.0014 58.6112 20 56.6667V23.3333C20.0014 21.3888 20.7745 19.5244 22.1494 18.1494C23.5244 16.7745 25.3888 16.0014 27.3333 16H76.6667C78.6112 16.0014 80.4756 16.7745 81.8506 18.1494C83.2255 19.5244 83.9986 21.3888 84 23.3333V56.6667C83.9986 58.6112 83.2255 60.4756 81.8506 61.8506C80.4756 63.2255 78.6112 63.9986 76.6667 64ZM27.3333 20C25.496 20 24 21.496 24 23.3333V56.6667C24 58.504 25.496 60 27.3333 60H76.6667C78.504 60 80 58.504 80 56.6667V23.3333C80 21.496 78.504 20 76.6667 20H27.3333Z"
                      fill="#6404A3"
                    />
                  </g>
                  <path
                    d="M40 40C36.3253 40 33.3333 37.008 33.3333 33.3333C33.3333 29.6586 36.3253 26.6666 40 26.6666C43.6747 26.6666 46.6667 29.6586 46.6667 33.3333C46.6667 37.008 43.6747 40 40 40ZM40 30.6666C38.5307 30.6666 37.3333 31.864 37.3333 33.3333C37.3333 34.8026 38.5307 36 40 36C41.4693 36 42.6667 34.8026 42.6667 33.3333C42.6667 31.864 41.4693 30.6666 40 30.6666ZM50 53.3333C49.4696 53.3333 48.9609 53.1226 48.5858 52.7475C48.2107 52.3724 48 51.8637 48 51.3333V50C48 48.1626 46.504 46.6666 44.6667 46.6666H35.3333C33.496 46.6666 32 48.1626 32 50V51.3333C32 51.8637 31.7893 52.3724 31.4142 52.7475C31.0391 53.1226 30.5304 53.3333 30 53.3333C29.4696 53.3333 28.9609 53.1226 28.5858 52.7475C28.2107 52.3724 28 51.8637 28 51.3333V50C28.0014 48.0555 28.7745 46.191 30.1494 44.8161C31.5244 43.4411 33.3888 42.668 35.3333 42.6666H44.6667C46.6112 42.668 48.4756 43.4411 49.8506 44.8161C51.2255 46.191 51.9986 48.0555 52 50V51.3333C52 51.8637 51.7893 52.3724 51.4142 52.7475C51.0391 53.1226 50.5304 53.3333 50 53.3333ZM74 32H59.3333C58.8029 32 58.2942 31.7892 57.9191 31.4142C57.544 31.0391 57.3333 30.5304 57.3333 30C57.3333 29.4695 57.544 28.9608 57.9191 28.5857C58.2942 28.2107 58.8029 28 59.3333 28H74C74.5304 28 75.0391 28.2107 75.4142 28.5857C75.7893 28.9608 76 29.4695 76 30C76 30.5304 75.7893 31.0391 75.4142 31.4142C75.0391 31.7892 74.5304 32 74 32ZM74 42.6666H59.3333C58.8029 42.6666 58.2942 42.4559 57.9191 42.0808C57.544 41.7058 57.3333 41.1971 57.3333 40.6666C57.3333 40.1362 57.544 39.6275 57.9191 39.2524C58.2942 38.8773 58.8029 38.6666 59.3333 38.6666H74C74.5304 38.6666 75.0391 38.8773 75.4142 39.2524C75.7893 39.6275 76 40.1362 76 40.6666C76 41.1971 75.7893 41.7058 75.4142 42.0808C75.0391 42.4559 74.5304 42.6666 74 42.6666ZM74 53.3333H59.3333C58.8029 53.3333 58.2942 53.1226 57.9191 52.7475C57.544 52.3724 57.3333 51.8637 57.3333 51.3333C57.3333 50.8029 57.544 50.2942 57.9191 49.9191C58.2942 49.544 58.8029 49.3333 59.3333 49.3333H74C74.5304 49.3333 75.0391 49.544 75.4142 49.9191C75.7893 50.2942 76 50.8029 76 51.3333C76 51.8637 75.7893 52.3724 75.4142 52.7475C75.0391 53.1226 74.5304 53.3333 74 53.3333Z"
                    fill="#6404A3"
                  />
                  <defs>
                    <filter
                      id="filter0_d_114_719"
                      x="0"
                      y="0"
                      width="104"
                      height="88"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="10" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.101686 0 0 0 0 0 0 0 0 0 0.170833 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_114_719"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_114_719"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Box>
              <Stack flex={11} spacing={"1em"}>
                <HeadingTitle3 color={textPrimary}>
                  Brand Identity Design{" "}
                </HeadingTitle3>
                <Text
                  fontSize={"1.4375rem"}
                  fontFamily={"Quicksand"}
                  fontWeight={"500"}
                  lineHeight={"1.2em"}
                >
                  The right branding strategy attracts the right clients. We
                  will showcase your value and make you stand out. Your brand is
                  more than just a logo; it's the heart and soul of your
                  business
                </Text>

                <Box>
                  <FreeConsultationButton />
                </Box>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Box flex={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   width="104"
                  //   height="88"
                  viewBox="0 0 104 88"
                  fill="none"
                >
                  <g filter="url(#filter0_d_114_719)">
                    <path
                      d="M76.6667 64H27.3333C25.3888 63.9986 23.5244 63.2255 22.1494 61.8506C20.7745 60.4756 20.0014 58.6112 20 56.6667V23.3333C20.0014 21.3888 20.7745 19.5244 22.1494 18.1494C23.5244 16.7745 25.3888 16.0014 27.3333 16H76.6667C78.6112 16.0014 80.4756 16.7745 81.8506 18.1494C83.2255 19.5244 83.9986 21.3888 84 23.3333V56.6667C83.9986 58.6112 83.2255 60.4756 81.8506 61.8506C80.4756 63.2255 78.6112 63.9986 76.6667 64ZM27.3333 20C25.496 20 24 21.496 24 23.3333V56.6667C24 58.504 25.496 60 27.3333 60H76.6667C78.504 60 80 58.504 80 56.6667V23.3333C80 21.496 78.504 20 76.6667 20H27.3333Z"
                      fill="#6404A3"
                    />
                  </g>
                  <path
                    d="M40 40C36.3253 40 33.3333 37.008 33.3333 33.3333C33.3333 29.6586 36.3253 26.6666 40 26.6666C43.6747 26.6666 46.6667 29.6586 46.6667 33.3333C46.6667 37.008 43.6747 40 40 40ZM40 30.6666C38.5307 30.6666 37.3333 31.864 37.3333 33.3333C37.3333 34.8026 38.5307 36 40 36C41.4693 36 42.6667 34.8026 42.6667 33.3333C42.6667 31.864 41.4693 30.6666 40 30.6666ZM50 53.3333C49.4696 53.3333 48.9609 53.1226 48.5858 52.7475C48.2107 52.3724 48 51.8637 48 51.3333V50C48 48.1626 46.504 46.6666 44.6667 46.6666H35.3333C33.496 46.6666 32 48.1626 32 50V51.3333C32 51.8637 31.7893 52.3724 31.4142 52.7475C31.0391 53.1226 30.5304 53.3333 30 53.3333C29.4696 53.3333 28.9609 53.1226 28.5858 52.7475C28.2107 52.3724 28 51.8637 28 51.3333V50C28.0014 48.0555 28.7745 46.191 30.1494 44.8161C31.5244 43.4411 33.3888 42.668 35.3333 42.6666H44.6667C46.6112 42.668 48.4756 43.4411 49.8506 44.8161C51.2255 46.191 51.9986 48.0555 52 50V51.3333C52 51.8637 51.7893 52.3724 51.4142 52.7475C51.0391 53.1226 50.5304 53.3333 50 53.3333ZM74 32H59.3333C58.8029 32 58.2942 31.7892 57.9191 31.4142C57.544 31.0391 57.3333 30.5304 57.3333 30C57.3333 29.4695 57.544 28.9608 57.9191 28.5857C58.2942 28.2107 58.8029 28 59.3333 28H74C74.5304 28 75.0391 28.2107 75.4142 28.5857C75.7893 28.9608 76 29.4695 76 30C76 30.5304 75.7893 31.0391 75.4142 31.4142C75.0391 31.7892 74.5304 32 74 32ZM74 42.6666H59.3333C58.8029 42.6666 58.2942 42.4559 57.9191 42.0808C57.544 41.7058 57.3333 41.1971 57.3333 40.6666C57.3333 40.1362 57.544 39.6275 57.9191 39.2524C58.2942 38.8773 58.8029 38.6666 59.3333 38.6666H74C74.5304 38.6666 75.0391 38.8773 75.4142 39.2524C75.7893 39.6275 76 40.1362 76 40.6666C76 41.1971 75.7893 41.7058 75.4142 42.0808C75.0391 42.4559 74.5304 42.6666 74 42.6666ZM74 53.3333H59.3333C58.8029 53.3333 58.2942 53.1226 57.9191 52.7475C57.544 52.3724 57.3333 51.8637 57.3333 51.3333C57.3333 50.8029 57.544 50.2942 57.9191 49.9191C58.2942 49.544 58.8029 49.3333 59.3333 49.3333H74C74.5304 49.3333 75.0391 49.544 75.4142 49.9191C75.7893 50.2942 76 50.8029 76 51.3333C76 51.8637 75.7893 52.3724 75.4142 52.7475C75.0391 53.1226 74.5304 53.3333 74 53.3333Z"
                    fill="#6404A3"
                  />
                  <defs>
                    <filter
                      id="filter0_d_114_719"
                      x="0"
                      y="0"
                      width="104"
                      height="88"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="10" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.101686 0 0 0 0 0 0 0 0 0 0.170833 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_114_719"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_114_719"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Box>
              <Stack flex={11} spacing={"1em"}>
                <HeadingTitle3 color={textPrimary}>
                  Website Design
                </HeadingTitle3>
                <Text
                  fontSize={"1.4375rem"}
                  fontFamily={"Quicksand"}
                  fontWeight={"500"}
                  lineHeight={"1.2em"}
                >
                  Your website is the digital face of your business. Every
                  business deserves a beautiful website that builds trust with
                  the client base and helps to drive sales. This is our Mission.
                </Text>

                <Box>
                  <FreeConsultationButton />
                </Box>
              </Stack>
            </Flex>
          </Box>
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
        <Stack width={"90%"} m={"auto"} spacing={"4em"}>
          <Box width={"4xl"} m={"auto"} textAlign={"center"} gap={5}>
            <HeadingTitle2>
              Our Goal is Giving the Best For Digital Solution services.
            </HeadingTitle2>
            <br />
            <Text
              fontSize={"1.3375rem"}
              fontFamily={"Quicksand"}
              fontWeight={"500"}
              lineHeight={"1.2em"}
            >
              We’re the brand that your business needs to succeed. Waterways
              Digital World offers you a chance to work with digital marketing
              specialists with a proven track record.
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={{ base: "", md: "row" }}>
            <Flex flex={1}>
              <Box flex={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   width="104"
                  //   height="88"
                  viewBox="0 0 104 88"
                  fill="none"
                >
                  <g filter="url(#filter0_d_114_719)">
                    <path
                      d="M76.6667 64H27.3333C25.3888 63.9986 23.5244 63.2255 22.1494 61.8506C20.7745 60.4756 20.0014 58.6112 20 56.6667V23.3333C20.0014 21.3888 20.7745 19.5244 22.1494 18.1494C23.5244 16.7745 25.3888 16.0014 27.3333 16H76.6667C78.6112 16.0014 80.4756 16.7745 81.8506 18.1494C83.2255 19.5244 83.9986 21.3888 84 23.3333V56.6667C83.9986 58.6112 83.2255 60.4756 81.8506 61.8506C80.4756 63.2255 78.6112 63.9986 76.6667 64ZM27.3333 20C25.496 20 24 21.496 24 23.3333V56.6667C24 58.504 25.496 60 27.3333 60H76.6667C78.504 60 80 58.504 80 56.6667V23.3333C80 21.496 78.504 20 76.6667 20H27.3333Z"
                      fill="#6404A3"
                    />
                  </g>
                  <path
                    d="M40 40C36.3253 40 33.3333 37.008 33.3333 33.3333C33.3333 29.6586 36.3253 26.6666 40 26.6666C43.6747 26.6666 46.6667 29.6586 46.6667 33.3333C46.6667 37.008 43.6747 40 40 40ZM40 30.6666C38.5307 30.6666 37.3333 31.864 37.3333 33.3333C37.3333 34.8026 38.5307 36 40 36C41.4693 36 42.6667 34.8026 42.6667 33.3333C42.6667 31.864 41.4693 30.6666 40 30.6666ZM50 53.3333C49.4696 53.3333 48.9609 53.1226 48.5858 52.7475C48.2107 52.3724 48 51.8637 48 51.3333V50C48 48.1626 46.504 46.6666 44.6667 46.6666H35.3333C33.496 46.6666 32 48.1626 32 50V51.3333C32 51.8637 31.7893 52.3724 31.4142 52.7475C31.0391 53.1226 30.5304 53.3333 30 53.3333C29.4696 53.3333 28.9609 53.1226 28.5858 52.7475C28.2107 52.3724 28 51.8637 28 51.3333V50C28.0014 48.0555 28.7745 46.191 30.1494 44.8161C31.5244 43.4411 33.3888 42.668 35.3333 42.6666H44.6667C46.6112 42.668 48.4756 43.4411 49.8506 44.8161C51.2255 46.191 51.9986 48.0555 52 50V51.3333C52 51.8637 51.7893 52.3724 51.4142 52.7475C51.0391 53.1226 50.5304 53.3333 50 53.3333ZM74 32H59.3333C58.8029 32 58.2942 31.7892 57.9191 31.4142C57.544 31.0391 57.3333 30.5304 57.3333 30C57.3333 29.4695 57.544 28.9608 57.9191 28.5857C58.2942 28.2107 58.8029 28 59.3333 28H74C74.5304 28 75.0391 28.2107 75.4142 28.5857C75.7893 28.9608 76 29.4695 76 30C76 30.5304 75.7893 31.0391 75.4142 31.4142C75.0391 31.7892 74.5304 32 74 32ZM74 42.6666H59.3333C58.8029 42.6666 58.2942 42.4559 57.9191 42.0808C57.544 41.7058 57.3333 41.1971 57.3333 40.6666C57.3333 40.1362 57.544 39.6275 57.9191 39.2524C58.2942 38.8773 58.8029 38.6666 59.3333 38.6666H74C74.5304 38.6666 75.0391 38.8773 75.4142 39.2524C75.7893 39.6275 76 40.1362 76 40.6666C76 41.1971 75.7893 41.7058 75.4142 42.0808C75.0391 42.4559 74.5304 42.6666 74 42.6666ZM74 53.3333H59.3333C58.8029 53.3333 58.2942 53.1226 57.9191 52.7475C57.544 52.3724 57.3333 51.8637 57.3333 51.3333C57.3333 50.8029 57.544 50.2942 57.9191 49.9191C58.2942 49.544 58.8029 49.3333 59.3333 49.3333H74C74.5304 49.3333 75.0391 49.544 75.4142 49.9191C75.7893 50.2942 76 50.8029 76 51.3333C76 51.8637 75.7893 52.3724 75.4142 52.7475C75.0391 53.1226 74.5304 53.3333 74 53.3333Z"
                    fill="#6404A3"
                  />
                  <defs>
                    <filter
                      id="filter0_d_114_719"
                      x="0"
                      y="0"
                      width="104"
                      height="88"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="10" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.101686 0 0 0 0 0 0 0 0 0 0.170833 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_114_719"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_114_719"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Box>
              <Stack flex={11} spacing={"1em"}>
                <HeadingTitle3 color={textPrimary}>
                  Brand Identity Design{" "}
                </HeadingTitle3>
                <Text
                  fontSize={"1.4375rem"}
                  fontFamily={"Quicksand"}
                  fontWeight={"500"}
                  lineHeight={"1.2em"}
                >
                  The right branding strategy attracts the right clients. We
                  will showcase your value and make you stand out. Your brand is
                  more than just a logo; it's the heart and soul of your
                  business
                </Text>

                <Box>
                  <FreeConsultationButton />
                </Box>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Box flex={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   width="104"
                  //   height="88"
                  viewBox="0 0 104 88"
                  fill="none"
                >
                  <g filter="url(#filter0_d_114_719)">
                    <path
                      d="M76.6667 64H27.3333C25.3888 63.9986 23.5244 63.2255 22.1494 61.8506C20.7745 60.4756 20.0014 58.6112 20 56.6667V23.3333C20.0014 21.3888 20.7745 19.5244 22.1494 18.1494C23.5244 16.7745 25.3888 16.0014 27.3333 16H76.6667C78.6112 16.0014 80.4756 16.7745 81.8506 18.1494C83.2255 19.5244 83.9986 21.3888 84 23.3333V56.6667C83.9986 58.6112 83.2255 60.4756 81.8506 61.8506C80.4756 63.2255 78.6112 63.9986 76.6667 64ZM27.3333 20C25.496 20 24 21.496 24 23.3333V56.6667C24 58.504 25.496 60 27.3333 60H76.6667C78.504 60 80 58.504 80 56.6667V23.3333C80 21.496 78.504 20 76.6667 20H27.3333Z"
                      fill="#6404A3"
                    />
                  </g>
                  <path
                    d="M40 40C36.3253 40 33.3333 37.008 33.3333 33.3333C33.3333 29.6586 36.3253 26.6666 40 26.6666C43.6747 26.6666 46.6667 29.6586 46.6667 33.3333C46.6667 37.008 43.6747 40 40 40ZM40 30.6666C38.5307 30.6666 37.3333 31.864 37.3333 33.3333C37.3333 34.8026 38.5307 36 40 36C41.4693 36 42.6667 34.8026 42.6667 33.3333C42.6667 31.864 41.4693 30.6666 40 30.6666ZM50 53.3333C49.4696 53.3333 48.9609 53.1226 48.5858 52.7475C48.2107 52.3724 48 51.8637 48 51.3333V50C48 48.1626 46.504 46.6666 44.6667 46.6666H35.3333C33.496 46.6666 32 48.1626 32 50V51.3333C32 51.8637 31.7893 52.3724 31.4142 52.7475C31.0391 53.1226 30.5304 53.3333 30 53.3333C29.4696 53.3333 28.9609 53.1226 28.5858 52.7475C28.2107 52.3724 28 51.8637 28 51.3333V50C28.0014 48.0555 28.7745 46.191 30.1494 44.8161C31.5244 43.4411 33.3888 42.668 35.3333 42.6666H44.6667C46.6112 42.668 48.4756 43.4411 49.8506 44.8161C51.2255 46.191 51.9986 48.0555 52 50V51.3333C52 51.8637 51.7893 52.3724 51.4142 52.7475C51.0391 53.1226 50.5304 53.3333 50 53.3333ZM74 32H59.3333C58.8029 32 58.2942 31.7892 57.9191 31.4142C57.544 31.0391 57.3333 30.5304 57.3333 30C57.3333 29.4695 57.544 28.9608 57.9191 28.5857C58.2942 28.2107 58.8029 28 59.3333 28H74C74.5304 28 75.0391 28.2107 75.4142 28.5857C75.7893 28.9608 76 29.4695 76 30C76 30.5304 75.7893 31.0391 75.4142 31.4142C75.0391 31.7892 74.5304 32 74 32ZM74 42.6666H59.3333C58.8029 42.6666 58.2942 42.4559 57.9191 42.0808C57.544 41.7058 57.3333 41.1971 57.3333 40.6666C57.3333 40.1362 57.544 39.6275 57.9191 39.2524C58.2942 38.8773 58.8029 38.6666 59.3333 38.6666H74C74.5304 38.6666 75.0391 38.8773 75.4142 39.2524C75.7893 39.6275 76 40.1362 76 40.6666C76 41.1971 75.7893 41.7058 75.4142 42.0808C75.0391 42.4559 74.5304 42.6666 74 42.6666ZM74 53.3333H59.3333C58.8029 53.3333 58.2942 53.1226 57.9191 52.7475C57.544 52.3724 57.3333 51.8637 57.3333 51.3333C57.3333 50.8029 57.544 50.2942 57.9191 49.9191C58.2942 49.544 58.8029 49.3333 59.3333 49.3333H74C74.5304 49.3333 75.0391 49.544 75.4142 49.9191C75.7893 50.2942 76 50.8029 76 51.3333C76 51.8637 75.7893 52.3724 75.4142 52.7475C75.0391 53.1226 74.5304 53.3333 74 53.3333Z"
                    fill="#6404A3"
                  />
                  <defs>
                    <filter
                      id="filter0_d_114_719"
                      x="0"
                      y="0"
                      width="104"
                      height="88"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="10" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.101686 0 0 0 0 0 0 0 0 0 0.170833 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_114_719"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_114_719"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Box>
              <Stack flex={11} spacing={"1em"}>
                <HeadingTitle3 color={textPrimary}>
                  Website Design
                </HeadingTitle3>
                <Text
                  fontSize={"1.4375rem"}
                  fontFamily={"Quicksand"}
                  fontWeight={"500"}
                  lineHeight={"1.2em"}
                >
                  Your website is the digital face of your business. Every
                  business deserves a beautiful website that builds trust with
                  the client base and helps to drive sales. This is our Mission.
                </Text>
                <Box>
                  <FreeConsultationButton />
                </Box>
              </Stack>
            </Flex>
          </Box>
        </Stack>
      </Section>
    </>
  );
}
