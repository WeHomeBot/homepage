import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 680px)'
  });
  
  return (
    <>
      <BrowserRouter>
        {isDesktopOrLaptop && <NavBar />}
        <main className="bg-primary tracking-tighter">
          {!isDesktopOrLaptop && <div className="bg-red-300 text-center leading-7">请在PC或平板设备上进行预约</div>}
          <Home />
          <About />
          <Feature />
          {isDesktopOrLaptop && <Contact />}
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}
export default App;
