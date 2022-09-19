import { useEffect } from "react"
import Home from "./pages/homePage"
import Aos from "aos"
import "aos/dist/aos.css"

export function App() {

  useEffect(()=>{
    Aos.init({
      duration: 1500
    })
  },[]) 
  return (
      <Home />
  );
}

