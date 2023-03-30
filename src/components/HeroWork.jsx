import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const HeroWork = ({client,time,service,website,image,title}) => {
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
    <>
    <div className=" relative  ">
    <h1 className="3xl:text-[9rem] text-[8rem] font-semibold opacity-0 xl:text-8xl md:text-7xl sm:text-5xl xs:text-4xl" ref={textRef}>
      {title}
    </h1>
  </div>
  <div className="flex justify-around items-center pt-10 gap-5 xl:gap-2 sm:pt-5  ">
    <div className="border-t border-white w-full flex flex-col sm:hidden">
      <h2 className="mt-2 3xl:text-3xl ">Client</h2>
      <h3 className="text-2xl  3xl:text-4xl lg:text-[1rem]">{client}</h3>
    </div>
    <div className="border-t border-white w-full sm:hidden">
      <h2 className="mt-2 3xl:text-3xl">Timeline</h2>
      <h3 className="text-2xl 3xl:text-4xl  lg:text-[1rem]">{time}</h3>
    </div>
    <div className="border-t border-white w-full sm:text-sm">
      <h2 className="mt-2 3xl:text-3xl">Service</h2>
      <h3 className="text-2xl 3xl:text-4xl  lg:text-[1rem]">{service}</h3>
    </div>
    <div className="border-t border-white w-full sm:text-sm">
      <h2 className="mt-2 3xl:text-3xl">Website</h2>
      <h3 className="text-2xl  3xl:text-4xl  lg:text-[1rem]">{website}</h3>
    </div>
  </div>
  <div className="pt-10 sm:pt-5">
    <img
      src={image}
      alt="hero"
      className="w-full h-[85vh] object-cover object-center rounded-xl sm:h-[70vh] xs:h-[50vh] "
    />
  </div>
  </>
  )
}

export default HeroWork