import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: eliearo123@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Elie0",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/elie-aro-98512a220/",
  },

];

const Header = () => {
  const handleClick = (anchor) => (e) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
        
          <nav>
                   <HStack spacing={8}>
                   {socials.map(({ icon, url }) => ( 
                <a 
                  key={url} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                > 
                  <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
                </a> 
              ))} 
                    </HStack>
          </nav>
          
       
          <nav>
            <HStack spacing={8}>
              { <a href='#contactme' onClick={handleClick("projects")} > Contact Me </a> }
              { <a href='#projects' onClick={handleClick("contactme")} > Projects </a> }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
