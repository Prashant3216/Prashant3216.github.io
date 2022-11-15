import { Box, Button, Drawer,Text, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex,Heading, IconButton, Input, useColorMode, useDisclosure, useMediaQuery} from "@chakra-ui/react";
import { useRef } from "react";
import {FaSun, FaMoon} from "react-icons/fa"
import {DownloadIcon} from "@chakra-ui/icons"

import {GiHamburgerMenu} from "react-icons/gi"
import {cyanColor, purpleColor} from "../theme/theme.config"



import {Link, animateScroll as Scroll} from "react-scroll"


export default function Navbar() {

  const btnRef = useRef() 
  const {colorMode, toggleColorMode}=useColorMode()
  const [isNotSmallerScreen] = useMediaQuery("(min-width:950px)");

  const { isOpen, onOpen, onClose } = useDisclosure()

  const isLight= colorMode ==="dark"
  return (
    <Box position="fixed" zIndex={10} top="0" left="0" bg="base" w="100%">
      
      <Flex  pt="10px" pb="10px" pl={{base:"6", md:"12", lg:"32"}} pr={{base:"6", md:"12", lg:"32"}}  justifyContent="space-between"> 
        <Flex>
        <Heading fontWeight="semibold" onClick={()=>{Scroll.scrollToTop()}} >
          <Flex>
          <Text _hover={{color:"cyan", cursor:"pointer"}} color={cyanColor}>Prashant</Text>
          <Text _hover={{color:"#8E24AA", cursor:"pointer"}} pl="5px" color={purpleColor}>Verma</Text>
          </Flex>
        </Heading>
        </Flex>
        <Flex>
{isNotSmallerScreen? 
        <Flex  gap="50px" color={cyanColor} fontWeight="semibold" alignItems="center" fontSize="lg">
            <Link smooth={true} duration={1000}  to="Header" spy={true} offset={-50}><Text  _hover={{cursor:"pointer", color:"cyan"}}>Home</Text></Link>
            <Link  smooth={true} duration={1000} to="About"  spy={true} offset={-50}><Text  _hover={{cursor:"pointer", color:"cyan"}}>About</Text></Link>
            <Link  smooth={true} duration={1000} to="Skills"  spy={true} offset={-50}><Text  _hover={{cursor:"pointer", color:"cyan"}}>Skills</Text></Link>
            <Link  smooth={true} duration={1000} to="Projects"  spy={true} offset={-50}><Text  _hover={{cursor:"pointer", color:"cyan"}}>Projects</Text></Link>
            <Link  smooth={true} duration={1000} to="Contact"  spy={true} offset={-50}><Text  _hover={{cursor:"pointer", color:"cyan"}}>Contact</Text></Link>
            <a href="resources/Prashant_Verma_Resume.pdf" download><Text _hover={{cursor:"pointer", color:"cyan"}} > Resume </Text></a>
        </Flex> : 
        <>
        
            <IconButton icon={<GiHamburgerMenu/>}  onClick={onOpen} color={purpleColor}></IconButton>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
        <Flex  gap="10px" color={cyanColor} fontWeight="semibold" p="20px" fontSize="lg" direction="column" justifyContent="flex-start">
            <Link smooth={true}  onClick={onClose} duration={1000} to="Header" spy={true} offset={-50}><Text  _hover={{cursor:"pointer", color:"cyan"}}>Home</Text></Link>
            <hr />
            <Link  smooth={true} onClick={onClose} duration={1000} to="About"  spy={true} offset={-50}><Text  _hover={{cursor:"pointer", color:"cyan"}}>About</Text></Link>
            <hr />
            <Link  smooth={true} onClick={onClose} duration={1000} to="Skills"  spy={true} offset={-50}><Text  _hover={{cursor:"pointer", color:"cyan"}}>Skills</Text></Link>
            <hr />
            <Link  smooth={true} onClick={onClose} duration={1000} to="Projects"  spy={true} offset={-50}><Text  _hover={{cursor:"pointer", color:"cyan"}}>Projects</Text></Link>
            <hr />
            <Link  smooth={true} onClick={onClose} duration={1000} to="Contact"  spy={true} offset={-50}><Text  _hover={{cursor:"pointer", color:"cyan"}}>Contact</Text></Link>
            <hr />
            <a href="https://drive.google.com/file/d/1Ab_UQBpF6AJwXdrMTw6MB6Cmz3uwsJbp/view?usp=sharing" target="_blank"><Text _hover={{cursor:"pointer", color:"cyan"}} > Resume </Text></a>
        </Flex>
              </DrawerContent>
            </Drawer>
            </>
          }
           <IconButton  ml={10} icon={isLight?<FaMoon/>:<FaSun/>} isRound='true' onClick={toggleColorMode}></IconButton>
           </Flex>
        </Flex>
       
      </Box>
  );
}



