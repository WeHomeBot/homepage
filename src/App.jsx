import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 680px)'
  })
  
  return (
    <>
      <BrowserRouter>
        {isDesktopOrLaptop && <NavBar />}
        <main className="bg-primary tracking-tighter">
          <Home />
          <About />
          <Feature />
          {isDesktopOrLaptop && <Contact />}
          {isDesktopOrLaptop && <Footer />}
        </main>
      </BrowserRouter>
    </>
  );
}
export default App;
