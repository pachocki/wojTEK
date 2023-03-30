import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript , SiNextdotjs } from "react-icons/si";

const Technoloogies = () => {
  return (
    <div className="flex justify-between items-center border-t border-r border-white/20 px-5 w-full  text-2xl py-2  xl:text-xl md:text-sm sm:border-r-[0px] ">
    <span className="md:hidden 3xl:text-3xl">Technologies I have used:</span>
    <div className="flex flex-col gap-2 items-center text-sm">
      {" "}
      <FaHtml5 className="text-xl text-orange-500 3xl:text-3xl" /> <span className="3xl:text-2xl md:text-sm xs:text-[0.6rem] ">HTML</span>
    </div>
    <div className="flex flex-col gap-2 items-center text-sm">
      {" "}
      <FaCss3Alt className=" 3xl:text-3xl text-xl text-sky-500" /> <span className=" 3xl:text-2xl md:text-sm xs:text-[0.6rem]">CSS</span>
    </div>
    <div className="flex flex-col gap-2 items-center text-sm">
      {" "}
      <SiJavascript className=" 3xl:text-3xl text-xl text-yellow-400" /> <span className=" 3xl:text-2xl md:text-sm xs:text-[0.6rem]">JS</span>
    </div>
    <div className="flex flex-col gap-2 items-center text-sm">
      {" "}
      <FaReact className=" 3xl:text-3xl text-xl text-sky-700" /> <span className=" 3xl:text-2xl md:text-sm xs:text-[0.6rem]">REACT</span>
    </div>
    <div className="flex flex-col gap-2 items-center text-sm">
      {" "}
      <FaNodeJs className=" 3xl:text-3xl text-xl text-green-500" /> <span className=" 3xl:text-2xl md:text-sm xs:text-[0.6rem]">NODE JS</span>
    </div>
    <div className="flex flex-col gap-2 items-center text-sm">
      {" "}
      <SiNextdotjs className=" 3xl:text-3xl text-xl " /> <span className=" 3xl:text-2xl md:text-sm xs:text-[0.6rem]">NEXT JS</span>
    </div>
  </div>
  )
}

export default Technoloogies