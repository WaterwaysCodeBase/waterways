import React from "react";
import { Box, Card, CardBody, HStack, Icon, Stack } from "@chakra-ui/react";
import { HeadingTitle4 } from "./HeadingTitle";
import { SimpleText } from "./TextStyles";
import { textPrimary } from "./Colors";

const SimpleCard = ({ icon, content }) => {
  return (
    <>
      {content.map((cardContent, index) => (
        <Card
          key={index}
          py={"1em"}
          w={"full"}
          boxShadow={"md"}
          _hover={{ boxShadow: "lg" }}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration={cardContent?.time}
        >
          <CardBody>
            <HStack alignSelf={"center"} justifySelf={"center"}>
              <Icon
                fontSize={"2em"}
                as={cardContent?.icon}
                color={textPrimary}
              />
              <HeadingTitle4>{cardContent?.title}</HeadingTitle4>
            </HStack>
            <Stack mt="6" spacing="3" h={{ base: "", md: "auto" }}>
              <SimpleText textAlign={"left"}>{cardContent?.text}</SimpleText>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default SimpleCard;
