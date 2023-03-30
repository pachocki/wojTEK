import React, { useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import { MouseContext } from "../context/MouseContext";

const Gallery = ({
  images,
  imagePrev,
  imageNext,
  next,
  prev,
  linkPrev,
  linkNext,
  live,
}) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  //Text Animation
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

  //Gallery Lightbox
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //looping through our images array to create img elements
  const imageCards = images.map((image) => (
    <img
      className=" w-full h-full "
      onClick={() => showImage(image)}
      src={image}
      key={image}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    />
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <div>
      <div className=" text-slide-container grid gap-2 py-40   overflow-hidden uppercase font-bold sm:pt-40 sm:pb-12 ">
        <span className=" border-t pt-4 text-slide-one text-white text-[10rem] whitespace-nowrap leading-[120px] lg:text-8xl sm:text-6xl ">
          Gallery • Gallery • Gallery • Gallery • Gallery • Gallery • Gallery •
          Gallery • Gallery • Gallery • Gallery • Gallery • Gallery • Gallery •
          Gallery • Gallery • Gallery • Gallery •
        </span>
      </div>
      <div className="grid grid-cols-2 gap-10 md:gap-4 sm:gap-4 sm:grid-cols-1">
        {imageCards}
      </div>
      <div className="flex gap-2 flex-col  justify-center items-center py-10 overflow-hidden relative 3xl:text-5xl">
        <span>Check out Live</span>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="3xl:w-auto 3xl:px-10 flex  justify-center w-[100px] py-2 overflow-hidden bg-zinc-700 items-center  relative cursor-none transition-all hover:bg-orange-600 sm:w-[80px]"
        >
          Live
        </a>
      </div>
      <div className="flex justify-between pt-20 items-center text-xl 3xl:text-5xl sm:pb-10 md:text-lg sm:pt-5 ">
        <Link to={linkPrev} className="cursor-none transition-all hover:opacity-50">
          {" "}
          <div className="flex gap-2 items-center 3xl:gap-5 ">
            <img
              src={imagePrev}
              alt="project"
              className="rounded-xl w-[100px]  3xl:w-[200px] sm:hidden"
            />
            <div className="flex flex-col ">
              <span>Previouse</span>
              <span className="xs:hidden">{prev}</span>
            </div>
          </div>
        </Link>

        <Link to="/work" className="cursor-none transition-all hover:opacity-50">
          <div>Back</div>
        </Link>
        <Link to={linkNext} className="cursor-none transition-all  hover:opacity-50">
          {" "}
          <div className="flex gap-2 items-center 3xl:gap-5  3xl:text-5xl ">
            <div className="flex flex-col">
              <span>Next</span>
              <span className="xs:hidden">{next}</span>
            </div>
            <img
              src={imageNext}
              alt="project"
              className="rounded-xl w-[100px]  3xl:w-[200px] sm:hidden"
            />
          </div>
        </Link>
      </div>

      {lightboxDisplay ? (
        <div
          className="gap-2 z-[100] fixed inset-0 w-full h-full bg-black/80 flex justify-between items-center px-5 sm:px-0 cursor-none"
          onClick={hideLightBox}
        >
          <button
            className="absolute top-10 right-10 bg-zinc-400 w-[50px] h-[50px] rounded-full flex justify-center items-center sm:w-[30px] sm:h-[30px] cursor-none"
            onClick={hideLightBox}
          >
            X
          </button>
          <button
            onClick={showPrev}
            className="w-[50px] h-[50px] bg-orange-600 rounded-full sm:bg-transparent "
          >
            ⭠
          </button>
          <img
            id="lightbox-img"
            className="w-[85%] max-h-[90%] "
            src={imageToShow}
          ></img>
          <button
            onClick={showNext}
            className="w-[50px] h-[50px] bg-orange-600 rounded-full sm:bg-transparent cursor-none"
          >
            ⭢
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Gallery;
