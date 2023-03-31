import React from "react";
import Hero from "../assets/archtek.webp";
import HeroWork from "../components/HeroWork";

import WorkChalange from "../components/WorkChalange";
import Gallery from "../components/Gallery";
import Ebike from "../assets/ebike.webp";
import WorkoutWeb from "../assets/workout-prev.webp";
import ArchtekMobile from "../assets/archtek-mobile.webp";
import ArchtekBlog from "../assets/archtekblog.webp";
import ArchtekNews from "../assets/archteknews.webp";


const images = [
  Hero,ArchtekMobile,ArchtekBlog,ArchtekNews,
  

];

const Archtek = () => {
  return (
    <div className="h-full pt-32 w-[90%] mx-auto lg:w-[95%] md:w-[98%] sm:w-full px-2 md:pt-32 sm:pt-24">
      <HeroWork
        title="Archtek"
        client="Archtek"
        time="One month"
        service="Webdev & Design"
        website="Archtek"
        image={Hero}
      />
      <WorkChalange
        chalange="The main challenge in this project was to create a blog that is user-friendly and visually appealing.
        My goal was to ensure that visitors to the blog could easily navigate and find the information they were looking for.
        We wanted to create a design that would engage readers and encourage them to explore the content further.
        It was important to strike a balance between functionality and aesthetics, to create a blog that was both practical and visually stunning.
        Through careful planning and attention to detail, we were able to successfully meet this challenge and create a blog that is both easy to use and visually appealing."
        goal="The main objective of this project was to learn and implement the backend of a web application.
        We aimed to create a functional backend that could connect to a MongoDB database.
        One of the key goals was to enable the uploading of images into the database and associating them with relevant data.
        I wanted to ensure that the backend was scalable and could handle large amounts of data efficiently.
        Alongside this, we aimed to connect the backend with the frontend of the web application.
        My objective was to create a seamless flow of information between the two, enabling the frontend to display the data in an appealing and user-friendly way."
        solution="In this project, we utilized React.js for the front-end development and Node.js as the back-end framework. To store and manage the data, we integrated MongoDB as our database. With the help of React.js, we were able to develop a dynamic and interactive user interface that provided a seamless user experience. Node.js enabled us to create a powerful and scalable back-end structure that could handle complex operations and user requests efficiently. By incorporating MongoDB, we were able to store and retrieve data seamlessly, ensuring that the application remained responsive and fast. Overall, this technology stack allowed us to build a high-quality and functional web application that meets the needs of our users."
      />
      <Gallery
        images={images}
        prev="E-bike"
        linkPrev="/ebike"
        imagePrev={Ebike}
        next="Workout"
        linkNext="/workout"
        imageNext={WorkoutWeb}
        live="https://archtek.vercel.app"
      />
    </div>
  );
};
export default Archtek;
