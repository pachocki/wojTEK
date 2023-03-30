import React, { useEffect } from "react";
import Kod from "../assets/colorfull_line.webp";
import world from "../assets/world2.webp";
import mountains from "../assets/mountains.webp";

//import Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Shapes from "./Shapes";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useEffect(() => {
     ScrollTrigger.refresh();
    let tl = gsap.timeline();

    tl
      .from(".move__one", { yPercent: 10, duration: 0.8 }, 0)
      .from(".move__two", { yPercent: 10, duration: 0.8 }, 0)
      .from(".move__three", { xPercent: -10, duration: 0.8 }, 0);

    let scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero__container",
        start: "bottom 99%",
        end: "bottom top",
        scrub: 1,
      },
    });

    scrollTimeline
      .to(".move__one", { yPercent: -15, duration: 0.8 }, 0)
      .to(".move__two", { yPercent: -30, duration: 0.7 }, 0)
      .to(".move__three", { xPercent: -45, duration: 0.9 }, 0);
       scrollTimeline.scrollTrigger.refresh();
    return () => {
      tl.pause(0).kill(true);
    };
  }, []);
  return (
    <div className="pt-24  h-screen text-white hero__container  mx-auto ">
      <div className="w-[98%] mx-auto sm:w-full sm:px-2">
        <div className="h-[63vh] bg-gradient-hero overflow-hidden relative rounded-xl 3xl:h-[77vh] md:h-[67vh] sm:h-[73vh] xs:h-[74vh]">
          <Shapes />
        </div>
        <div className="flex justify-between bg-zinc-900/90 mt-2 gap-0  border border-gray-100 rounded-xl pb-1 px-4 lg:px-2  sm:gap-1 sm:px-1">
          <div className="w-2/5 pt-5 md:flex md:flex-col md:pt-0 md:justify-center sm:w-1/2 ">
            <span className="font-bold text-5xl xl:text-4xl lg:text-[1.7rem] md:text-lg xs:text-sm">
              CREATIVE <br />
              WEBDEVELOPER
              <br />
              AND WEBDESIGNER
            </span>
            <img src={Kod} alt="colorfull_line" />
          </div>
          <div className="flex justify-center items-center relative w-1/6 sm:hidden">
            <span className="text-5xl text-white/60 lg:text-3xl ">┿</span>
            <span className="absolute bottom-0">scroll down</span>
          </div>

          <div className="pt-5 relative w-2/5 sm:w-1/2 md:pt-0">
            <div className="flex justify-end gap-2 pb-5 md:pt-5 md:pb-0 sm:pt-0">
              <img
                src={world}
                alt="world"
                className="w-[100px] object-contain xl:self-start lg:w-[90px] lg:self-center md:w-[70px] md:hidden"
              />
              <div className="flex flex-col text-3xl lg:text-xl md:text-sm sm:text-sm sm:pt-1 md:tracking-widest sm:tracking-normal ">
                <span>Based in : Stavanger</span>
                <span>Norway</span>
                <img src={mountains} alt="mountains" />
              </div>
            </div>
            <div className="flex justify-end  ">
              <span className="text-5xl text-transparent font-outline-2 xl:text-4xl lg:text-3xl md:text-2xl md:pt-5 md:tracking-wider sm:text-xl sm:pt-0 xs:text-sm xs:tracking-wide">
                PORTFOLIO 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
