import React from "react";
import HeroWork from "../components/HeroWork";
import WorkChalange from "../components/WorkChalange";
import Gallery from "../components/Gallery";

import Hygge from "../assets/hygge.png"
import Mokosh from "../assets/mokoshhero.png";
import SendingPc from "../assets/gadgetdashboard.png";
import SendingDashboard from "../assets/dashboardgadget.png";
import SendingOrders from "../assets/sendingorders.png";
import SendingOrder from "../assets/sendingorder.png";
import SendingProducts from "../assets/sendingproducts.png";
import SendingAdd from "../assets/sendingadd.png";


const images = [
  SendingPc,
  SendingDashboard,
  SendingOrders,
  SendingProducts,
  SendingAdd,
  SendingOrder


];

const Sending = () => {
  return (
    <div className="h-full pt-32 w-[90%] mx-auto lg:w-[95%] md:w-[98%] sm:w-full px-2 md:pt-32 sm:pt-24">
      <HeroWork
        title="Sending"
        client="Sending"
        time="One month"
        service="Webdev & Design"
        website="Sending"
        image={SendingPc}
      />
      <WorkChalange
        chalange="In this project, I created a modern and user-friendly dashboard that allows for product updates on GadgetHub and provides control over sales and the shipping of purchased items. The primary objective was to develop a tool with a contemporary design while keeping it simple and intuitive.
        This dashboard offers a comprehensive view of product status, inventory levels, and enables the management of available offers. The implemented solutions ensure effective control over the sales process and tracking of shipment statuses. The modern design not only enhances visual appeal but also makes using the dashboard comfortable and efficient."
        goal="The primary goal of this project was to design and develop a modern, user-friendly dashboard that would empower users to efficiently update products on GadgetHub while maintaining control over sales and the shipping process. This involved creating a visually appealing and intuitive tool to streamline product management and enhance the overall user experience."
        solution="For this project, I successfully implemented an advanced solution by leveraging cutting-edge technologies. To build a robust and high-performance web application, I chose NEXTJS for the frontend, MongoDB for the database, and Tailwind CSS for styling.
        NEXTJS, a powerful React framework, was instrumental in creating a lightning-fast and highly responsive user interface. It allowed for server-side rendering, which significantly improved page load times and overall user experience.
        For data storage and management, I harnessed the capabilities of MongoDB, a NoSQL database known for its flexibility and scalability. This choice ensured efficient handling and storage of large volumes of data, critical for a project of this scale."
      />
      <Gallery
        images={images}
        prev="Hygge"
        linkPrev="/hygge"
        imagePrev={Hygge}
        next="Mokosh"
        linkNext="/mokosh"
        imageNext={Mokosh}
        live="https://gadget-hub-api.vercel.app/"
      />
    </div>
  );
};

export default Sending;
