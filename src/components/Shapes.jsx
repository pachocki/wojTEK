import React from 'react'
import Square from "../assets/pink_cube.webp";
import Crystal from "../assets/pink_gumka.webp";
import Triangle from "../assets/pink_triangle.webp";
import Ring from "../assets/pink_ring.webp";
import Stone from "../assets/pink_square.webp";
import Squarepole from "../assets/pink_squarepole.webp";
import Diamond from "../assets/pink_diamond.webp"

const Shapes = () => {
  return (
    <div>
           <img
            src={Square}
            alt="square"
            className="w-[350px] filter  rotate-60 absolute top-[-5rem] left-20 move__one lg:w-[300px]  md:w-[220px] sm:left-[-4rem]"
          />
          <img
            src={Square}
            alt="square"
            className="rotate-[190deg] absolute right-20 w-[600px] top-14 move__two xl:w-[450px] xl:top-28 lg:w-[350px] lg:top-64 lg:right-12 md:w-[300px] md:right-0 md:top-56 sm:w-[270px] sm:right-[-4rem] xs:right-[-8rem] xs:top-72"
          />
          <img
            src={Ring}
            alt="ring"
            className="rotate-[190deg] absolute left-10 w-[50px] bottom-10 move__three"
          />
          <img
            src={Crystal}
            alt="Crystal"
            className="absolute left-0 top-1/3 filter blur-[2px] w-[50px] move__three "
          />
          <img
            src={Crystal}
            alt="Crystal"
            className="absolute right-40 bottom-1/2 w-[150px] move__three lg:right-10 md:w-[100px] md:right-10 md:top-40"
          />
           <img
            src={Crystal}
            alt="Crystal"
            className="absolute right-1/2 bottom-1/4 w-[100px] filter  move__three md:left-40 md:bottom-60 sm:bottom-44 xs:bottom-32 xs:left-20"
          />
          <img
            src={Triangle}
            alt="triangle"
            className="w-[50px] bottom-5 rotate-[60deg] absolute right-1/2  move__two md:right-52 md:rotate-[89deg] sm:right-16 sm:bottom-[-2rem] xs:left-0  xs:bottom-28 " 
          />
          <img
            src={Ring}
            alt="ring"
            className="w-[250px] top-5 rotate-[60deg] absolute right-1/2  move__two xl:w-[150px] xl:left-[40%] xl:top-36 md:left-[30%] md:w-[100px] sm:w-[110px] sm:top-1/3"
          />
          <img
            src={Stone}
            alt="stone"
            className="absolute left-40 bottom-0 w-[150px] move__three md:w-[100px ] xs:w-[80px]"
          />
          <img
            src={Stone}
            alt="stone"
            className="absolute right-0 top-0 w-[150px] move__three md:w-[100px] xs:w-[50px]"
          />
          <img
            src={Squarepole}
            alt="squarepole"
            className="w-[100px] filter blur-[2px] rotate-60 absolute top-0 left-1/2 move__one"
          />
       
          <img src={Squarepole} alt="squarepole" className="absolute bottom-10 left-96 w-[200px] xl:w-[150px] move__two lg:left-0 lg:bottom-1/3 lg:w-[100px]"/>
          <img src={Diamond} alt="diamond" className="absolute bottom-5  right-0 w-[30px] move__one"/>
    </div>
  )
}

export default Shapes