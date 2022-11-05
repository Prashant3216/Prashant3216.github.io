import { Box, Text, useMediaQuery, Image, Flex} from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from "react-github-calendar"
import { cyanColor, purpleColor } from '../theme/theme.config';



function GitHub() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:830px)");
    let currentTime=new Date()
    let month = currentTime.getMonth() + 1
    let day = currentTime.getDate()
    let year = currentTime.getFullYear()

  return (
    <Box  pt="50px" w="100%"
    pb="16px" id="Projects" pl={isNotSmallerScreen ? "32" : "2"}
    pr={isNotSmallerScreen ? "32" : "2"}>
    <Text textDecoration="underline" textDecorationColor={purpleColor} color={cyanColor} fontWeight="semibold" fontSize="2xl" textAlign="center">Github Stats</Text>
      <Flex justify="space-between" align="center" flexWrap="wrap"><Image src="https://github-readme-stats.vercel.app/api?username=prashant3216&theme=cobalt&show_icons=true&hide_border=true&count_private=true&bg_color=1e293b" data-aos="zoom-in"/>
      <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=prashant3216&theme=cobalt&show_icons=true&hide_border=true&layout=compact&bg_color=1e293b" data-aos="zoom-in"  />
      </Flex>
      <Box pt="50px" className="github_Calender" data-aos="zoom-in">
      <GitHubCalendar
          style={{ margin: "auto"}}
          username="Prashant3216"
          
        />
      </Box>
    </Box>
  )
}

export default GitHub