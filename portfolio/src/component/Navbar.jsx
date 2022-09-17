import { Box, Flex,Heading, IconButton, useColorMode} from "@chakra-ui/react";
import {FaSun, FaMoon} from "react-icons/fa"
import {Link, animateScroll as Scroll} from "react-scroll"



export default function Navbar() {
  const {colorMode, toggleColorMode}=useColorMode()
  const isLight= colorMode ==="light"
  return (
    <Box position="fixed" zIndex={10} top="0" left="0" bg="base" w="100%">
      
      <Flex  p="10px 8rem" justifyContent="space-between"> 
        <Flex>
        <Heading fontWeight="semibold" onClick={()=>{Scroll.scrollToTop()}}>
          <span style={{color:"cyan"}}>Prashant</span>
          <span style={{color:"purple", paddingLeft:"5px"}}>Verma</span>
        </Heading>
        </Flex>
        <Flex  gap="50px" color="cyan" fontWeight="semibold" alignItems="center" fontSize="lg">
            <Link smooth={true} duration={1000} to="Header" spy={true} offset={-50}>Home</Link>
            <Link  smooth={true} duration={1000} to="About"  spy={true} offset={-50}>About</Link>
            <Link  smooth={true} duration={1000} to="Skills"  spy={true} offset={-50}>Skills</Link>
            <Link  smooth={true} duration={1000} to="Projects"  spy={true} offset={-50}>Projects</Link>
            <Link  smooth={true} duration={1000} to="Contact"  spy={true} offset={-50}>Contact</Link>
            <IconButton  ml={10} icon={isLight?<FaMoon/>:<FaSun/>} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
        </Flex>
      </Box>
  );
}



