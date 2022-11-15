
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
        <Flex direction={{base:"column", md:"column", lg:"row"}} mt="80px" p={{base:"6", md:"12", lg:"32"}} align={{base:"center", md:"center", lg:"space-between"}} gap={{base:"100px", md:"100px", lg:"200px"}}>
            <Box mt={{base:"4", md:"8", lg:"16"}} >
                <Text fontSize={{base:"xl", md:"3xl", lg:"3xl"}} textAlign={{base:"center", md:"center", lg:"left"}} fontWeight="semibold"> Hi, I am</Text>
                <Text fontSize={{base:"3xl", md:"4xl", lg:"5xl"}} textAlign={{base:"center", md:"center", lg:"left"}} fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text"><Typewriter options={{
                  strings: ["Prashant Verma", "A Full Stack Web Developer"],
                  autoStart: true,
                  loop: true,
                    }}/></Text>
                <Text fontWeight="semibold" textAlign={{base:"center", md:"center", lg:"left"}}>A <span>Full Stack Web Developer</span> specializing in MERN stack with the drive of creating impactful front-end as well as back-end projects.</Text>
                <Flex gap={{base:"50px", md:"250px", lg:"50px"}} justify={{base:"center", md:"center", lg:"left"}}>
                <a href="resources/Prashant_Verma_Resume.pdf" download><Button  mt="20px" bg={purpleColor} _hover={{bg:"cyan", color:"black"}} color="white"> Resume <DownloadIcon ml="10px"/></Button></a>
                
                <Link to="Contact" smooth={true} duration={1000}><Button  mt="20px" bg={purpleColor} gap="10px" _hover={{bg:"cyan", color:"black"}} color="white">Contacts <IoIosContact /></Button></Link>
                </Flex >
                <Flex mt="20px" gap={{base:"50px", md:"20px", lg:"20px"}} color={cyanColor} justify={{base:"center", md:"center", lg:"left"}}>
                <a href="https://github.com/Prashant3216" target="_blank"><IconButton  icon={<FaGithub />} _hover={{color:"purple"}} size="lg"> </IconButton></a>
                <a href="https://www.linkedin.com/in/prashant-verma-75bbba15b/" target="_blank"><IconButton icon={<FaLinkedin/>} _hover={{color:"purple"}} size="lg" border="none"></IconButton></a>
                
               <IconButton  onClick={() => window.location = 'mailto:pv3216@gmail.com'} icon={<HiMail/>} _hover={{color:"purple" }} size="lg" > </IconButton>
                </Flex>
            </Box>
            <Circle  bg={isLight? "black":"secondary"} w={{base:"200px", md:"250px", lg:"300px"}} h={{base:"200px", md:"250px", lg:"300px"}}>
                <Image w="100%" position="relative" top="15%" right="15%" borderRadius="50%" src="resources/profile_pic_comp.jpg"/>
            </Circle>
        </Flex>
    </Stack>
  )
}

export default Header