import React from "react";
import { useMediaQuery } from 'react-responsive';
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 680px)'
  });

  return (
    <>
      <section
        id="Home"
        className={isDesktopOrLaptop?"bg-primary font-poppins w-full h-screen pt-[40px]":"bg-primary font-poppins w-full pt-[40px]"}
      >
        <div className="tablet:flex tablet:items-start tablet:justify-between">
          <div className=" tablet:w-[580px] tablet:ml-[130px] tablet:items-start flex flex-col items-center">
            <h1 className="tablet:text-[55px] tablet:text-left leading-[1.20] font-black text-eight text-[40px]">
              用 <span className="text-sixth">AI</span> 点亮
            </h1>
            <h1 className="tablet:text-[55px] tablet:text-left leading-[1.20] font-black text-eight text-[40px]">
              家庭学习的<span className="text-fourth">星空</span>
            </h1>
            {isDesktopOrLaptop && <div className=" mobile:flex mobile:justify-around mobile:items-center">
              <button className="bg-fourth rounded-[17px] mt-[15px] px-[10px] py-[5px] tablet:h-[60px] tablet::w-[200px] mr-5">
                <Link to={"#Contact"} smooth><h1 className="text-slate-200 font-bold tablet:text-[19px] text-[15px] tracking-tight px-[20px]">
                  申请试用
                </h1></Link>
              </button>
              {/* <button className="bg-slate-50 rounded-[17px] mt-[15px] px-[10px] py-[5px] tablet:h-[60px] tablet::w-[200px] outline outline-1 outline-fifth">
                <h1 className="text-fifth font-bold tablet:text-[20px] text-[15px] px-[20px] tracking-tight">
                  Try it for Free
                </h1>
              </button> */}
            </div>}
            <p className="tablet:text-[22px] text-[15px] font-medium mt-[20px] tablet:text-left text-center">
              Wehome，为家庭打造的 AI 教育工具
            </p>
          </div>
          <div
            className={isDesktopOrLaptop?"bg-secondary rounded-l-[50px] flex justify-center items-center pt-[50px] pb-[20px] pl-[50px] pr-[25px] z-0":"bg-secondary rounded-l-[50px] flex justify-center items-center mt-[50px] pt-[50px] pb-[20px] pl-[50px] pr-[25px] z-0"}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img
              src="/images/UI_Screenshot.png"
              alt=""
              className="tablet:w-[611px] tablet:h-[434px] w-[300px] h-[200px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
