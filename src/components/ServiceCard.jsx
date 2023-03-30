import React from "react";
const ServiceCard = ({ background, title, text, icon }) => {
  return (
    <div className="bg-zinc-900/40 w-1/3 rounded-xl  px-5 pt-4 border border-white/10  transition-all hover:bg-zinc-700/40   lg:px-2 md:w-[48%] sm:w-full ">
      <div className="flex items-center gap-4">
        <div
          className={
            " w-[40px] h-[40px] rounded-lg flex justify-center items-center " +
            background
          }
        >
          {icon}
        </div>
        <div>
          <span className="3xl:text-3xl text-2xl lg:text-lg lg:font-semibold md:text-[1rem] sm:text-xl">{title}</span>
        </div>
      </div>
      <div className="pt-5 pb-20 xl:pb-14 lg:pb-10">
        <p className="3xl:text-3xl text-xl lg:text-lg md:text-[1rem] md:leading-normal sm:text-lg">{text}</p>
      </div>
     
    </div>
  );
};

export default ServiceCard;
