import React from "react";
import { Flex, useMediaQuery, Image, Box, Text } from "@chakra-ui/react";
import {cyanColor, purpleColor} from "../theme/theme.config"



function About() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <Box id="About" w="100%" bg="primary" >
      
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      pl={isNotSmallerScreen ? "32" : "2"}
      pr={isNotSmallerScreen ? "32" : "2"}
      pt="50px"
      pb="16px"
      gap={isNotSmallerScreen ? "250px" : "100px"}
      data-aos="fade-right"
    >
      <Image
        w={isNotSmallerScreen ? "40%" : "90%"}
        src="https://gautamgohil.com/assets/aboutme.d047a9cb.svg"
      />
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Text textDecoration="underline" textDecorationColor={purpleColor} color={cyanColor} fontWeight="semibold" fontSize="2xl">
          About me
        </Text>
       
        <Text mt="30px" color="white"  fontWeight="semibold"> 
          A tech enthusiast with the ability to learn and adapt in a rapidly
          paced environment, comes with 1000+hr of bootcamp structure learning
          JavaScript, Node.Js, React.Js, Express.Js, MongoDB, HTML5, and CSS3.
        </Text>
       
      </Flex>
    </Flex>
    </Box>
    
  );
}

export default About;
