import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Work from "../components/Work";
const Home = () => {
  return (
    <div className=" h-full">
      <Intro />
      <Hero />
      <About />
      <Services />
      <Work />
    </div>
  );
};

export default Home;
