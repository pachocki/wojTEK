import React, { useEffect } from "react";
import { gsap } from "gsap/all";

import Square from "../assets/colorfull_square.webp";
import Crystal from "../assets/colorfull_pigula.webp";
import Ring from "../assets/colorfull_ring.webp";

const Intro = () => {
  useEffect(() => {
    let tl = gsap.timeline({ delay: 3 });
    tl.to(
      "#intro__background",
      {
        yPercent: -120,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.2"
    );
  }, []);

  return (
    <div
      className="bg-black/80 backdrop-blur-xl   fixed top-0 left-0 max-h-screen h-screen w-full z-[101] text-white  !overflow-y-hidden"
      id="intro__background"
    >
      <div className="relative z-50 w-full mx-auto h-full bg-zinc-900/80 backdrop-filter backdrop-blur-xl overflow-hidden">
        <div className="flex items-center justify-between text-white pt-4 relative border-b mx-10 pb-5 text-xl  sm:mx-0 sm:px-2 sm:text-sm">
          <div className="text-2xl font-bold 3xl:text-4xl sm:text-lg">
            <span>wojTEK</span>
          </div>
          <div>
            <img
              src={Ring}
              className="w-[100px] absolute left-60 lg:left-40 md:hidden"
              alt="ring"
            />
          </div>
          <div className="flex  gap-4 sm:gap-2 3xl:text-4xl ">
            <span className="border p-2 rounded-full 3xl:py-2 3xl:px-5 sm:p-1 xs:text-[0.8rem]">
              Webdesign
            </span>
            <span className="border p-2 rounded-full 3xl:py-2 3xl:px-5 sm:p-1  xs:text-[0.8rem]">
              Frontend
            </span>
            <span className="border p-2 rounded-full 3xl:py-2 3xl:px-5 sm:p-1  xs:text-[0.8rem]">
              Backend
            </span>
          </div>
        </div>
        <div className="flex max-w-[1200px] 3xl:max-w-[2000px] mx-auto h-[80vh] py-36 px-20 justify-center gap-34 items-center relative  2xl:px-48 xl:py-36 md:px-5 lg:gap-8  sm:flex-col sm:pt-20 sm:pb-0 sm:text-center ">
          <img
            src={Square}
            alt="square"
            className="w-[50px] laptop:w-[30px] tablet:w-[200px] absolute  right-40 top-20 z-50 lg:top-10 md:right-10 sm:hidden"
          />
          <img
            src={Square}
            alt="square"
            className="w-[20px]  absolute  right-60 bottom-20 z-50 3xl:right-5 3xl:w-[100px] xl:right-12 sm:hidden"
          />
          <img
            src={Square}
            alt="logo"
            className="w-[20px]  absolute  left-20 bottom-20 z-50  sm:hidden"
          />
          <img
            src={Square}
            alt="square"
            className="w-[50px]  absolute  left-60 top-32 z-50 3xl:w-[120px] 3xl:left-8 xl:top-20 xl:left-12 sm:hidden"
          />
          <img
            src={Square}
            alt="square"
            className="w-[50px]  absolute  left-120 top-10 z-50 3xl:w-[100px] sm:hidden"
          />
          <img
            src={Square}
            alt="square"
            className="w-[50px]  absolute  left-120 bottom-0 z-50 sm:hidden"
          />
          <img
            src={Square}
            alt="square"
            className="w-[60px]  absolute  right-[20%] bottom-0 3xl:w-[160px] z-50 sm:hidden"
          />
          <img
            src={Crystal}
            alt="Crystal"
            className="w-[50px] absolute lg:w-[20px] top-120 z-50 left-0  md:hidden"
          />
          <img
            src={Crystal}
            alt="Crystal"
            className="w-[50px]  absolute  right-40 top-60 z-50 3xl:w-[120px] xl:right-5  xl:top-48 lg:top-24 md:hidden"
          />
          <div className="flex w-1/2 z-50  gap-4 flex-col text-white 3xl:text-[9rem] leading-tiny text-8xl  font-bold lg:text-7xl sm:text-6xl sm:w-full  sm:pt-20 sm:font-regular">
            <span className="font-outline-2 font-outline-white text-transparent sm:text-white sm:!font-outline-0">
              Create
            </span>
            <span>a Better</span>
            <span>Web</span>
          </div>
          <div className="relative w-1/2 sm:w-full mx-auto">
            <div className="w-[400px] h-[500px] rounded-full bg-green-600/20 rotate-[120deg] blur-2xl absolute bottom-5 3xl:hidden  lg:h-[300px]  xs:h-[400px]"></div>
            <div className="w-[500px] h-[500px] rounded-full bg-sky-500/20 blur-2xl rotate-[40deg] absolute 3xl:hidden  lg:h-[300px] xs:h-[400px]"></div>
            <div className="w-[400px] h-[600px] rounded-full bg-pink-500/20 blur-2xl rotate-[-60deg] absolute left-20 3xl:hidden md:h-[300px] xs:left-0  xs:h-[400px]"></div>
            <img
              src={Square}
              alt="logo"
              className="max-w-full  relative z-50 mx-auto sm:w-full"
            />
          </div>
        </div>
        <div>
          <img
            src={Crystal}
            className="w-[200px] absolute  left-80 xl:left-28  sm:hidden 2xl:bottom-[-120px]"
            alt="Crystal"
          />

          <p className="w-auto absolute bottom-0 right-0 text-5xl font-bold pr-10 sm:hidden  ">
            Portfolio{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
