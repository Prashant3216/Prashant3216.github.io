import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex,Heading, IconButton, Input, useColorMode, useDisclosure, useMediaQuery} from "@chakra-ui/react";
import { useRef } from "react";
import {FaSun, FaMoon} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"


import {Link, animateScroll as Scroll} from "react-scroll"


export default function Navbar() {

  const btnRef = useRef() 
  const {colorMode, toggleColorMode}=useColorMode()
  const [isNotSmallerScreen]=useMediaQuery("(min-width:650px)")
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isLight= colorMode ==="light"
  return (
    <Box position="fixed" zIndex={10} top="0" left="0" bg="base" w="100%">
      
      <Flex  pt="10px" pb="10px" pl={isNotSmallerScreen? "32":"2"} pr={isNotSmallerScreen? "32":"2"} justifyContent="space-between"> 
        <Flex>
        <Heading fontWeight="semibold" onClick={()=>{Scroll.scrollToTop()}}>
          <span style={{color:"cyan"}}>Prashant</span>
          <span style={{color:"purple", paddingLeft:"5px"}}>Verma</span>
        </Heading>
        </Flex>
        <Flex>
{isNotSmallerScreen? 
        <Flex  gap="50px" color="cyan" fontWeight="semibold" alignItems="center" fontSize="lg">
            <Link smooth={true} duration={1000} to="Header" spy={true} offset={-50}>Home</Link>
            <Link  smooth={true} duration={1000} to="About"  spy={true} offset={-50}>About</Link>
            <Link  smooth={true} duration={1000} to="Skills"  spy={true} offset={-50}>Skills</Link>
            <Link  smooth={true} duration={1000} to="Projects"  spy={true} offset={-50}>Projects</Link>
            <Link  smooth={true} duration={1000} to="Contact"  spy={true} offset={-50}>Contact</Link>
        </Flex> : 
        <>
            <IconButton icon={<GiHamburgerMenu/>}  onClick={onOpen} color="purple"></IconButton>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
        <Flex  gap="10px" color="cyan" fontWeight="semibold" p="20px" fontSize="lg" direction="column" justifyContent="flex-start">
            <Link smooth={true}  onClick={onClose} duration={1000} to="Header" spy={true} offset={-50}>Home</Link>
            <hr />
            <Link  smooth={true} onClick={onClose} duration={1000} to="About"  spy={true} offset={-50}>About</Link>
            <hr />
            <Link  smooth={true} onClick={onClose} duration={1000} to="Skills"  spy={true} offset={-50}>Skills</Link>
            <hr />
            <Link  smooth={true} onClick={onClose} duration={1000} to="Projects"  spy={true} offset={-50}>Projects</Link>
            <hr />
            <Link  smooth={true} onClick={onClose} duration={1000} to="Contact"  spy={true} offset={-50}>Contact</Link>
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



