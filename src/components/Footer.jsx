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
      <section className="bg-third w-full px-[100px] font-poppins">
        <div className="border-y-2 border-slate-900 flex flex-col items-center">
        {isDesktopOrLaptop && <div className="flex  justify-between items-center px-[100px] pb-[20px]">
            <div className=" w-[600px] pt-[20px] flex justify-around items-center font-medium text-[20px]">
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
        <div className=" h-[80px] flex items-center justify-center">
          <h1 className="text-[20px] font-normal pt-[20px]">
            {" "}
            © Copyright 2024 , All Rights Reserved
          </h1>
        </div>
      </section>
    </>
  );
}

export default Footer;
