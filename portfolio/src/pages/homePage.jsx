import { VStack } from "@chakra-ui/react";
import About from "../component/About";
import Footer from "../component/Footer";
import GitHub from "../component/GitHub";
import Header from "../component/Header";
// import Navbar from "../component/Navbar";
import WithSubnavigation from "../component/NewNavbar";
import Projects from "../component/Projects";
import Skills from "../component/Skills";
import Tools from "../component/Tools";


export default function Home() {
  return (
    <VStack spacing={0}>
      {/* <Navbar /> */}
      <WithSubnavigation/>
      <Header id="Header" />
      <About id="About" />
      <Skills id="Skills" /> 
      <Tools />
      <Projects id="Projects" />
      <GitHub/>
      <Footer id="Contact" />
    </VStack>
  );
}
