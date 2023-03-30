import React from "react";
import Hero from "../assets/ebike-laptop.webp";
import HeroWork from "../components/HeroWork";

import WorkChalange from "../components/WorkChalange";
import Gallery from "../components/Gallery";
import Playwell from "../assets/playwell-main.webp";
import Workout from "../assets/workout-prev.webp";
import EbikeLanding from "../assets/ebike.webp";
import EbikeAbout from "../assets/ebikeabout.webp";
import EbikePict from "../assets/ebikepicture.webp";
import EbikeContact from "../assets/ebikecontact.webp";
import EbikeShop from "../assets/ebikeshop.webp";
import EbikeBuy from "../assets/ebikebuy.webp";


const images = [
  Hero,
  EbikeLanding,
  EbikeAbout,
  EbikePict,
  EbikeContact,
  EbikeShop,
  EbikeBuy
];

const Ebike = () => {
  return (
    <div className="h-full pt-32 w-[90%] mx-auto lg:w-[95%] md:w-[98%] sm:w-full px-2 md:pt-32 sm:pt-24">
      <HeroWork
        title="Ebike"
        client="Ebike"
        time="One month"
        service="Webdev & Design"
        website="Ebike"
        image={Hero}
      />
      <WorkChalange
        chalange="The online store offers electric bicycles and has designed an attractive layout to inform customers about its products. The website is available in two color variations, a calm light theme, and a bold dark theme. The website's primary goal is to showcase the available products and their features clearly. The website's technical aspect is designed to ensure secure transactions for customers. "
        goal="The primary objective was to create a user-friendly eshop that allowed users to buy electric bike. The focus was on simplicity and ease of use. The platform was designed to be accessible to all users, regardless of technical knowledge.  "
        solution="React JS was utilized in the frontend of the project to build a well-functioning user interface. The backend was developed using Node JS, and the database used was MongoDB. Stripe JS was integrated into the website's payment system to ensure secure transactions. The website provides a seamless shopping experience, allowing customers to purchase their electric bicycles and accessories with ease. The combination of React JS, Node JS, and MongoDB resulted in a powerful website that provides an exceptional user experience"
      />
      <Gallery
        images={images}
        prev="E-bike"
        linkPrev="/playwell"
        imagePrev={Playwell}
        next="Workout"
        linkNext="/workout"
        imageNext={Workout}
        live="https://ebike-eight.vercel.app/"
      />
    </div>
  );
};

export default Ebike;
