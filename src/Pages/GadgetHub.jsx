import React from "react";
import HeroWork from "../components/HeroWork";
import WorkChalange from "../components/WorkChalange";
import Gallery from "../components/Gallery";
import Dashboard from "../assets/dashboardgadget.png";
import Mokosh from "../assets/mokoshhero.png";
import GadgethubPc from "../assets/gadgetshop.png";

import GadgethubCategories from "../assets/gadgethubcategories.png";
import GadgethubProducts from "../assets/gadgethubproducts.png";
import GadgethubProduct from "../assets/gadgethubproduct.png";
import GadgethubSummary from "../assets/gadgethubsummary.png";

const images = [
  GadgethubHero,
  GadgethubCategories,
  GadgethubProducts,
  GadgethubPc,
  GadgethubProduct,
  GadgethubSummary,
];

const GadgetHub = () => {
  return (
    <div className="h-full pt-32 w-[90%] mx-auto lg:w-[95%] md:w-[98%] sm:w-full px-2 md:pt-32 sm:pt-24">
      <HeroWork
        title="GadgetHub"
        client="GadgetHub"
        time="One month"
        service="Webdev & Design"
        website="GadgetHub"
        image={GadgethubPc}
      />
      <WorkChalange
        chalange="In this project, the key objective was to create an online store that is both user-friendly and visually engaging. The primary color scheme revolves around shades of orange and gray. The focus was on crafting a shopping experience that is straightforward to navigate while maintaining an aesthetically pleasing and interesting design.
        From a technical standpoint, one of the biggest challenges was finding a way to efficiently store and manage the large number of images and user data required for the project."
        goal="Our primary objective revolved around the creation of a high-performance website capable of efficiently accommodating a significant volume of users. We aimed to strike a balance between robust functionality and a user-friendly interface, ensuring that the platform was both powerful and accessible. This encompassed a comprehensive approach, incorporating all essential features and functionalities to meet the diverse needs of our audience.
        To achieve this, we prioritized a streamlined user experience, focusing on simplicity in navigation and ease of use. We understood that a complex interface can deter users, so our design was carefully crafted to be intuitive and straightforward."
        solution="In the course of this project, I leveraged innovative solutions to ensure a stable and optimized website performance. For the frontend development, I harnessed the power of NEXTJS, while the backend was built using MongoDB. Additionally, for secure and seamless payment processing, I integrated the renowned Stripe platform.

        These technology choices were pivotal in enabling the efficient management and storage of substantial volumes of data. MongoDB, as a NoSQL database, provided flexibility and scalability, while NEXTJS, with its server-rendered React applications, ensured lightning-fast and highly responsive user interfaces."
      />
      <Gallery
        images={images}
        prev="Dashboard"
        linkPrev="/admin"
        imagePrev={Dashboard}
        next="Mokosh"
        linkNext="/mokosh"
        imageNext={Mokosh}
        live="https://gadgethub-nine.vercel.app/"
      />
    </div>
  );
};

export default GadgetHub;
