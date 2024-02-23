import React from "react";
import { useMediaQuery } from 'react-responsive';

function About() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 680px)'
  });

  return (
    <>
      <section
        id="About"
        className={isDesktopOrLaptop? "w-full h-screen bg-secondary rounded-[50px] pt-[30px] flex items-center justify-center gap-10": "w-full h-screen bg-secondary rounded-[50px] mt-[50px] flex flex-col items-center justify-center gap-10"}
      >
        <div
          className={isDesktopOrLaptop? "w-[450px] h-[450px] flex justify-center items-center rounded-[50px] bg-primary": "flex justify-center items-center rounded-[50px] bg-primary"}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img
            src="/images/About Image.png"
            alt="About Image"
            className="max-w-[500px] max-h-[425px] w-[80%]"
          />
        </div>
        <div className={isDesktopOrLaptop ? "font-poppins text-left max-w-[400px] max-h-[450px]" : "p-[20px] font-poppins text-left max-w-[400px] max-h-[450px]"}>
          <h1 className="uppercase font-medium text-[20px]">关于 Wehome</h1>
          <h1 className="font-bold text-[35px] leading-[1.2] break-before-auto mt-[20px]">
            通过目标，让孩子与家长探索、发现和共同成长
          </h1>
          <h1 className="font-medium text-[20px] text-slate-600 mt-[30px]">
            在这个快速变化的世界中，家庭教育和孩子的成长过程比以往任何时候都更加重要。Wehome 是一款创新的家庭智能助手，旨在为家长和孩子提供一个共同学习和成长的工具
          </h1>
          {isDesktopOrLaptop && <button className="w-[170px] h-[70px] bg-nine rounded-[17px] mt-[30px]">
            <h1 className="text-gray-900 text-[20px] font-bold tracking-tight px-[20px]">
              了解更多
            </h1>
          </button>}
        </div>
      </section>
    </>
  );
}

export default About;
