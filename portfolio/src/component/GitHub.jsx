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
    pb="16px" id="Projects" pl={{base:"6", md:"12", lg:"32"}}
    pr={{base:"6", md:"12", lg:"32"}}>
    <Text textDecoration="underline" textDecorationColor={purpleColor} color={cyanColor} fontWeight="semibold" fontSize="3xl" textAlign="center" mb="20px">Github Stats</Text>
      <Flex justify={{base:"center", md:"center",lg:"space-between"}} flexWrap="wrap" gap={{base:"20px", md:"20px", lg:"0"}}>
      <Image src="https://github-readme-stats.vercel.app/api?username=prashant3216&theme=cobalt&show_icons=true&hide_border=true&count_private=true&bg_color=1e293b" data-aos="zoom-in"/>
      <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=prashant3216&theme=cobalt&show_icons=true&hide_border=true&bg_color=1e293b" data-aos="zoom-in"  />
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