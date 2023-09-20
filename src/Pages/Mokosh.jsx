import React from "react";
import HeroWork from "../components/HeroWork";
import WorkChalange from "../components/WorkChalange";
import Gallery from "../components/Gallery";
import Dashboard from "../assets/dashboardgadget.png";
import Hygge from "../assets/hyggehero.png";
import MokoshPc from "../assets/mokosh.png";
import MokoshHero from "../assets/mokoshhero.png";
import MokoshProduct from "../assets/mokoshproduct.png";
import MokoshBlog from "../assets/mokoshblog.png";
import MokoshShop from "../assets/mokoshshop.png";
import MokoshDetails from "../assets/MokoshDetails.png";
import MokoshRelated from "../assets/mokoshrelated.png";
import MokoshSummary from "../assets/mokoshsummary.png";

const images = [
  MokoshHero,
  MokoshProduct,
  MokoshBlog,
  MokoshPc,
  MokoshShop,
  MokoshDetails,
  MokoshRelated,
  MokoshSummary
];

const Mokosh = () => {
  return (
    <div className="h-full pt-32 w-[90%] mx-auto lg:w-[95%] md:w-[98%] sm:w-full px-2 md:pt-32 sm:pt-24">
      <HeroWork
        title="Mokosh"
        client="Mokosh"
        time="One month"
        service="Webdev & Design"
        website="Koselig"
        image={MokoshPc}
      />
      <WorkChalange
        chalange="In this particular project, the design aspect played a critical role, as it needed to evoke the essence and aesthetic of both a cosmetics magazin. To achieve this, the design employed a simple, clean, and orderly approach. The design elements were carefully selected and arranged in a way that conveyed a sense of sophistication and professionalism.
        From a technical standpoint, one of the biggest challenges was finding a way to efficiently store and manage the large number of images and user data required for the project."
        goal="Our goal was to create a website that is enjoyable and user-friendly for both hosts and guests. The design was carefully planned to be simple, intuitive, and accessible to all."
        solution="In this project, I utilized several new solutions that enabled stable and optimized website performance. NEXTJS was used for the frontend and Prisma for the backend. All the images were stored on Cloudinary. These technologies allowed for efficient handling and storage of large amounts of data. The use of NEXTJS ensured fast and responsive user interfaces."
      />
      <Gallery
        images={images}
        prev="Dashboard"
        linkPrev="/admin"
        imagePrev={Dashboard}
        next="Hygge"
        linkNext="/hygge"
        imageNext={Hygge}
        live=""
      />
    </div>
  );
};

export default Mokosh;
