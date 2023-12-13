import { Text } from "@chakra-ui/react";

export const SimpleText = ({ children, textAlign, color }) => {
  return (
    <Text
      fontSize={"14pt"}
      fontFamily={"Quicksand"}
      fontWeight={"500"}
  
      textAlign={textAlign}
      color={color}
    >
      {children}
    </Text>
  );
};

export const SimpleText2 = ({ children, textAlign, color }) => {
  return (
    <Text
      fontSize={"14pt"}
      fontFamily={"Quicksand"}
      fontWeight={"normal"}
  
      textAlign={textAlign}
      color={color}
    >
      {children}
    </Text>
  );
};
