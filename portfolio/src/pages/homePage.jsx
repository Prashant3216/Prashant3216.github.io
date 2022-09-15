
import { VStack } from "@chakra-ui/react"
import Header from "../component/Header"
import Navbar from "../component/Navbar"

export default function Home(){
    return (
        <VStack>
        <Navbar style={{position:"fixed"}}/>
        <Header/>
        </VStack>
    )
}