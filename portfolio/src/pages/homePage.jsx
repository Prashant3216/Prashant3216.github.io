
import { VStack } from "@chakra-ui/react"
import About from "../component/About"
import Footer from "../component/Footer"
import Header from "../component/Header"
import Navbar from "../component/Navbar"
import Projects from "../component/Projects"
import Skills from "../component/Skills"
import Tools from "../component/Tools"

export default function Home(){
    return (
        <VStack spacing={0}>
        <Navbar style={{position:"fixed", top:"0"}}/>
        <Header/>
        <About/>
        <Skills/>
        <Tools/>
        <Projects/>
        <Footer/>
        </VStack>
    )
}