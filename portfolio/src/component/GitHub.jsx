import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from "react-github-calendar"
import { cyanColor, purpleColor } from '../theme/theme.config';


function GitHub() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    let currentTime=new Date()
    let month = currentTime.getMonth() + 1
    let day = currentTime.getDate()
    let year = currentTime.getFullYear()

  return (
    <Box  pt="50px" w="100%"
    pb="16px" id="Projects" pl={isNotSmallerScreen ? "32" : "2"}
    pr={isNotSmallerScreen ? "32" : "2"}>
    <Text textDecoration="underline" textDecorationColor={purpleColor} color={cyanColor} fontWeight="semibold" fontSize="2xl" textAlign="center">Days I code</Text>

      <Box pt="50px" className="github_Calender" data-aos="zoom-in">
      <GitHubCalendar
          style={{ margin: "auto"}}
          username="Prashant3216"
          year={new Date().getFullYear()}
        />
      </Box>
    </Box>
  )
}

export default GitHub