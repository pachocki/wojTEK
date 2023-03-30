import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MouseContext } from "../context/MouseContext";

const WorkCard = ({ image, title, children, style, link }) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div>
      <Link to={link} className="cursor-none">
        <div
          className={"rounded-xl overflow-hidden  " + style}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={() => cursorChangeHandler("")}
        >
          <div className="overflow-hidden">
            <img
              src={image}
              alt="project"
              className="w-full h-[600px] object-cover xl:h-[450px] transition-all hover:scale-110 sm:h-[350px] "
            />
          </div>
          <div className=" flex justify-between px-4 py-5 bg-orange-700 text-white rounded-b-xl md:px-2 sm:py-2">
            <div className="">
              <h3 className="3xl:text-3xl text-2xl  lg:text-lg ">{title}</h3>
            </div>
            <div className="flex gap-2 text-xl lg:text-lg">{children}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkCard;
