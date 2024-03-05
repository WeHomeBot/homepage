import React from "react";
import { HashLink as Link } from "react-router-hash-link";
function NavBar() {
  return (
    <>
      <header className="w-full h-[80px]  pr-[100px] pl-[130px] flex justify-between items-center bg-primary z-10">
        <img
          src="https://cdn.wehomebot.com/resource/upload/Z92O78Mg/logo-y2hmv00243.jpg"
          alt="WeHome Logo"
          className="h-[80px]"
        />
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
            试用申请
          </Link>
        </div>
      </header>
    </>
  );
}

export default NavBar;
