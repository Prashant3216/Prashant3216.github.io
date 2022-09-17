import  {Box, Flex, IconButton,Text, useMediaQuery} from '@chakra-ui/react'
import React from 'react'
import {MdEmail} from "react-icons/md"
import {FaMobile, FaGithub, FaLinkedin,FaTwitter} from "react-icons/fa"
import {cyanColor, purpleColor} from "../theme/theme.config"




function Footer() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");


  return (
    <Box bg="base" id="Contact" w="100%">
   <Box  pt="50px"
      pb="16px" color="white" pl={isNotSmallerScreen ? "32" : "2"}
      pr={isNotSmallerScreen ? "32" : "2"}>
   <Text mb="30px" textDecoration="underline" textDecorationColor={purpleColor} color={cyanColor} fontWeight="semibold" fontSize="2xl" textAlign="center" >Contact Me</Text>
   <Flex gap={isNotSmallerScreen ? "50px" : "20px"} justifyContent="flex-end" direction={isNotSmallerScreen ? "row" : "Column"}>
   <Flex gap="10px" alignItems="center">
   <IconButton  onClick={() => window.location = 'mailto:pv3216@gmail.com'} icon={<MdEmail/>} _hover={{color:"purple" }} color={cyanColor} size="sm" > </IconButton>
   <Text>pv3216@gmail.com</Text>
   </Flex>
   <Flex gap="20px" alignItems="center" >
   <IconButton icon={<FaMobile/>} _hover={{color:"purple"}} color={cyanColor} size="sm"></IconButton>
   <Text>+91-9318480717</Text>
   </Flex>
   <Flex gap="20px" alignItems="center" >
   <a href="https://github.com/Prashant3216" target="_blank"><IconButton  icon={<FaGithub />} _hover={{color:"purple"}} size="sm" color={cyanColor}> </IconButton></a>
   <Text>Github</Text>
   </Flex>
   <Flex gap="20px" alignItems="center" >
   <a href="https://www.linkedin.com/in/prashant-verma-75bbba15b/" target="_blank"><IconButton icon={<FaLinkedin/>} _hover={{color:"purple"}} color={cyanColor} size="sm" border="none"></IconButton></a>
   <Text>LinkedIn </Text>
   </Flex>
   <Flex gap="20px" alignItems="center" >
   <a href="https://twitter.com/home" target="_blank"><IconButton icon={<FaTwitter/>} _hover={{color:"purple"}} color={cyanColor} size="sm"></IconButton></a>
   <Text>Twitter </Text>
   </Flex>
   </Flex>
   <Text fontWeight="light" fontSize="xs">Design & Build by Prashant Verma @ 2022</Text>
   </Box>
   </Box>
  )
}

export default Footer