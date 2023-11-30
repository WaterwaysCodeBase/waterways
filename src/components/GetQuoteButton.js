import { Button, Image, Link } from "@chakra-ui/react";
import {
  bgDark,
  bgLight,
  bgPrimary,
  bgTertairy,
  primaryColor,
  textLight,
  textPrimary,
} from "./Colors";

export const GetQuoteButton = () => {
  return (
    <Button
      alignSelf={"center"}
      bg={primaryColor}
      justifySelf={"center"}
      py={"1.5em"}
      px={"2em"}
      color={bgLight}
      _hover={{
        bg: bgTertairy,
        color: textPrimary,
      }}
    >
      Get Quote
    </Button>
  );
};

export const CustumButton = ({ label, color, bg }) => {
  return (
    <Button
      alignSelf={'auto'}
      bg={bg}
      justifySelf={"center"}
      py={"1.5em"}
      px={"2em"}
      color={color}
      _hover={{
        bg: bgTertairy,
        color: textPrimary,
      }}
    >
      {label}
    </Button>
  );
};

export const CustumButton2 = ({ label, color, bg }) => {
  return (
    <Button
      alignSelf={"center"}
      bg={bg}
      border={'1px'}
      borderColor={"#00000"}
      justifySelf={"center"}
      py={"1.5em"}
      px={"2em"}
      color={color}
      _hover={{
        bg: bgTertairy,
        color: textPrimary,
      }}
    >
      {label}
    </Button>
  );
};

export const FreeConsultationButton = ({ label, color, bg }) => {
  return (
    <Link href="" className="image-link">
      <Image
        src="/images/sec-button.png"
        alt="Image 1"
        className="normal-image"
      />
      <Image
        src="/images/button-hover.png"
        alt="Image 2"
        className="hover-image"
      />
    </Link>
  );
};
