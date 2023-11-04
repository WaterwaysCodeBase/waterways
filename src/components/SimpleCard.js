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
        >
          <CardBody>
            <HStack alignSelf={"center"} justifySelf={"center"}>
              <Icon
                fontSize={"3em"}
                as={cardContent?.icon}
                color={textPrimary}
              />
              <HeadingTitle4>{cardContent?.title}</HeadingTitle4>
            </HStack>
            <Stack mt="6" spacing="3" h={{ base: "", md: "auto" }}>
              <SimpleText textAlign={"justify"}>{cardContent?.text}</SimpleText>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default SimpleCard;
