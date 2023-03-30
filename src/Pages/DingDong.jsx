import React from "react";
import Hero from "../assets/ding-laptop-desk.webp";
import HeroWork from "../components/HeroWork";

import WorkChalange from "../components/WorkChalange";
import Gallery from "../components/Gallery";
import Ebike from "../assets/ebike.webp";
import Workout from "../assets/workout-prev.webp";
import DingLaptop from "../assets/ding-laptop.webp";
import DingLanding from "../assets/dinglanding.webp";
import  DingMobile from "../assets/dingmobile.webp"
import DingProfile from "../assets/dingprofile.webp"

import DingLogin from "../assets/dinglogin.webp";

const images = [
  Hero,
  DingLaptop,
  DingLogin,
  DingLanding,
  DingProfile,
  DingMobile,

 
];

const DingDong = () => {
  return (
    <div className="h-full pt-32 w-[90%] mx-auto lg:w-[95%] md:w-[98%] sm:w-full px-2 md:pt-32 sm:pt-24">
      <HeroWork
        title="DingDong"
        client="DingDong"
        time="One month"
        service="Webdev & Design"
        website="DingDong"
        image={Hero}
      />
      <WorkChalange
        chalange="The project's design was intentionally kept simple to resemble a chat platform where users could exchange views and tips. The focus was on functionality and ease of use. The website's main technical challenge was storing a large amount of data, particularly images. The website's purpose was to facilitate user interactions and profile updates. The design was optimized for a seamless and intuitive user experience. The website's simplicity was intentional and aligned with its purpose. The website's technical challenges were carefully considered and addressed. The result was a platform that was functional, user-friendly, and efficient."
        goal="The primary objective was to create a user-friendly platform that allowed users to create an account, post content, and customize their profiles. The focus was on simplicity and ease of use. The platform was designed to be accessible to all users, regardless of technical knowledge. The registration process was streamlined to allow users to get started quickly. The posting functionality was straightforward and intuitive. The profile creation process was optimized for ease of use and customization. Overall, the goal was to provide a straightforward and efficient platform that met the users' needs."
        solution="For this project, Next.js was selected as the primary tool for building the website due to its comprehensive features and flexibility. Next.js enabled the me to efficiently build a robust and scalable website while minimizing development time. The framework provided powerful functionality for server-side rendering, routing, and optimization, making it a suitable choice for this project. Additionally, the framework offered an intuitive development experience, with hot reloading and automatic server restarts. MongoDB was chosen as the primary database for the project, providing a flexible and scalable solution for data management."
      />
      <Gallery
        images={images}
        prev="E-bike"
        linkPrev="/ebike"
        imagePrev={Ebike}
        next="Workout"
        linkNext="/workout"
        imageNext={Workout}
        live="https://ding-dong-psi.vercel.app"
      />
    </div>
  );
};

export default DingDong;
