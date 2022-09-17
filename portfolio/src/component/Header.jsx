
import React from 'react'
import { Link as MailSender} from 'react-router-dom'
import { Box, Button, Circle, Flex, Image, Spacer, Stack, Text, useColorMode, useMediaQuery,IconButton } from '@chakra-ui/react'
import {DownloadIcon} from "@chakra-ui/icons"
import {FaGithub, FaLinkedin,} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import {IoIosContact} from "react-icons/io"
import {Link} from "react-scroll"



function Header() {
    const {colorMode, toggleColorMode}=useColorMode()
    const isLight=colorMode==="light"

    const [isNotSmallerScreen]=useMediaQuery("(min-width:650px)")
  return (
    <Stack  id="Header" w="100%">
        <Flex direction={isNotSmallerScreen? "row":"column"} p={isNotSmallerScreen? "32":"2"} justifyContent="space-between" gap={isNotSmallerScreen? "200px":"100px"}>
            <Box mt={isNotSmallerScreen? "0":"16"} >
                <Text fontSize="3xl" fontWeight="semibold"> Hi, I am</Text>
                <Text fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Prashant Verma</Text>
                <Text >A <span>Full-Stack Web Developer</span> specializing in MERN stack with the drive of creating impactful front-end as well as back-end projects.</Text>
                <Flex gap="50px">
                <a href="resources/Prashant_Verma_Resume.pdf" download><Button  mt="20px" bg="purple" _hover={{bg:"cyan", color:"black"}}> Resume <DownloadIcon ml="10px"/></Button></a>
                
                <Link to="Contact" smooth={true} duration={1000}><Button  mt="20px" bg="purple" gap="10px" _hover={{bg:"cyan", color:"black"}}>Contacts <IoIosContact /></Button></Link>
                </Flex >
                <Flex mt="20px" gap="20px" color="cyan">
                <a href="https://github.com/Prashant3216" target="_blank"><IconButton  icon={<FaGithub />} _hover={{color:"purple"}} size="lg"> </IconButton></a>
                <a href="https://www.linkedin.com/in/prashant-verma-75bbba15b/" target="_blank"><IconButton icon={<FaLinkedin/>} _hover={{color:"purple"}} color="cyan" size="lg" border="none"></IconButton></a>
                
               <IconButton  onClick={() => window.location = 'mailto:pv3216@gmail.com'} icon={<HiMail/>} _hover={{color:"purple" }} size="lg" > </IconButton>
                </Flex>
            </Box>
            <Circle bg="secondary" w="300px" h="300px" ml={isNotSmallerScreen? "0":"16"}  >
                <Image  w="100%" position="relative" top="15%" right="15%" borderRadius="50%" src="https://avatars.githubusercontent.com/u/87535606?s=400&u=3cc4b812b699c581475a3154d359b8b90ea7bd9d&v=4"/>
            </Circle>
        </Flex>
    </Stack>
  )
}

export default Header