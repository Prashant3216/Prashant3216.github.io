
import { VStack } from "@chakra-ui/react"
import About from "../component/About"
import Header from "../component/Header"
import Navbar from "../component/Navbar"
import Skills from "../component/Skills"

export default function Home(){
    return (
        <VStack spacing={0}>
        <Navbar style={{position:"fixed", top:"0"}}/>
        <Header/>
        <About/>
        <Skills/>
        </VStack>
    )
}