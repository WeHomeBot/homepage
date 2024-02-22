import React from "react";
import { HashLink as Link } from "react-router-hash-link";
function NavBar() {
  return (
    <>
      <header className="w-full h-[80px]  pr-[100px] pl-[130px] flex justify-between items-center bg-primary z-10">
        <img
          src="https://cdn.wehomebot.com/resource/upload/6dqo2g2w/Square12@1x.png"
          alt="ARAL-KIDS Logo"
          className="h-[80px]"
        />
        <div className=" w-[600px] flex justify-around items-center font-poppins font-semibold">
          <Link to={"#Home"} smooth>
            Home
          </Link>
          <Link to={"#About"} smooth>
            About
          </Link>
          <Link to={"#Feature"} smooth>
            Feature
          </Link>
          <Link to={"#Contact"} smooth>
            Contact
          </Link>
        </div>
      </header>
    </>
  );
}

export default NavBar;
