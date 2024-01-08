import React from 'react'

import {
    Box,

    Flex,

    Stack,
    Text,

} from "@chakra-ui/react";

import Section from "../../components/Section";

import {

    secondaryColor,
    textPrimary,

} from "../../components/Colors";

import {
    CustumButton,

} from "../../components/GetQuoteButton";

import {

    HeadingTitle2,

} from "../../components/HeadingTitle";
import { SimpleText } from '../../components/TextStyles';

import BNewsletter from '../../components/bNewsletter/BNewsletter';
import Project2 from '../../components/project2/Project2';
import Footer from '../../components/footer/Footer';
import Goals2 from '../../components/goals2/Goals2';
import GeneralPageLayout from '../../components/layout/GeneralPageLayout';
import Process2 from '../../components/process2/Process2';

const BrandingAndDesign = () => {
    return (
        <GeneralPageLayout>

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
                                <Text>BRANDING AND DESIGN</Text>
                                <Stack alignSelf={"flex-start"}>
                                    <HeadingTitle2 color={textPrimary}>
                                        Stand out & attract the right people.
                                    </HeadingTitle2>
                                </Stack>
                                <SimpleText
                                    fontSize={"1.4375rem"}
                                    fontFamily={"Quicksand"}
                                    fontWeight={"500"}
                                    lineHeight={"1.2em"}
                                >
                                    We aim to make your business stand out with our branding and design
                                    services. Whether you’re an established brand, a startup, or an individual,
                                    your success is our priority.
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
                <Goals2 />
                <Process2 />
                <Project2 />
            </>
        </GeneralPageLayout>
    )
}

export default BrandingAndDesign