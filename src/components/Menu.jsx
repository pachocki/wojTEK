import { useEffect, useRef, useState } from "react";

//React Router
import { Link, NavLink } from "react-router-dom";

//Gsap Library
import gsap from "gsap";
import { AiOutlineClose } from "react-icons/ai";

const menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  //Refs
  const toggle = useRef(null);
  const menuIcon = useRef(null);
  const link = useRef(null);
  const tl = useRef();

  //Open and Close Menu
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  //Menu Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true })
        .to("path", {
          y: (i, b, c) => {
            if (i === 0) return 2;
            if (i === 2) return -2;
            return 0;
          },
        })
        .to(
          toggle.current,
          { height: "100%", ease: "none", duration: 0.15, zIndex: 200 },
          0
        )
        .to(link.current, { delay: 0.01, opacity: 1, zIndex: 200 })
        .reverse();
    }, menuIcon);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    tl.current.reversed(!isOpen);
  }, [isOpen]);

  return (
    <div>
      <div className="fixed z-50 top-0 max-w-[2000px] flex justify-between items-center w-full px-5 pt-2">
        <div className=" mix-blend-difference sm:mix-blend-normal">
          <Link to="/">
            {" "}
            <span className="text-5xl font-bold mix-blend-difference lg:text-3xl  sm:text-xl sm:mix-blend-normal">
              ✱ wojTEK
            </span>
          </Link>
        </div>
        <div className="mix-blend-difference">
          <button
            className="link flex  justify-center   relative z-10 items-center  bg-zinc-700/80 w-[70px] h-[70px]  rounded-full  sm:w-[50px]  sm:h-[50px] cursor-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 100% 100%"
              className=" w-[24px] h-[24px] relative z-10"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              ref={menuIcon}
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative z-50">
        <div
          className=" flex justify-between items-center w-full h-0 bg-black overflow-hidden fixed top-0 left-0 z-50 mobile:w-screen"
          ref={toggle}
        >
          <div
            className="flex flex-col justify-center items-center text-center bg-zinc-900    relative w-full h-full gap-5 text-4xl opacity-0 screen:w-1/2 mobile:w-full z-80 "
            onClick={() => showMenu((prevState) => !prevState)}
            ref={link}
          >
            <div className="absolute top-0 w-full">
              <div className="flex justify-between   pt-4 pr-6 pl-4 items-center md:px-2 max-w-[2000px] mx-auto">
                <Link to="/">
                  {" "}
                  <span className="text-5xl font-bold z-50 md:text-3xl md:left-2 sm:text-xl">
                    ✱ wojTEK
                  </span>{" "}
                </Link>
                <button className="link flex justify-center relative items-center rounded-full    w-[70px] h-[70px] bg-zinc-700  sm:w-[50px]  sm:h-[50px] cursor-none">
                  <AiOutlineClose
                    onClick={() => setIsOpen(!isOpen)}
                    className="   text-white relative z-10  "
                  />
                </button>
              </div>
            </div>
            <ul>
              <li className="hover:underline  transition-all delay-150 3xl:text-[12rem] text-8xl sm:text-6xl sm:font-semibold">
                <NavLink to="/Work">Work</NavLink>
              </li>
              <li className="hover:underline transition-all delay-150 3xl:text-[12rem] text-8xl   sm:text-6xl sm:font-semibold">
                <NavLink to="/About"> About</NavLink>
              </li>
              <li className="hover:underline transition-all delay-150  3xl:text-[12rem] text-8xl  sm:text-6xl sm:font-semibold">
                <NavLink to="/Contact"> Contact</NavLink>
              </li>
            </ul>
            <div className="absolute bottom-5 flex gap-5 sm:text-2xl xs:text-lg">
              <Link to="">
                {" "}
                <span className="hover:underline">Instagram</span>
              </Link>
              <Link to="">
                {" "}
                <span className="hover:underline"> Github</span>
              </Link>
              <Link to="">
                {" "}
                <span className="hover:underline">Linkedin</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
