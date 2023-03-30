import React from "react";

const WorkChalange = ({ chalange, goal, solution }) => {
  return (
    <div className="flex justify-between pt-28 xl:pt-20 md:pt-10">
      <div className=" pt-10 w-1/3 sm:pt-0">
        <div className="sticky top-40 mb-20 sm:mb-0">
          <h1 className=" 3xl:text-5xl text-4xl font-semibold lg:text-3xl md:text-2xl sm:[writing-mode:vertical-rl] sm:rotate-[-180deg] ">
            Webdevelopment <br />& Design
          </h1>
        </div>
      </div>
      <div className="w-2/4 md:w-[60%] sm:w-full">
        <div className=" sticky top-10 bg-teal-600 rounded-xl min-h-[20vh] px-5 py-5 sm:top-0">
          <h2 className="3xl:text-5xl text-3xl xl:text-2xl ">Chalange</h2>
          <p className="3xl:text-3xl text-2xl xl:text-xl sm:text-[1rem]">
            {chalange}
          </p>
        </div>
        <div className="sticky top-24 bg-yellow-600 rounded-xl min-h-h-[20vh] mt-2 px-5 py-5 sm:top-0">
          <h2 className="3xl:text-5xl text-3xl xl:text-2xl ">Goal</h2>
          <p className="3xl:text-3xl text-2xl xl:text-xl sm:text-[1rem]">
            {goal}
          </p>
        </div>
        <div className=" sticky top-30 bg-purple-600 rounded-xl min-h-h-[20vh] mt-2 px-5 py-5 sm:top-0">
          <h2 className="3xl:text-5xl text-3xl xl:text-2xl ">Solution</h2>
          <p className="3xl:text-3xl text-2xl xl:text-xl sm:text-[1rem]">
            {solution}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkChalange;
