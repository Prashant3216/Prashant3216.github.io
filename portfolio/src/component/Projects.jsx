import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, SimpleGrid, Text,Image, useMediaQuery, Flex, Button, IconButton } from '@chakra-ui/react'
import React from 'react'
import {BiLinkExternal} from "react-icons/bi"
import { FaGithub } from 'react-icons/fa';
import { cyanColor,purpleColor } from '../theme/theme.config';


function Projects() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    
    <Box  pt="50px" w="100%" bgColor="primary"
    pb="16px" id="Projects" pl={isNotSmallerScreen ? "32" : "2"}
    pr={isNotSmallerScreen ? "32" : "2"}>
    <Text textDecoration="underline" textDecorationColor={purpleColor} color={cyanColor} fontWeight="semibold" fontSize="2xl" textAlign="center">Projects</Text>
        <SimpleGrid pt="50px" columns={[1,1,2,2]} gap={isNotSmallerScreen ? "130px" : "50px"}>
        <Box  borderRadius="5px" p="20px" bg="base" data-aos="zoom-in">
                <Box border="2px solid" borderColor={cyanColor}  borderRadius="5px">
                    <Image src="/resources/Tmetric_gif.gif"/>
                </Box>
                
                <Text mt="20px" mb="20px"fontSize="2xl" textAlign="center" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Replica of Tmetric.com</Text>
                <Text  color="white"  fontSize="md">Tmetric is a simple time tracking app for Windows, Mac, Linux which helps you to control your time, increase productivity, monitor your team performance.</Text>
                <Text  color="white" mt="20px" mb="20px" fontSize="md"><span style={{fontWeight:"bold" ,color:"#00ACC1"}}>TechStack: </span>
                React.Js | Node.Js | MongoDB | Express.Js | TypeScript | Chakra UI | Heroku | Netlify | JavaScript | HTML5 | CSS3</Text>
                <Text  color="white"  fontSize="md">A collaborative project, implemented in 5 days with 5 members.</Text>
                <Flex justifyContent="space-between" p="20px">
                <a href='https://github.com/Nnishks/waiting-knife-3384' target="_blank"><Button bg="purple" color="white" _hover={{bg:"cyan", color:"black"}}>Source Code <ExternalLinkIcon ml="10px"/></Button></a>
                <a href="https://realtmetric.netlify.app/" target="_blank"><Button bg="purple" color="white" _hover={{bg:"cyan", color:"black"}}>Live <ExternalLinkIcon ml="10px"/></Button></a>
                </Flex>
            </Box>
        <Box  borderRadius="5px" p="20px" bg="base" data-aos="zoom-in">
                <Box border="2px solid" borderColor={cyanColor} borderRadius="5px">
                    <Image src="/resources/PharmEasy.gif"/>
                </Box>
                
                <Text mt="20px" mb="20px"fontSize="2xl" textAlign="center" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Replica of PharmEasy.com</Text>
                <Text  color="white"  fontSize="md">PharmEasy is one of India's most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products at a FLAT discounts.</Text>
                <Text  color="white" mt="20px" mb="20px" fontSize="md"><span style={{fontWeight:"bold" ,color:"#00ACC1"}}>TechStack: </span>
                JavaScript | HTML5 | CSS3 | REST API | Netlify</Text>
                <Text  color="white"  fontSize="md">A collaborative project, implemented in 5 days with 6 members.</Text>
                <Flex justifyContent="space-between" p="20px">
                  <a href='https://github.com/Prashant3216/PharmEasy.com' target="_blank"><Button bg="purple" color="white" _hover={{bg:"cyan", color:"black"}}>Source Code <ExternalLinkIcon ml="10px"/></Button></a>
                  <a href="https://lustrous-salamander-5df9ee.netlify.app/index.html" target="_blank"><Button bg="purple" color="white" _hover={{bg:"cyan", color:"black"}}>Live <ExternalLinkIcon ml="10px"/></Button></a>
                </Flex>
            </Box>
        {/* <Box  borderRadius="5px" p="20px" bg="base" data-aos="zoom-in">
                <Box border="2px solid" borderColor={cyanColor}  borderRadius="5px">
                    <Image src="/resources/OLX.gif"/>
                </Box>
                
                <Text mt="20px" mb="20px"fontSize="2xl" textAlign="center" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Replica of OLX.com</Text>
                <Text  color="white"  fontSize="md">The OLX marketplace is a platform for buying and selling services and goods such as electronics, fashion items, furniture, household goods, cars and bikes.</Text>
                <Text  color="white" mt="20px" mb="20px" fontSize="md"><span style={{fontWeight:"bold" ,color:"#00ACC1"}}>TechStack: </span>
                React.JS | Node.JS | JSON-Server | React Router | REST API | JavaScript | HTML5 | CSS3 | Chakra UI | React Icons</Text>

                <Text  color="white"  fontSize="md">A indivisual project, implemented in 5 days.</Text>
                <Flex justifyContent="space-between" p="20px" >
                <a href='https://github.com/Prashant3216/accidental-pull-8164' target="_blank"><Button bg="purple" color="white" _hover={{bg:"cyan", color:"black"}}>Source Code <ExternalLinkIcon ml="10px"/></Button></a>
                <a href="https://project-olx.vercel.app/" target="_blank"><Button bg="purple" color="white" _hover={{bg:"cyan", color:"black"}}>Live <ExternalLinkIcon ml="10px"/></Button></a>
                </Flex>
          </Box> */}
            <Box  borderRadius="5px" p="20px" bg="base" data-aos="zoom-in">
                <Box border="2px solid" borderColor={cyanColor}  borderRadius="5px">
                    <Image src="/resources/mytheresa.gif"/>
                </Box>
                
                <Text mt="20px" mb="20px"fontSize="2xl" textAlign="center" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Replica of Mytheresa.com</Text>
                <Text  color="white"  fontSize="md">Mytheresa is German e-commerce luxury fashion online shopping destination for children's, men's, and women's luxury fashion and lifestyle design.</Text>
                <Text  color="white" mt="20px" mb="20px" fontSize="md"><span style={{fontWeight:"bold" ,color:"#00ACC1"}}>TechStack: </span>
                JavaScript | HTML5 | CSS3</Text>
                <Text  color="white"  fontSize="md">A collaborative project, implemented in 5 days with 3 members.</Text>
                <Flex justifyContent="space-between" p="20px">
                <a href='https://github.com/Prashant3216/mytheresa.com' target="_blank"><Button bg="purple" color="white" _hover={{bg:"cyan", color:"black"}}>Source Code <ExternalLinkIcon ml="10px"/></Button></a>
                <a href="https://cheery-sorbet-56415b.netlify.app/" target="_blank"><Button bg="purple" color="white" _hover={{bg:"cyan", color:"black"}}>Live <ExternalLinkIcon ml="10px"/></Button></a>
                </Flex>
            </Box>
        </SimpleGrid>
        
    </Box>
    
  )
}

export default Projects