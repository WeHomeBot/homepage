import React from "react";
import { useState } from 'react';

const endpoint = 'https://z56b6bk7xx.us.aircode.run/index';
function Contact() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [applyReason, setApplyReason] = useState('');
  const [sumbitingState, setSumbitingState] = useState('');

  const onSubmit = async (event) =>  {
    event.preventDefault();
    // console.log(userName, email, applyReason);
    setSumbitingState('submitting');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userName, email, reason: applyReason}),
      });
      if(res.ok) {
        setSumbitingState('success');
      }
      
      console.log(res);
    } catch (error) {
      setSumbitingState('error');
    }
  }

  return (
    <section
      id="Contact"
      className="font-poppins w-full h-screen bg-third rounded-t-[50px] pt-[50px] px-[100px] flex flex-col justify-center items-start "
    >
      <div>
        <div className=" w-[1000px] flex flex-col flex-wrap gap-10">
          <div className=" pr-[50px]">
            <h1 className="font-bold text-[40px]">试用申请</h1>
            <h2 className="font-normal text-[25px]">
              准确填写你的信息，便于我们发送邀请。
            </h2>
          </div>
          <div>
            {sumbitingState==='error' && <div className="bg-red-500 text-center leading-7 w-[500px]">申请发送失败</div>}
            {sumbitingState==='success' && <div className="bg-green-500 text-center leading-7 w-[500px]">申请发送成功，请等待我们的通知</div>}
            <form onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-2 w-[500px]">
              <div>
                <h1 className="font-medium text-[20px]">
                  Your Name <span className="text-sixth">*</span>
                </h1>
                <input
                  type="text"
                  className="w-[220px] h-[40px] rounded-[5px] outline-none px-[10px] py-[5px]"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div>
                <h1 className="font-medium text-[20px]">
                  Email <span className="text-sixth">*</span>
                </h1>
                <input
                  type="email"
                  className="w-[220px] h-[40px] rounded-[5px] outline-none px-[10px] py-[5px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-[5px]">
              <h1 className="font-medium text-[20px]">申请理由 <span className="text-sixth">*</span></h1>
              <textarea
                name="Message"
                cols="62"
                rows="8"
                className="rounded-[5px] outline-none px-[10px] py-[5px] mt-[5px]"
                value={applyReason}
                onChange={(e) => setApplyReason(e.target.value)}
                required
              ></textarea>
            </div>
            <button 
              className={sumbitingState!=='submitting'?"bg-fifth w-[120px] h-[50px] rounded-lg font-bold text-[20px] text-slate-200 mt-[10px]":"bg-gray-500 w-[120px] h-[50px] rounded-lg font-bold text-[20px] text-slate-200 mt-[10px] cursor-not-allowed"}
              disabled={sumbitingState==='submitting'}
            >
              Submit
            </button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Contact;
