import React from "react";
import { Flex, useMediaQuery, Image, Box, Text,List,ListItem, ListIcon } from "@chakra-ui/react";
import {cyanColor, purpleColor} from "../theme/theme.config"
import {MdCheckCircle} from "react-icons/md"



function About() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:830px)");
  return (
    <Box id="About" w="100%" bg="primary" >
      
    <Flex
      direction={{base:"column", md:"column", lg:"row"}}
      pl={{base:"6", md:"12", lg:"32"}}
      pr={{base:"6", md:"12", lg:"32"}}
      pt="50px"
      pb="16px"
      gap={{base:"100px", md:"150px", lg:"250px"}}
      data-aos="fade-right"
    >
    <Flex justify={{base:"center", md:"center", lg:"left"}}>
    <Image
        w={{base:"50%", md:"60%", lg:"90%"}} 
        src="https://gautamgohil.com/assets/aboutme.d047a9cb.svg"
      />
    </Flex>
      
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Text textDecoration="underline" textDecorationColor={purpleColor} color={cyanColor} fontWeight="semibold" fontSize="3xl">
          About me
        </Text>
        <List spacing={3} mt="30px" color="white"  fontWeight="semibold">
  <ListItem >
    <ListIcon as={MdCheckCircle} color={purpleColor} />
    A tech enthusiast with the ability to learn and adapt in a rapidly
    paced environment comes with 1000+hr of Bootcamp structure learning
    JavaScript, Node.Js, React.Js, Express.Js, MongoDB, HTML5, and CSS3

  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color={purpleColor} />
    Believe in solid work ethics and professionalism and possess 3.5 years of experience in consultancy and remote work cultures.
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color={purpleColor} />
    Demonstrated leadership and Adaptability skills in adverse events, love to solve problems.
  </ListItem>
  </List>
      </Flex>
    </Flex>
    </Box>
    
  );
}

export default About;
