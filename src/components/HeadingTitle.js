import { Heading } from "@chakra-ui/react";

export const HeadingTitle = ({ children, color, headingStyle }) => {
  return (
    <Heading
    style={{ fontFamily: "Quicksand, sans-serif" }}
      lineHeight={"1em"}
      fontSize={"4.5em"}
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
      fontSize={"3.4375rem"}
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
        fontSize={"2rem"}
        fontWeight={"700"}
        color={color}
        headingStyle={headingStyle}
      >
        {children}
      </Heading>
    );
  };