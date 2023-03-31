import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    e.preventDefault();

    const formContainer = document.querySelector(".form-container");

    gsap.to(formContainer, {
      duration: 0.5,
      x: "100%",
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(formContainer, {
          duration: 0.5,
          x: 0,
          ease: "power2.inOut",
        });
      },
    });
    emailjs
      .sendForm(
        "service_jhp7tll",
        "template_td6b4f6",
        form.current,
        "Q3EqNhSYzF-QeWh4m"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="py-24 w-[90%] mx-auto 3xl:w-full lg:w-[98%] sm:pb-0 sm:pt-20">
      <div className="bg-paper bg-cover h-full relative form-container">
        <h1 className="text-center text-8xl pb-16 font-bold pt-20 text-orange-600 3xl:text-[9rem] lg:pb-10 lg:text-6xl sm:text-4xl">
          Contact with me
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-1/2 mx-auto gap-2 pb-14  lg:w-2/3 sm:w-[95%] sm:pb-20"
        >
          <label className="text-2xl text-white 3xl:text-4xl lg:text-xl sm:text-[1.2rem]">
            Hello Wojtek ! My name is ...
          </label>
          <input
            type="text"
            name="user_name"
            className=" text-2xl appearance-none  px-2 bg-zinc-700/60  h-10  focus:bg-transparent outline-none focus:outline-none focus:border-none cursor-none 3xl:h-20 3xl:text-3xl lg:text-xl sm:text-sm"
          />
          <label className="text-2xl text-white 3xl:text-4xl lg:text-xl sm:text-[1.2rem]">
            Im writing to you from this email...
          </label>
          <input
            type="email"
            name="user_email"
            className=" text-2xl appearance-none  px-2 bg-zinc-700/60   h-10 focus:bg-transparent outline-none focus:outline-none focus:border-none cursor-none 3xl:h-20 3xl:text-3xl lg:text-xl sm:text-sm"
          />
          <label className="text-2xl text-white 3xl:text-4xl lg:text-xl sm:text-[1.2rem]">
            In this message i want to ask you about...
          </label>
          <textarea
            name="message"
            className="text-2xl h-[30vh] appearance-none  px-2 bg-zinc-700/60  focus:bg-transparent outline-none focus:outline-none focus:border-none cursor-none 3xl:h-[40vh] 3xl:text-3xl sm:text-sm"
          />
          <input
            type="submit"
            value="Send"
            className="bg-orange-600 py-2 w-[100px] 3xl:w-[150px] mt-5 3xl:text-3xl sm:w-[70px] sm:py-1"
          />
        </form>
        <div className="absolute bottom-5 right-10 sm:bottom-2 sm:right-2">
          <div className="flex gap-5 ">
            <span className="underline 3xl:text-3xl text-xl sm:text-lg">
              Github
            </span>
            <span className="underline 3xl:text-3xl text-xl sm:text-lg">
              Linkedin
            </span>
            <span className="underline 3xl:text-3xl text-xl sm:text-lg">
              Instagram
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
