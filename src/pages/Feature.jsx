import React from "react";
import FeatureCard from "../components/FeatureCard";
import { useMediaQuery } from 'react-responsive';

function Feature() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 680px)'
  });

  return (
    <>
      <section
        id="Feature"
        className={isDesktopOrLaptop?"w-full h-screen bg-primary pt-[20px] flex flex-col items-center font-poppins":"w-full bg-primary p-[20px] flex flex-col items-center font-poppins"}
      >
        <h1 className="text-[60px] font-bold text-eight">WeHome 的独特功能</h1>
        <div className="w-[500px] tablet:w-[1000px] flex flex-wrap items-center justify-center">
          <FeatureCard />
        </div>
      </section>
    </>
  );
}

export default Feature;
