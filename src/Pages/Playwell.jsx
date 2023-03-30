import React from "react";
import Hero from "../assets/playwellmonitor.webp";
import HeroWork from "../components/HeroWork";

import WorkChalange from "../components/WorkChalange";
import Gallery from "../components/Gallery";
import Ebike from "../assets/ebike.webp";
import Workout from "../assets/workout-prev.webp";
import PlaywellMain from "../assets/playwellmain.webp";
import PlaywellCourses from "../assets/playwellkurs.webp";
import PlaywellPricing from "../assets/playwellpricing.webp";
import PlaywellTeam from "../assets/playwellteam.webp";
import PlaywellCalendar from "../assets/playwellcalendar.webp";
import PlaywellAbonament from "../assets/playwellabonament.webp";
import PlaywellStripe from "../assets/playwellstripe.webp";

const images = [Hero,PlaywellMain,PlaywellCourses,PlaywellPricing,PlaywellTeam,PlaywellCalendar,PlaywellAbonament,PlaywellStripe]

const Playwell = () => {
  return (
    <div className="h-full pt-32 w-[90%] mx-auto lg:w-[95%] md:w-[98%] sm:w-full px-2 md:pt-32 sm:pt-24">
      <HeroWork
        title="Playwell Online"
        client="Playwell Online"
        time="Six months"
        service="Webdev & Design"
        website="Playwell Online"
        image={Hero}
      />
      <WorkChalange
        chalange="User Interface Design: It was important to create a website that is easy to use and aesthetically pleasing for users.Adapting technologies to make the website fast and communicate seamlessly with the backend.Ensuring the security of the website and information exchange during payment for online courses."
        goal="Our goal was to create a website that is visually appealing and very easy to use and navigate. It was intended to connect younger and older users, with the design of the site drawing inspiration from computer games and tournaments."
        solution="We used several interesting solutions to build this platform. The foundation of this project on the frontend side is React, on the backend side it is Node.js, and the database used is MongoDB. We also used several ready-made solutions such as Stripe for payments, React Big Calendar for a calendar feature, and we created our own bot using discordjs."
      />
        <Gallery images={images}  prev="E-bike" linkPrev="/ebike" imagePrev={Ebike} next="Workout" linkNext="/workout" imageNext={Workout} live="https://playwell-online-exux.vercel.app/" />
    </div>
  );
};

export default Playwell;
