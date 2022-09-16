
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
        <Navbar />
        <Header id="Header"/>
        <About id="About"/>
        <Skills id="Skills"/>
        <Tools />
        <Projects id="Projects"/>
        <Footer  id="Contact"/>
        </VStack>
    )
}