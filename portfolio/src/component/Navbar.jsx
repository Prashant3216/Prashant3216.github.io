import { Box, Flex,VStack,Spacer,Heading, IconButton, useColorMode, HStack} from "@chakra-ui/react";
import {FaSun, FaMoon} from "react-icons/fa"


export default function Navbar() {
  const {colorMode, toggleColorMode}=useColorMode()
  const isLight= colorMode ==="light"
  return (
      <Flex  bg="base"> 
      <Flex  p="10px 8rem" gap="380px"> 
        <Flex>
        <Heading fontWeight="semibold">
          <span style={{color:"cyan"}}>Prashant</span>
          <span style={{color:"purple", paddingLeft:"5px"}}>Verma</span>
        </Heading>
        </Flex>
        <Flex  gap="50px" color="cyan" fontWeight="semibold" alignItems="center" fontSize="lg">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
            <IconButton  ml={10} icon={isLight?<FaMoon/>:<FaSun/>} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
        </Flex>
      </Flex>
  );
}



