import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...anynameProps }) => {
  return (
    <VStack
      backgroundColor={anynameProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...anynameProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
