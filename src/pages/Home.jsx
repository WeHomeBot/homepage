import React, {useRef} from "react";
import { useMediaQuery } from 'react-responsive';

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 680px)'
  });

  const formRef = useRef(null);
  const inviteRef = useRef(null);
  const inviteCode = useRef(localStorage.getItem("inviteCode"));

  function handleClick(e) {
    if(inviteRef.current.value){
      e.preventDefault();
      formRef.current.action = `https://home.bearbobo.com/login`;
      formRef.current.method = 'GET';
      formRef.current.submit();
      localStorage.setItem("inviteCode", inviteRef.current.value);
      inviteCode.current = inviteRef.current.value;
    }
  }

  function handleClick2() {
    location.href = `https://home.bearbobo.com/login?inviteCode=${inviteCode.current}`;
  }

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
            <div className=" mobile:flex mobile:justify-around mobile:items-center mt-5">
              {
                !inviteCode.current?<form ref={formRef}>
                <input name="inviteCode" type="text" placeholder="输入邀请码" required ref={inviteRef} className="rounded-lg p-2 mr-2"></input>
                <button className="bg-fourth rounded-[17px] mt-[5px] px-[10px] py-[5px] mr-5" onClick={handleClick}>
                  <h1 className="text-slate-200 font-bold tablet:text-[19px] text-[15px] tracking-tight px-[20px]">
                    试用
                  </h1>
                </button>
                </form>:<button className="bg-fourth rounded-[17px] mt-[5px] px-[10px] py-[5px] mr-5" onClick={handleClick2}>
                  <h1 className="text-slate-200 font-bold tablet:text-[19px] text-[15px] tracking-tight px-[20px]">
                    进入
                  </h1>
                </button>
              }
              {/* <button className="bg-slate-50 rounded-[17px] mt-[15px] px-[10px] py-[5px] tablet:h-[60px] tablet::w-[200px] outline outline-1 outline-fifth">
                <h1 className="text-fifth font-bold tablet:text-[20px] text-[15px] px-[20px] tracking-tight">
                  Try it for Free
                </h1>
              </button> */}
            </div>
            <p className="tablet:text-[22px] text-[15px] font-medium mt-[20px] tablet:text-left text-center">
              波波熊 🐻，为家庭打造的 AI 教育工具
            </p>
          </div>
          <div
            className={isDesktopOrLaptop?"bg-secondary rounded-l-[50px] flex justify-center items-center pt-[50px] pb-[20px] pl-[50px] pr-[25px] z-0":"bg-secondary rounded-l-[50px] flex justify-center items-center mt-[50px] pt-[50px] pb-[20px] pl-[50px] pr-[25px] z-0"}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img
              src="https://cdn.wehomebot.com/resource/upload/Cq6DS74a/sc01-5ssmpocxnzi.png"
              alt=""
              className="tablet:w-[611px] tablet:h-[434px] w-[300px] h-[200px]"
              style={{height:"auto"}}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
