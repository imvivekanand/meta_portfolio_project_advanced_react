import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div>
        <VStack spacing={8} backgroundColor="white" color="black" borderRadius="5%" cursor="pointer">
          <Image src={imageSrc} borderRadius="5%"/>
          <VStack padding="5" alignItems="start">
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <Heading size="xs">See more <FontAwesomeIcon icon={faArrowRight} size="1x"/></Heading>         
      </VStack>
      </VStack>
    </div>
  );
};

export default Card;