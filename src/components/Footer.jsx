import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { socialLinks } from "../data/data";
import { useMediaQuery } from 'react-responsive';

function Footer() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 680px)'
  });

  return (
    <>
      <section className="bg-third w-full px-[60px] font-poppins">
        <div className="border-y-2 border-slate-900 flex flex-col items-center">
        {isDesktopOrLaptop && <div className="flex  justify-between items-center px-[100px] pb-[20px]">
            <div className=" w-[600px] pt-[20px] flex justify-around items-center font-medium text-[20px]">
              <Link to={"#Home"} smooth>
                首页
              </Link>
              <Link to={"#About"} smooth>
                关于
              </Link>
              <Link to={"#Feature"} smooth>
                特性
              </Link>
            </div>
          </div>}
          {/* <div className="flex items-center justify-around w-[200px] pb-[20px]">
            {socialLinks.map((item) => (
              <span key={item.id} className="">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img src={item.image} alt="" className="w-[45px] h-[45px]" />
                </a>
              </span>
            ))}
          </div> */}
        </div>
        <div className=" h-[100px] items-center">
          <h1 className="text-[16px] font-normal pt-[20px] text-center">
            {" "}
            {isDesktopOrLaptop && '© Copyright 2024 , All Rights Reserved ｜ '}<a href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备2024060726号-1</a>
          </h1>
          <h1 className="text-[16px] font-normal pt-[10px] text-center">
            <a href="terms.html" target="_blank" rel="noreferrer">用户协议</a>
            <a href="privacy.html" target="_blank" rel="noreferrer">｜ 隐私政策</a>
            <a href="https://bearbobo.feishu.cn/wiki/JbKYwSsNwiLlrjkmmw5cTwlAnjX" target="_blank" rel="noreferrer">｜ 用户社区</a>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Footer;
