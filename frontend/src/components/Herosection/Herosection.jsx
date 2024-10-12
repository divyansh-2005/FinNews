import React from "react";

function Herosection() {
  return (
    <div className="flex flex-col justify-start items-start w-full h-[90vh] pt-[10vh] bg-gradient-to-r from-[#2C0727] to-[#110823] px-12 box-border relative z-10">
      <h1 className="font-readex text-[64px] text-white mt-2">
        <span className="text-white">INDIA’S FIRST</span>
        <br />
        <span className="text-white">SMART </span>
        <span className="text-[#FE00E6] font-bold">News FIN-APP</span>
      </h1>

      <p className="font-readex font-semibold text-[36px] text-white mt-[6vh]">
        “Where Intelligence Meets Finance”
      </p>

      <button className="w-[320px] h-[46px] p-2 bg-gradient-to-r from-[#EF01DC] to-[#77048E] rounded-full border-none text-center font-readex font-normal text-[20px] text-white cursor-pointer mt-[14vh] ml-[17vh]">
        WWW.FinNews.IN
      </button>

      <div className="flex flex-col items-center mt-auto text-white relative top-[-60px] left-1/2 transform -translate-x-1/2">
        <p className="m-0 text-base">Scroll down for more</p>
        <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-transparent border-t-white mt-2 animate-bounce"></div>
      </div>
    </div>
  );
}

export default Herosection;
