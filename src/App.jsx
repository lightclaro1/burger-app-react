import React, {useEffect} from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import Content from './assets/components/Content'
import Foods from './assets/components/Foods'
import FooterCategory from './assets/components/FooterCategory'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease',
      delay: 500,
    });
  }, []);

  return (
          <>
          <Navbar/>
          <Hero/>
          <Content/>
          <Foods/>
          <FooterCategory/>
          
          
          </>
  )
}

export default App