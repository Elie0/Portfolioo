import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Elie!";
const bio1 = "A Software Engineer";
const bio2 = " specialised in node.js, express, React.js and mongodb";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

  <nav>
    <VStack 
           px={16}
           py={4}
           justifyContent="space-between"
           alignItems="center"
    >
      <Avatar size='' src='https://media.licdn.com/dms/image/D4E35AQHdnQTVtBWX1Q/profile-framedphoto-shrink_400_400/0/1671494818804?e=1677524400&v=beta&t=6ym7lpKLtaEYosB4ft1qHS4vesz-UIK4lyT_girmddA' />
      <h1> {greeting}</h1>
      <Heading size='md'>
             {bio1} 
             {bio2}
      </Heading>
           
    </VStack>
  </nav>
  
  </FullScreenSection>
);

export default LandingSection;
