import React, { useContext, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Playwell from "../assets/playwell-monitor.webp";
import Koselig from "../assets/Koselig-monitor.webp";
import Ding from "../assets/ding-laptop.webp";
import Ebike from "../assets/ebike-laptop.webp";
import Workout from "../assets/workout.webp";
import Archtek from "../assets/archtek-mobile.webp";

import WorkCard from "./WorkCard";
const Work = () => {
  useEffect(() => {
    const project = document.querySelectorAll(".project");
    const circle = document.querySelector("#inner-mask");

    gsap.set(circle, {
      transformOrigin: "center center",
    });

    gsap.set(project, {
      opacity: 0,
      zIndex: 1,
    });

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    // Setup a timeline for the Mask and text
    var tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".--mask",
          pin: true,
          end: "center bottom",
          scrub: 1,
          pinSpacing: false,

          start: () => {
            if (window.matchMedia("(max-width: 640px)").matches) {
              return "top -=2%";
            } else if (window.matchMedia("(max-width: 770px)").matches) {
              return "top +=2%";
            } else if (window.matchMedia("(max-width: 1024px)").matches) {
              return "top +=4%";
            } else if (window.matchMedia("(max-width: 1450px)").matches) {
              return "top top";
            } else {
              return "top top";
            }
          },
        },
      })
      .to(project, {
        opacity: 1,
        duration: 1,
        zIndex: 40,
      })
      .to(
        circle,
        {
          scale: 35,
          yPercent: -550,
          duration: 2,
        },
        0
      );

    tl.scrollTrigger.refresh();
    return () => {
      tl.pause(0).kill(true);
    };
  }, []);
  return (
    <div className="relative h-full">
      <SectionTitle title="Jump to my Work" />
      <div className="bg-white/20 relative 3xl:h-[180vh] h-[260vh] xl:h-[220vh] sm:h-[310vh]">
        <div className="section --mask min-h-screen z-20">
          <svg
            id="svg-mask"
            width="100%"
            height="100%"
            viewBox="0 0 100% 100%"
            preserveAspectRatio="xMidYMid slice"
            className="min-h-screen h-[200vh]"
          >
            <defs>
              <mask id="mask">
                <rect width="100%" height="100%" fill="#fff" />
                <circle
                  id="inner-mask"
                  cx="50%"
                  cy="20%"
                  r="12%"
                  fill="#101010"
                />
              </mask>
            </defs>
            <g>
              <rect
                mask="url(#mask)"
                width="100%"
                height="100%"
                fill="#101010"
              />
            </g>
          </svg>
        </div>
        <div className="absolute top-48 text-black w-full">
          <div className="project relative grid grid-cols-2 w-[90%] h-full mx-auto gap-2 lg:w-[95%] md:w-[98%] md:px-2 sm:grid-cols-1  sm:gap-4 ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
