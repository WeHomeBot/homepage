import React from "react";
import Home from "./Home";
import About from "./About";
import Feature from "./Feature";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <NavBar />
      <main className="bg-primary tracking-tighter">
        <Home />
        <About />
        <Feature />
        {/* {isDesktopOrLaptop && <Contact />} */}
        <Footer />
      </main>
    </>
  );
}
export default Root;