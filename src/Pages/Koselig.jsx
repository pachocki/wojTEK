import React from "react";
import Hero from "../assets/koseliglaptop.webp";
import HeroWork from "../components/HeroWork";

import WorkChalange from "../components/WorkChalange";
import Gallery from "../components/Gallery";
import Ebike from "../assets/ebike.webp";
import Workout from "../assets/workout-prev.webp";
import KoseligPc from "../assets/koseligmonitor.webp";
import KoseligAccomodation from "../assets/koseligadd.webp";
import KoseligPreview from "../assets/Koseligpreview.webp";
import KoseligDestinations from "../assets/koseligdestinations.webp";
import KoseligDescription from "../assets/koseligdescription.webp";
import KoseligGallery from "../assets/koseliggallery.webp";
import KoseligLogin from "../assets/koseliglogin.webp";


const images = [
    Hero,
  KoseligPc,
  KoseligPreview,
  KoseligAccomodation ,
  KoseligDestinations,
  KoseligDescription,
  KoseligGallery,
  KoseligLogin ,
];

const Koselig = () => {
  return (
    <div className="h-full pt-32 w-[90%] mx-auto lg:w-[95%] md:w-[98%] sm:w-full px-2 md:pt-32 sm:pt-24">
      <HeroWork
        title="Koselig"
        client="Koselig"
        time="One month"
        service="Webdev & Design"
        website="Koselig"
        image={Hero}
      />
      <WorkChalange
        chalange="In this particular project, the design aspect played a critical role, as it needed to evoke the essence and aesthetic of both a fashion magazine and an architectural magazine. To achieve this, the design employed a simple, clean, and orderly approach. The design elements were carefully selected and arranged in a way that conveyed a sense of sophistication and professionalism.

        From a technical standpoint, one of the biggest challenges was finding a way to efficiently store and manage the large number of images and user data required for the project. To address this, I made use of two powerful tools: Mongo DB and AWS Bucket."
        goal="Our goal was to create a website that is enjoyable and user-friendly for both hosts and guests. The design was carefully planned to be simple, intuitive, and accessible to all. The website is optimized for ease of use and responsiveness to different devices. Hosts can easily manage their listings, update their information, and respond to inquiries. Guests can quickly find the perfect accommodation that meets their needs. The website's code is optimized for speed, security, and scalability. The platform is user-friendly and accessible to everyone. The website is reliable, secure, and scalable. Our project successfully achieved its goal of creating a user-friendly and accessible platform. The focus on user experience made it easy for anyone to use."
        solution="In this project, I utilized several new solutions that enabled stable and optimized website performance. ReactJS was used for the frontend and Node.js for the backend. MongoDB was utilized for the database. All the images were stored on AWS Bucket. These technologies allowed for efficient handling and storage of large amounts of data. The use of ReactJS ensured fast and responsive user interfaces. Node.js provided efficient server-side performance. MongoDB enabled flexible and scalable data management. AWS Bucket ensured reliable and secure storage of images. Overall, these new solutions allowed for a stable and efficient website that could handle a large volume of traffic and provide a seamless user experience."
      />
      <Gallery
        images={images}
        prev="E-bike"
        linkPrev="/ebike"
        imagePrev={Ebike}
        next="Workout"
        linkNext="/workout"
        imageNext={Workout}
        live="https://koselig.vercel.app/"
      />
    </div>
  );
};

export default Koselig;
