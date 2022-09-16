import { Box, SimpleGrid, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { skillShadow } from '../theme/theme.config'

function Skills() {
  return (
    <Box>
   <Box pt="50px"
   pb="16px" textAlign="center" id="Skills"> 
    <Text mb="30px" textDecoration="underline" color="cyan" fontWeight="semibold" fontSize="2xl">Skills</Text>
    <SimpleGrid columns={[2, 3, 4, 5]} gap="100px">
        <Box w="150px" h="220px"  oxShadow={skillShadow} textAlign="center"  border="2px solid cyan" borderRadius="5px">

            <Image  w="100%" src="data:image/png;base64,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"/>
            <Text mt="15px" fontWeight="semibold">JavaScript</Text>
        </Box>
        <Box w="150px" h="220px"  boxShadow={skillShadow} textAlign="center"  border="2px solid cyan" borderRadius="5px">
            <Image  w="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKBqIxg7HdS5UpTxNZisrs87zqH4tOsNmGg&usqp=CAU"/>
            <Text mt="15px" fontWeight="semibold">React.JS</Text>
        </Box>
        <Box w="150px" h="220px"  boxShadow={skillShadow} textAlign="center"  border="2px solid cyan" borderRadius="5px">
            <Image  w="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ed_bpKBKSlNR4Lb5jWZKF4bWUf58zn0qxA&usqp=CAU"/>
            <Text mt="15px" fontWeight="semibold">Node.JS</Text>
        </Box>
        <Box w="150px" h="220px"  boxShadow={skillShadow} textAlign="center"  border="2px solid cyan" borderRadius="5px">
            <Image  w="100%" src="data:image/png;base64,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"/>
            <Text mt="15px" fontWeight="semibold">MongoDB</Text>
        </Box>
        <Box w="150px" h="220px"  boxShadow={skillShadow} textAlign="center"  border="2px solid cyan" borderRadius="5px">
            <Image  w="100%" src="data:image/png;base64,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"/>
            <Text mt="15px" fontWeight="semibold">Express.JS</Text>
        </Box>
        <Box w="150px" h="220px"  boxShadow={skillShadow} textAlign="center"  border="2px solid cyan" borderRadius="5px">
            <Image  w="100%" src="data:image/png;base64,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"/>
            <Text mt="15px" fontWeight="semibold">Redux.JS</Text>
        </Box>
        <Box w="150px" h="220px"  boxShadow={skillShadow} textAlign="center"  border="2px solid cyan" borderRadius="5px">
            <Image  w="100%" src="data:image/png;base64,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"/>
            <Text mt="15px" fontWeight="semibold">HTML</Text>
        </Box>
        <Box w="150px" h="220px"  boxShadow={skillShadow} textAlign="center"  border="2px solid cyan" borderRadius="5px">
            <Image  w="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1qNuTMK3MHFEVjbeK3T8I7_gXKCqRaab8Q&usqp=CAU"/>
            <Text mt="15px" fontWeight="semibold">CSS</Text>
        </Box>
        <Box w="150px" h="220px"  boxShadow={skillShadow} textAlign="center"  border="2px solid cyan" borderRadius="5px">
            <Image  w="100%" src="data:image/jpeg;base64,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"/>
            <Text mt="15px" fontWeight="semibold">Chakra UI</Text>
        </Box>
        <Box w="150px" h="220px"  boxShadow={skillShadow} textAlign="center"  border="2px solid cyan" borderRadius="5px">
            <Image  w="100%" src="data:image/png;base64,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"/>
            <Text mt="15px" fontWeight="semibold">GIT</Text>
        </Box>
    </SimpleGrid>
   </Box>
   </Box>
  )
}

export default Skills