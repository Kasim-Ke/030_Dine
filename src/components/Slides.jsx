import { useState } from "react";
import gatheringDesktop from "../images/homepage/family-gathering-desktop.jpg";
import gatheringTablet from "../images/homepage/family-gathering-tablet.jpg";
import gatheringMobile from "../images/homepage/family-gathering-mobile.jpg";

import specialDesktop from "../images/homepage/special-events-desktop.jpg";
import specialTablet from "../images/homepage/special-events-tablet.jpg";
import specialMobile from "../images/homepage/special-events-mobile.jpg";

import socialDesktop from "../images/homepage/social-events-desktop.jpg";
import socialTablet from "../images/homepage/social-events-tablet.jpg";
import socialMobile from "../images/homepage/social-events-mobile.jpg";

import lines from "../images/patterns/pattern-lines.svg";
import { Link } from "react-router-dom";

export const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState("family");

  const slides = {
    family: {
      title: "Family Gathering",
      description:
        "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
      desktopImage: gatheringDesktop,
      tabletImage: gatheringTablet,
      mobileImage: gatheringMobile,
    },
    special: {
      title: "Special Events",
      description:
        "Whether it’s a romantic dinner or special date you’re celebrating with others, we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
      desktopImage: specialDesktop,
      tabletImage: specialTablet,
      mobileImage: specialMobile,
    },
    social: {
      title: "Social Events",
      description:
        "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
      desktopImage: socialDesktop,
      tabletImage: socialTablet,
      mobileImage: socialMobile,
    },
  };

  const current = slides[currentSlide];

  return (
    <div className="lg:max-w-[1440px] lg:h-[920px] md:h-[1021px] max-w-full h-[1044px] mx-auto flex justify-center items-center">
      <div className="lg:w-[1110px] lg:h-[600px] md:w-[689px] md:h-[781px] w-[327px] h-[840px] flex lg:flex-row flex-col items-center justify-between">
        <div className="relative">
          <img
            className="absolute md:block hidden top-[-6%] left-[-8%]"
            src={lines}
            alt="lines"
          />
          <img
            className="lg:block hidden shadow-2xl"
            src={current.desktopImage}
            alt={currentSlide + " Desktop"}
          />
          <img
            className="lg:hidden md:block hidden shadow-2xl"
            src={current.tabletImage}
            alt={currentSlide + " Tablet"}
          />
          <img
            className="md:hidden block shadow-2xl mb-7"
            src={current.mobileImage}
            alt={currentSlide + " Mobile"}
          />
        </div>

        <div className="lg:w-[570px] lg:h-[468px] lg:flex-col md:w-[660px] md:h-[400px] h-[440px] flex-col-reverse flex lg:items-end items-center justify-between">
          <div className="lg:w-[445px] lg:h-[281px] lg:text-left md:w-[457px] md:h-[281px] h-[250px] lg:items-start text-center items-center flex flex-col justify-between mb-5">
            <div className="text-[#242B37]">
              <h1 className="md:text-[48px] md:leading-[48px] md:tracking-[0.5px] text-[32px] leading-[40px] tracking-[0.4px] font-bold mb-5">
                {current.title}
              </h1>
              <p className="md:text-[20px] md:leading-[30px] text-[16px] leading-[26px]">
                {current.description}
              </p>
            </div>
            <Link to="/booking">
              <button className="w-[245px] h-[64px] tracking-[2.5px] leading-[16px] bg-black hover:bg-white hover:text-black text-white duration-500 font-semibold border border-black">
                BOOK A TABLE
              </button>
            </Link>
          </div>
          <div className="lg:w-[445px] lg:h-[108px] w-full h-[116px] flex lg:flex-col md:flex-row flex-col md:items-start bg-white justify-between items-center">
            <button
              onClick={() => setCurrentSlide("family")}
              className={`font-semibold text-[17px] leading-[28px] tracking-[2.5px] ${
                currentSlide === "family" ? "text-[#4C4C4C]" : "text-[#bbbaba]"
              } hover:text-[#4C4C4C] focus:text-[#4C4C4C] duration-300`}
            >
              FAMILY GATHERING
            </button>
            <button
              onClick={() => setCurrentSlide("special")}
              className={`font-semibold text-[17px] leading-[28px] tracking-[2.5px] ${
                currentSlide === "special" ? "text-[#4C4C4C]" : "text-[#bbbaba]"
              } hover:text-[#4C4C4C] focus:text-[#4C4C4C] duration-300`}
            >
              SPECIAL EVENTS
            </button>
            <button
              onClick={() => setCurrentSlide("social")}
              className={`font-semibold text-[17px] leading-[28px] tracking-[2.5px] ${
                currentSlide === "social" ? "text-[#4C4C4C]" : "text-[#bbbaba]"
              } hover:text-[#4C4C4C] focus:text-[#4C4C4C] duration-300`}
            >
              SOCIAL EVENTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
