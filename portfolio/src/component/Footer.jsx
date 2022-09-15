import  {Box, Flex, IconButton,Text,Container} from '@chakra-ui/react'
import React from 'react'
import {MdEmail} from "react-icons/md"
import {FaMobile, FaGithub, FaLinkedin,FaTwitter} from "react-icons/fa"



function Footer() {
  return (
   <Container bgColor="base" maxW={1600} >
   <Text mb="30px" textDecoration="underline" color="cyan" fontWeight="semibold" fontSize="2xl" textAlign="center">Contact Me</Text>
   <Flex gap="50px" justifyContent="flex-end">
   <Flex gap="10px" alignItems="center">
   <IconButton icon={<MdEmail/>} _hover={{color:"purple"}} color="cyan" size="sm"></IconButton>
   <Text>pv3216@gmail.com</Text>
   </Flex>
   <Flex gap="20px" alignItems="center" >
   <IconButton icon={<FaMobile/>} _hover={{color:"purple"}} color="cyan" size="sm"></IconButton>
   <Text>+91-9318480717</Text>
   </Flex>
   <Flex gap="20px" alignItems="center" >
   <IconButton icon={<FaGithub/>} _hover={{color:"purple"}} color="cyan" size="sm"></IconButton>
   <Text>Github</Text>
   </Flex>
   <Flex gap="20px" alignItems="center" >
   <IconButton icon={<FaLinkedin/>} _hover={{color:"purple"}} color="cyan" size="sm"></IconButton>
   <Text>LinkedIn </Text>
   </Flex>
   <Flex gap="20px" alignItems="center" >
   <IconButton icon={<FaTwitter/>} _hover={{color:"purple"}} color="cyan" size="sm"></IconButton>
   <Text>LinkedIn </Text>
   </Flex>
   </Flex>
   <Text>Design & Build by Prashant Verma @ 2022</Text>
   </Container>
  )
}

export default Footer