import { Box, SimpleGrid, Text,Image } from '@chakra-ui/react'
import React from 'react'

function Projects() {
  return (
    <Box bgColor="primary" border="1px solid red" pt="50px"
    pb="16px">
    <Text textDecoration="underline" color="cyan" fontWeight="semibold" fontSize="2xl" textAlign="center">Projects</Text>
        <SimpleGrid>
            <Box w="500px" h="650px">
                <Box>
                    <Image src="../resources/mytheresa.png"/>
                </Box>
                <Text color="cyan" fontWeight="semibold" fontSize="xl">Replica of Mytheresa.com</Text>
            </Box>
        </SimpleGrid>

    </Box>
  )
}

export default Projects