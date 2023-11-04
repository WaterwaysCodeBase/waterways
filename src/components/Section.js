import { Box } from "@chakra-ui/react";
import React from "react";

const Section = ({ children, bg, bgImage, id, sectionStyle }) => {
  const sectionStyles = {
    background: bg, // Background color
    backgroundImage: bgImage ? `url(${bgImage})` : "none", // Background image
    ...sectionStyle, // Additional custom styles
  };

  return (
    <Box w={"full"} style={sectionStyles} id={id}>
      {children}
    </Box>
  );
};

export default Section;
