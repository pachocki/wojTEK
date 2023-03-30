import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import WorkCard from "../components/WorkCard";
import Playwell from "../assets/playwellonmonitor.webp";
import Koselig from "../assets/koseligmonitor.webp";
import Ding from "../assets/ding-laptop.webp";
import Ebike from "../assets/ebike-laptop.webp";
import Workout from "../assets/workoutonmonitor.webp";
import Archtek from "../assets/archtek-mobile.webp";
import Modern from "../assets/modern.png";
import Inspace from "../assets/inspace.png";
import Batman from "../assets/batman.png";
import Hardanger from "../assets/hardanger.png";

const Work = () => {
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
  return (
    <div
      className="w-[90%] h-full mx-auto  lg:w-[95%] md:w-[98%]"
      ref={textRef}
    >
      <div className=" relative  pt-32 pb-10 md:px-2 md:pt-24">
        <h1 className="3xl:text-[9rem] text-[8rem] font-semibold  xl:text-8xl md:text-7xl sm:text-5xl xs:text-4xl xl:pb-5">
          Work
        </h1>
        <h2 className="w-[60%] xl:w-1/2 text-3xl xl:text-2xl lg:text-xl lg:w-3/4 pl-5 md:pl-0 md:text-lg sm:w-full sm:text-sm">
          Unlocking the power of programming is a journey, and with each line of
          code, you're one step closer to realizing your full potential as a
          developer.
        </h2>
      </div>
      <div>
        <div className="relative grid grid-cols-2 gap-2  md:px-2 sm:grid-cols-1  sm:gap-4 ">
          <div className="flex gap-2 flex-col sm:gap-4">
            <WorkCard image={Playwell} title="Playwell" link="/Playwell">
              <p className="3xl:text-3xl">React Js</p>
              <p className="3xl:text-3xl">Node Js</p>
            </WorkCard>
            <WorkCard image={Ding} title="Ding-Dong" link="/DingDong">
              <p className="3xl:text-3xl">Next Js</p>
              <p className="3xl:text-3xl">Node Js</p>
            </WorkCard>
            <WorkCard image={Archtek} title="Archtek" link="/archtek">
              <p className="3xl:text-3xl">React Js</p>
              <p className="3xl:text-3xl">Node Js</p>
            </WorkCard>
            <WorkCard
              image={Modern}
              title="Modern"
              link="https://pachocki.github.io/ModerN/"
            >
              <p className="3xl:text-3xl">React Js</p>
            </WorkCard>
            <WorkCard
              image={Inspace}
              title="Inspace"
              link="https://pachocki.github.io/InSpace/"
            >
              <p className="3xl:text-3xl">React Js</p>
            </WorkCard>
          </div>
          <div className="flex gap-2 flex-col sm:gap-4">
            <WorkCard
              image={Koselig}
              title="Koselig"
              style=" mt-4 sm:mt-0"
              link="/koselig"
            >
              <p className="3xl:text-3xl">React Js</p>
              <p className="3xl:text-3xl">Node Js</p>
            </WorkCard>
            <WorkCard image={Ebike} title="E-bike" link="/ebike">
              <p className="3xl:text-3xl">React Js</p>
              <p className="3xl:text-3xl">Node Js</p>
            </WorkCard>
            <WorkCard image={Workout} title="Workout" link="/workout">
              <p className="3xl:text-3xl">React Js</p>
              <p className="3xl:text-3xl">Redux</p>
            </WorkCard>
            <WorkCard
              image={Hardanger}
              title="Hardanger"
              link="https://pachocki.github.io/Hardanger/"
            >
              <p className="3xl:text-3xl">Html</p>
              <p className="3xl:text-3xl">Css</p>
              <p className="3xl:text-3xl">Javascript</p>
            </WorkCard>
            <WorkCard
              image={Batman}
              title="Batman"
              link="https://pachocki.github.io/The-Batman-Card-Game/"
            >
              <p className="3xl:text-3xl">Html</p>
              <p className="3xl:text-3xl">Css</p>
              <p className="3xl:text-3xl">Javascript</p>
            </WorkCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
