import React from "react";
import Marquee from "../components/Marquee";
const Footer = () => {
  return (
    <div className="h-screen relative flex justify-center ">
      <div className="flex flex-col justify-center items-center pb-40 gap-0 leading-[1]">
        <h3 className="text-[12rem] font-bold  xl:text-[10rem] lg:text-[7rem] md:text-8xl sm:text-6xl xs:text-5xl ">
          LET'S WORK
        </h3>
        <h3 className="text-[12rem] font-bold  xl:text-[10rem] lg:text-[7rem] md:text-8xl sm:text-6xl xs:text-5xl ">TOGETHER<span className="text-orange-600 ">!</span></h3>
      </div>
      <div className=" absolute w-full  bottom-40 flex justify-between px-10 text-2xl lg:text-xl  sm:text-lg xs:text-[1rem] sm:px-3">
        <div className="flex flex-col 3xl:text-3xl ">
          <span>Start Project Now:</span>
          <a href="mailto:pachocki175@gmail.com" className="hover:text-orange-600 cursor-none">Pachocki175@gmail.com</a>
          <a href="tel:+4796849596" className="hover:text-orange-600 cursor-none">+4796849596</a>
        </div>
        <div className="flex flex-col 3xl:text-3xl ">
          <span> Github</span>
          <span>Instagram</span>
          <span>Linkedin</span>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Marquee background="bg-orange-600">
          <div className="flex gap-4 3xl:text-3xl text-2xl uppercase sm:text-lg">
            <span>✦ Availbe for work ✦</span>
            <span>✦ UX/UI DESIGN ✦</span>
            <span>✦ WEBDEVELOPMENT ✦</span>
            <span>✦ Availbe for work! ✦</span>
            <span>✦ UX/UI DESIGN ✦</span>
            <span>✦ WEBDEVELOPMENT ✦</span>
            <span>✦ Availbe for work! ✦</span>
            <span>✦ UX/UI DESIGN ✦</span>
            <span>✦ WEBDEVELOPMENT ✦</span>
            <span>✦ Availbe for work! ✦</span>
            <span>✦ UX/UI DESIGN ✦</span>
            <span>✦ WEBDEVELOPMENT ✦</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Footer;
