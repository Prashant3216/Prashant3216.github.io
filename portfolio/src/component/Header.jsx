
import React from 'react'
import { Link as MailSender} from 'react-router-dom'
import { Box, Button, Circle, Flex, Image, Spacer, Stack, Text, useColorMode, useMediaQuery,IconButton } from '@chakra-ui/react'
import {DownloadIcon} from "@chakra-ui/icons"
import {FaGithub, FaLinkedin,} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import {IoIosContact} from "react-icons/io"
import {Link} from "react-scroll"
import {cyanColor, purpleColor} from "../theme/theme.config"
import Typewriter from 'typewriter-effect';




function Header() {
    const {colorMode, toggleColorMode}=useColorMode()
    const isLight=colorMode==="dark"

    const [isNotSmallerScreen] = useMediaQuery("(min-width:830px)");

  return (
    <Stack  id="Header" w="100%">
        <Flex direction={isNotSmallerScreen? "row":"column"} mt="80px" p={isNotSmallerScreen? "32":"2"} justifyContent="space-between" gap={isNotSmallerScreen? "200px":"100px"}>
            <Box mt={isNotSmallerScreen? "0":"16"} >
                <Text fontSize={isNotSmallerScreen? "3xl":"xl"} fontWeight="semibold"> Hi, I am</Text>
                <Text fontSize={isNotSmallerScreen? "5xl":"3xl"} fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text"><Typewriter options={{
                  strings: ["Prashant Verma", "A Full Stack Web Developer"],
                  autoStart: true,
                  loop: true,
                    }}/></Text>
                <Text fontWeight="semibold" >A <span>Full Stack Web Developer</span> specializing in MERN stack with the drive of creating impactful front-end as well as back-end projects.</Text>
                <Flex gap="50px" >
                <a href="resources/Prashant_Verma_Resume.pdf" download><Button  mt="20px" bg={purpleColor} _hover={{bg:"cyan", color:"black"}} color="white"> Resume <DownloadIcon ml="10px"/></Button></a>
                
                <Link to="Contact" smooth={true} duration={1000}><Button  mt="20px" bg={purpleColor} gap="10px" _hover={{bg:"cyan", color:"black"}} color="white">Contacts <IoIosContact /></Button></Link>
                </Flex >
                <Flex mt="20px" gap="20px" color={cyanColor}>
                <a href="https://github.com/Prashant3216" target="_blank"><IconButton  icon={<FaGithub />} _hover={{color:"purple"}} size="lg"> </IconButton></a>
                <a href="https://www.linkedin.com/in/prashant-verma-75bbba15b/" target="_blank"><IconButton icon={<FaLinkedin/>} _hover={{color:"purple"}} size="lg" border="none"></IconButton></a>
                
               <IconButton  onClick={() => window.location = 'mailto:pv3216@gmail.com'} icon={<HiMail/>} _hover={{color:"purple" }} size="lg" > </IconButton>
                </Flex>
            </Box>
            <Circle  bg={isLight? "black":"secondary"} w={isNotSmallerScreen? "300px":"200px"} h={isNotSmallerScreen? "300px":"200px"} ml={isNotSmallerScreen? "0":"16"}  >
                <Image w="100%" position="relative" top="15%" right="15%" borderRadius="50%" src="resources/profile_pic_comp.jpg"/>
            </Circle>
        </Flex>
    </Stack>
  )
}

export default Header