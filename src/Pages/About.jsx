import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Profile from "../assets/profile1.png";
import { ScrollTrigger } from "gsap/all";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs,FaPython,FaGithub,FaFigma } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiMongodb , SiTailwindcss } from "react-icons/si";
import ProfileSm from "../assets/profilesmall.png"
import GsapLogo from "../assets/gsap.svg"
const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(textRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      onComplete: () => {
        tl.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
        });
      },
    });
  }, []);
  gsap.registerEase(ScrollTrigger);
  useEffect(() => {
    ScrollTrigger.refresh();
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-slide-container",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(".text-slide-one", {
      xPercent: -5,
    });
    tl.scrollTrigger.refresh();
    return () => {
      tl.pause(0).kill(true);
    };
  });
  return (
    <div className="w-[90%] h-full mx-auto  lg:w-[95%] md:w-[96%]">
      <div>
        <div className="flex justify-between items-center pb-20 pt-24 3xl:py-40 xl:pt-32 gap-5 sm:pb-0" ref={textRef}>
          <div className="w-[60%] lg:w-full md:w-full z-20">
            <div className=" relative lg:flex lg:gap-20 sm:gap-10">
              <h1 className="3xl:text-[9rem] text-[8rem] font-semibold xl:text-8xl md:text-7xl sm:text-5xl xs:text-4xl xl:pb-5">
                About Me
              </h1>
              <img src={ProfileSm} alt="profile" className="hidden lg:block lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] rounded-full" />
            </div>
            <p className="3xl:text-5xl text-3xl leading-relaxed xl:text-[1.4rem] lg:pr-10 lg:text-2xl sm:pr-0 sm:text-xl xs:text-lg">
              Hello there! My name is Wojciech Pachocki, a passionate Junior
              Full Stack Developer and UI/UX Designer who specializes in
              crafting modern, fully responsive websites for companies and
              startups. I take pride in creating sleek and intuitive designs
              that provide a seamless user experience across all devices.
              Outside of work, I enjoy spending time with friends, watching
              football, and traveling. I'm always seeking new opportunities to
              learn and grow both personally and professionally. With my
              experience and passion, I'm excited to create innovative and
              visually appealing websites and applications.
            </p>
          </div>
          <div className="pt-10 lg:hidden">
            <img
              src={Profile}
              alt="profile"
              className="rounded-xl "
            />
          </div>
        </div>
      </div>
      <div className=" text-slide-container grid gap-2 pt-20 pb-40   overflow-hidden uppercase font-bold lg:pt-20 sm:pb-12 ">
        <span className=" border-t pt-4 text-slide-one text-white text-[10rem] whitespace-nowrap leading-[120px] lg:text-8xl sm:text-6xl ">
          Skills • Skills • Skills • Skills • Skills • Skills • Skills • Skills • Skills
          • Skills • Skills • Skills • Skills • Skills •
        </span>
      </div>
      <div className="grid grid-cols-4 gap-20 lg:gap-10 sm:gap-8">
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <FaHtml5 className="text-8xl lg:text-6xl text-orange-500  sm:text-5xl xs:text-4xl" />{" "}
          <span className="text-3xl  lg:text-2xl sm:text-sm xs:text-[0.7rem]">HTML</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <FaCss3Alt className=" text-8xl lg:text-6xl  text-sky-500 sm:text-5xl xs:text-4xl" />{" "}
          <span className=" text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">CSS</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <SiJavascript className="text-8xl  lg:text-6xl   text-yellow-400 sm:text-5xl xs:text-4xl" />{" "}
          <span className="text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">JS</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <FaReact className=" text-8xl  lg:text-6xl text-sky-700 sm:text-5xl xs:text-4xl" />{" "}
          <span className="text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">REACT</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <FaNodeJs className="text-8xl   lg:text-6xl  text-green-500 sm:text-5xl xs:text-4xl" />{" "}
          <span className=" text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">NODE JS</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <SiNextdotjs className=" text-8xl lg:text-6xl  sm:text-5xl xs:text-4xl" />{" "}
          <span className="text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">NEXT JS</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <SiMongodb className=" text-8xl lg:text-6xl text-green-600 sm:text-5xl xs:text-4xl" />{" "}
          <span className="text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">MongoDb</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <FaPython className=" text-8xl lg:text-6xl text-yellow-600 sm:text-5xl xs:text-4xl" />{" "}
          <span className="text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">Python</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <FaFigma className=" text-8xl lg:text-6xl text-pink-600 sm:text-5xl xs:text-4xl" />{" "}
          <span className="text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">Figma</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <SiTailwindcss className=" text-8xl lg:text-6xl text-sky-600 sm:text-5xl xs:text-4xl" />{" "}
          <span className="text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">TailwindCss</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <FaGithub className=" text-8xl lg:text-6xl text-white sm:text-5xl xs:text-4xl" />{" "}
          <span className="text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">Github</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {" "}
          <img src={GsapLogo} alt="logo" className="w-[85px] lg:w-[50px] sm:w-[42px] xs:w-[32px]"/>
          <span className="text-3xl lg:text-2xl sm:text-sm xs:text-[0.7rem]">Gsap</span>
        </div>
      </div>
    </div>
  );
};

export default About;
