import { Heading } from "@chakra-ui/react";

export const HeadingTitle = ({ children, color, headingStyle }) => {
  return (
    <Heading
      style={{ fontFamily: "Quicksand, sans-serif" }}
      lineHeight={"1em"}
      fontSize={{ base: "3em", md: "6em" }}
      fontWeight={"700"}
      color={color}
      headingStyle={headingStyle}
    >
      {children}
    </Heading>
  );
};
export const HeadingTitle2 = ({ children, color, headingStyle }) => {
  return (
    <Heading
      style={{ fontFamily: "Quicksand, sans-serif" }}
      lineHeight={"1em"}
      fontSize={{ base: "3.5em", md: "4.5em" }}
      fontWeight={"700"}
      color={color}
      headingStyle={headingStyle}
    >
      {children}
    </Heading>
  );
};
export const HeadingTitle3 = ({ children, color, headingStyle }) => {
  return (
    <Heading
      style={{ fontFamily: "Quicksand, sans-serif" }}
      lineHeight={"1em"}
      fontSize={"3rem"}
      fontWeight={"700"}
      color={color}
      headingStyle={headingStyle}
    >
      {children}
    </Heading>
  );
};

export const HeadingTitle4 = ({ children, color, headingStyle }) => {
  return (
    <Heading
      style={{ fontFamily: "Quicksand" }}
      lineHeight={"1em"}
      fontSize={"2rem"}
      fontWeight={"600"}
      color={color}
      headingStyle={headingStyle}
    >
      {children}
    </Heading>
  );
};