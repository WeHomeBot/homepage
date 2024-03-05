import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";

function NavBar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 680px)'
  });

  return (
    <>
      <header className={`w-full h-[80px]  ${isDesktopOrLaptop && 'pr-[100px] pl-[130px]'} flex justify-between items-center bg-primary z-10`}>
        <img
          src="https://cdn.wehomebot.com/resource/upload/Z92O78Mg/logo-y2hmv00243.jpg"
          alt="WeHome Logo"
          className={`h-[80px]  ${!isDesktopOrLaptop && 'm-auto'}`}
        />
        {isDesktopOrLaptop &&
        <div className=" w-[600px] flex justify-around items-center font-poppins font-semibold">
          <Link to={"#Home"} smooth>
            首页
          </Link>
          <Link to={"#About"} smooth>
            关于
          </Link>
          <Link to={"#Feature"} smooth>
            特性
          </Link>
          <Link target="_blank" rel="noopener noreferrer" to={"https://dwxgds3r4b2.feishu.cn/share/base/form/shrcnOyr5CIS0PyE7bGzvbidNBg"} smooth>
            申请试用
          </Link>
        </div>}
      </header>
    </>
  );
}

export default NavBar;
