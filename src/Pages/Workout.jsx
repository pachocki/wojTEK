import React from "react";
import Hero from "../assets/Workout.webp";
import HeroWork from "../components/HeroWork";

import WorkChalange from "../components/WorkChalange";
import Gallery from "../components/Gallery";
import Ebike from "../assets/ebike.webp";
import Playwell from "../assets/playwell-main.webp";
import WorkoutLanding from "../assets/workoutlanding.webp";
import WorkoutPricing from "../assets/workoutprices.webp";
import WorkoutExercises from "../assets/workoutexercises.webp";
import WorkoutDetails from "../assets/workoutexercisedetails.webp";
import WorkoutMeals from "../assets/workoutrecipies.webp";
import WorkoutContact from "../assets/workoutcontact.webp";
import WorkoutServices from "../assets/workoutservices.webp";

const images = [
  Hero,
  WorkoutLanding,
  WorkoutPricing,
  WorkoutDetails,
  WorkoutExercises,
  WorkoutMeals,
  WorkoutContact,
  WorkoutServices,
];

const Workout = () => {
  return (
    <div className="h-full pt-32 w-[90%] mx-auto lg:w-[95%] md:w-[98%] sm:w-full px-2 md:pt-32 sm:pt-24">
      <HeroWork
        title="WorkouT"
        client="WorkouT"
        time="Six months"
        service="Webdev & Design"
        website="WorkouT"
        image={Hero}
      />
      <WorkChalange
        chalange="The main challenge of this project was to integrate an external API that would provide all the necessary information for creating a website about fitness and healthy eating. The website's design aimed to look modern and dynamic, capturing the spirit of sports. To achieve this, we used a variety of design elements, such as bold colors, sleek typography, and high-quality images. The integration of the API allowed us to present users with comprehensive information about fitness, including workouts, nutrition plans, and other related content. The site's user experience was optimized for easy navigation, ensuring that users can access the information they need with minimal effort. The project aimed to motivate users to lead a healthy lifestyle by providing them with practical and informative resources. By combining a modern design with comprehensive content, the website was able to effectively communicate the importance of fitness and healthy eating to users."
        goal="The primary goal of this project was to create a modern website that promotes a healthy lifestyle by providing users with essential workout routines and healthy recipe ideas. The site's design aimed to be both sleek and simple, providing users with an intuitive and easy-to-use platform. The website's content was carefully curated to provide users with valuable information on how to lead a healthy lifestyle, including fitness tips and healthy eating advice. By providing a comprehensive range of resources, the website aimed to inspire and motivate users to make positive lifestyle changes. Overall, the project was successful in creating a dynamic, user-friendly website that promotes healthy living and empowers users to take charge of their health and well-being."
        solution="In this project, I utilized React JS and an external API to access essential information for developing a website on healthy eating and fitness. React JS provided a solid foundation for building a responsive user interface that would engage and motivate users to adopt a healthier lifestyle. By integrating the API, the website was able to present users with valuable content, including workout routines, nutritional advice, and healthy recipe ideas. The website's intuitive user interface made it easy for users to navigate the site and find the information they needed. Overall, the project was a success in creating a website that empowers users to make informed decisions about their health and well-being."
      />
      <Gallery
        images={images}
        prev="E-bike"
        linkPrev="/ebike"
        imagePrev={Ebike}
        next="Playwell"
        linkNext="/playwell"
        imageNext={Playwell}
        live="https://pachocki.github.io/workout"
      />
    </div>
  );
};
export default Workout;
