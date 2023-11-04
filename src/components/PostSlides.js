"use client";

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { SimpleText } from "./TextStyles";
import { HeadingTitle3, HeadingTitle4 } from "./HeadingTitle";

export default function PostSlideWithImage() {
  return (
    <Center py={6}>
      <Box
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"1.25em"}
        overflow={"hidden"}
      >
        <Box
          h={"300px"}
          bg={"gray.100"}
          pos={"relative"}
          bgImage={
            "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
          }
          width={"full"}
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          {/* <Image src={""} fill alt="Example" /> */}
        </Box>
        <Stack px={"1em"} py={"2em"}>
          <HeadingTitle4
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
            headingStyle={{
              textAlign: "center",
            }}
          >
            Tailored Solutions
          </HeadingTitle4>
          <SimpleText color={"gray.500"}>
            We customize solutions to meet your unique needs, ensuring we
            address customer’s challenges precisely.
          </SimpleText>
        </Stack>
        {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}
      </Box>
    </Center>
  );
}
