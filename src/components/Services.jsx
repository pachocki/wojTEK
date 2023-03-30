import React, { useEffect, useRef } from "react";
import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle";
import { MdOutlineDesignServices, MdDeveloperMode } from "react-icons/md";
import { FaCrosshairs } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
const Services = () => {
  const serviceContainer = useRef(null);
  const gradient = useRef(null);

  //Gsap Animations
  useEffect(() => {
    if (window.innerWidth < 640) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".gradient",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: serviceContainer.current,
          start: "top 50%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div
      className="pt-10 h-full pb-60 lg:pb-40 relative z-20 overflow-hidden sm:pb-20 "
      ref={serviceContainer}
    >
      <div className="gradient absolute w-[500px] h-[80%] top-10 right-[-22rem] z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/40 via-violet-600/20 to-black filter blur-2xl   lg:right-[-25rem] sm:h-[68%] sm:right-[-18rem] sm:top-[20%] "></div>
      <div className="gradient absolute w-[500px] h-[80%] top-10 left-[-22rem] z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/40 via-violet-600/20 to-black filter blur-2xl   lg:left-[-25rem] sm:h-[68%] sm:left-[-18rem] sm:top-[20%]"></div>
      <SectionTitle title="Services" />

      <div className="pt-10 md:pt-5">
        <p className="3xl:text-4xl text-3xl w-2/3 mx-auto text-center xl:w-[80%] lg:text-2xl md:text-xl sm:w-full sm:px-2 sm:text-lg pb-10 sm:pb-5 xs:text-sm">
          As a full-stack developer and designer, I offer a range of design and
          digital solutions to help brands unlock their full potential. By
          combining my skills in both areas, I am able to create cohesive,
          effective solutions that deliver results.
        </p>
      </div>
      <div className="flex justify-around w-3/4 gap-3 mx-auto pt-10 relative z-20 xl:w-[90%] lg:w-full  lg:gap-1 lg:px-2 md:flex-wrap md:gap-4 sm:flex-col">
        <ServiceCard
          icon={<MdOutlineDesignServices className="text-2xl" />}
          background="bg-purple-500"
          title="Design"
          text=" I provide customized visual solutions to boost your brand's
              digital presence. Whether it's designing a new logo, creating a
              stunning website or developing a comprehensive digital marketing
              strategy, my focus is on delivering solutions that align with your
              unique business objectives."
        />
        <ServiceCard
          icon={<MdDeveloperMode className="text-2xl" />}
          background="bg-yellow-500"
          title="Webdevelopment"
          text="  I specialize in providing tailored web development solutions to
              help your brand achieve its digital goals. Whether you need a new
              website, mobile app, or complex web application, I have the skills
              and expertise to deliver a solution that aligns with your unique
              business objectives."
        />
        <ServiceCard
          icon={<FaCrosshairs className="text-2xl" />}
          background="bg-green-500"
          title="Strategy"
          text="  As a digital strategy consultant, I help businesses achieve their
          goals by developing comprehensive plans that leverage digital
          technologies. Whether you need to increase website traffic, build
          brand awareness, or boost conversions."
        />
      </div>
    </div>
  );
};

export default Services;
