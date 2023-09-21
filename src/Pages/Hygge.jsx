import React from "react";
import HeroWork from "../components/HeroWork";
import WorkChalange from "../components/WorkChalange";
import Gallery from "../components/Gallery";
import Dashboard from "../assets/dashboardgadget.png";
import Mokosh from "../assets/mokoshhero.png";
import HyggePc from "../assets/hygge.png";
import HyggeHero from "../assets/hyggehero.png";
import HyggePlaces from "../assets/hyggeplaces.png";
import HyggeAbout from "../assets/hyggeabout.png";
import HyggeRecomended from "../assets/hyggerecomended.png";
import HyggeDiscover from "../assets/hyggediscover.png";
import HyggeProperties from "../assets/hyggeproperties.png";
import HyggeHome from "../assets/hyggehome.png";

const images = [
  HyggeHero,
  HyggePlaces,
  HyggeAbout,
  HyggePc,
  HyggeRecomended,
  HyggeDiscover,
  HyggeProperties,
  HyggeHome
];

const Hygge = () => {
  return (
    <div className="h-full pt-32 w-[90%] mx-auto lg:w-[95%] md:w-[98%] sm:w-full px-2 md:pt-32 sm:pt-24">
      <HeroWork
        title="Hygge"
        client="Hygge"
        time="One month"
        service="Webdev & Design"
        website="Hygge"
        image={HyggeHero}
      />
      <WorkChalange
        chalange="In this project, my primary focus was on creating a visually appealing design that would be both colorful and easy on the eyes. The aim was to strike a balance between vibrancy and user-friendliness. The website revolves around the theme of vacation cottage rentals, so the user interface was intentionally kept simple and intuitive. This approach caters not only to users looking to list their properties but also to those searching for the perfect getaway.
        From a technical standpoint, one of the biggest challenges was finding a way to efficiently store and manage the large number of images and user data required for the project."
        goal="Our goal was to create a website that is enjoyable and user-friendly for both hosts and guests. The design was carefully planned to be simple, intuitive, and accessible to all."
        solution="In this project, I utilized several new solutions that enabled stable and optimized website performance. NEXTJS was used for the frontend and Prisma for the backend. All the images were stored on Cloudinary. These technologies allowed for efficient handling and storage of large amounts of data. The use of NEXTJS ensured fast and responsive user interfaces."
      />
      <Gallery
        images={images}
        prev="Dashboard"
        linkPrev="/dashboard"
        imagePrev={Dashboard}
        next="Mokosh"
        linkNext="/mokosh"
        imageNext={Mokosh}
        live="https://hygge-eight.vercel.app/"
      />
    </div>
  );
};

export default Hygge;
