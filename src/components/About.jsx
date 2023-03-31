import React, { useEffect, useRef } from "react";
import Profil from "../assets/profile.jpg";
import Stripe from "../assets/stripe.webp";

import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle";
import Technoloogies from "./Technoloogies";

const About = () => {
  const about = useRef(null);
  const aboutContainer = useRef(null);

  //Gsap Animations
  useEffect(() => {
    if (window.innerWidth < 640) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: about.current,
        start: "top +=50%",
        end: "bottom -=15%",
        scrub: 1,
      },
    });

    tl.to(about.current, {
      scale: 1.09,
    }).to(about.current, {
      scale: 1,
      duration: 0.5,
      opacity: 0,
    });

    return () => {
      tl.pause(0).kill(true);
    };
  }, []);

  return (
    <div
      className="w-[98%] mx-auto  pt-20 pb-40 relative h-full xl:py-16 sm:py-0 sm:pt-10 sm:px-2 sm:w-full z-10"
      ref={aboutContainer}
    >
      <SectionTitle title="About Me" />

      <div
        className="flex justify-between  relative w-[95%] mx-auto  pt-20   xl:w-[98%] sm:grid sm:grid-cols-1 sm:h-full sm:w-full md:pt-10"
        ref={about}
      >
        <div className="flex flex-col   bg-teal-400 rounded-l-xl w-[45%] sm:w-full sm:rounded-t-xl sm:rounded-b-none">
          <div className="flex justify-between items-center  text-black px-5 pt-2 pb-5 sm:pb-1 ">
            <div>
              <span className="text-4xl sm:hidden ">┑</span>
              <span className=" "> ⊕</span>
            </div>

            <span className="text-2xl sm:text-sm">┿</span>
            <div>
              <span className=" "> ⊕</span>
              <span className="text-4xl sm:hidden ">┍</span>
            </div>
          </div>
          <div className=" flex h-full justify-between items-center text-black">
            <div className="px-2 lg:hidden">
              <span className="text-2xl sm:text-sm">┿</span>
            </div>
            <div className="">
              <img
                src={Profil}
                alt="profil"
                className=" object-cover rounded-lg  lg:rounded-none grayscale-[40%]"
              />
            </div>
            <div className="px-2 lg:hidden">
              <span className="text-2xl ">┿</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-black px-5 pb-2">
            <div>
              <span className="text-4xl sm:hidden ">┑</span>
              <span className=" "> ⊕</span>
            </div>

            <span className="text-2xl sm:text-sm ">┿</span>
            <div>
              <span className=" "> ⊕</span>
              <span className="text-4xl sm:hidden ">┍</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full bg-zinc-800/80 rounded-r-xl   border-y overflow-hidden border-r border-white/20  sm:rounded-t-none  sm:border-l sm:rounded-b-xl ">
          <div className="flex  flex-col justify-around w-full h-full sm:text-sm">
            <div>
              <h2 className="text-5xl text-center font-bold border-b border-white/20 h-24 md:text-4xl sm:text-3xl pt-8 sm:border-y">
                Hello World
              </h2>
            </div>
            <div className=" border-r border-white/20 h-full sm:border-none 3xl:py-20">
              <p className=" flex items-center justify-center px-10 text-3xl  h-full  font-sans  leading-relaxed 3xl:text-4xl xl:text-[1.7rem]  xl:px-5  lg:text-[1.5rem] md:text-xl  sm:py-5 sm:px-2 xs:text-sm ">
                I'm Wojtek Pachocki, a full-stack developer with a passion for
                web development and design.I strive to create modern and
                well-designed websites. My daily work involves working with
                technologies such as HTML, CSS, JavaScript, React JS, and Next
                JS. For backend development, I use Node JS and the MongoDB
                database. Outside of work, I enjoy spending time with friends,
                watching football, and traveling. I'm always seeking new
                opportunities to learn and grow both personally and
                professionally. With my experience and passion, I'm excited to
                create innovative and visually appealing websites and
                applications.
              </p>
            </div>

            <Technoloogies />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
