import { Text } from "@chakra-ui/react";

export const SimpleText = ({ children, textAlign, color }) => {
  return (
    <Text
      fontSize={"1.4375rem"}
      fontFamily={"Quicksand"}
      fontWeight={"500"}
      lineHeight={"1.5em"}
      textAlign={textAlign}
      color={color}
    >
      {children}
    </Text>
  );
};
