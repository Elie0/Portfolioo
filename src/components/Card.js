import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  

  return(
      
    <VStack>       
       <Image objectFit='cover' src={imageSrc} alt='Dan Abramov' />
           <Text backgroundSize='contain' backgroundColor='Menu' color='black' padding='20px' >
            <Heading size='md' margin='auto' >
            {title} 
            </Heading>
           {description}
            <br></br>
            <Text fontFamily='sans-serif' textColor='CaptionText' >  <b> see more </b> <FontAwesomeIcon icon={faArrowRight} size="1x" /> </Text>                        
          </Text>  
    </VStack>
 )
      
  
 
};

export default Card;
