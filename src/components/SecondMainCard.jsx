import souceDesktop from "../images/homepage/locally-sourced-desktop.jpg";

import souceTablet from "../images/homepage/locally-sourced-tablet.jpg";

import souceMobile from "../images/homepage/locally-sourced-mobile.jpg";
import patter1 from "../images/patterns/pattern-divide.svg";

import lines from "../images/patterns/pattern-lines.svg";

export const SecondMainCard = () => {
  return (
    <div className="relative lg:max-w-[1440px] lg:h-[720px]  md:h-[675px] max-w-full  h-[662px] mx-auto flex justify-center items-center  ">
      <div className=" absolute lg:top-[50px] lg:w-[1110px] lg:h-[720px] md:top-[-100px] md:w-[573px] md:h-[675px] w-[327px] h-[662px] top-[-70px]  z-30 flex lg:flex-row-reverse flex-col justify-between items-center ">
        <img
          className="lg:block hidden object-cover w-[540px] h-[720px] shadow-2xl "
          src={souceDesktop}
          alt="fieldDesktop"
        />
        <img
          className="object-cover lg:hidden md:block hidden  shadow-2xl "
          src={souceTablet}
          alt="fieldTablet"
        />

        <img
          className="block md:hidden shadow-2xl"
          src={souceMobile}
          alt="fieldMobile "
        />

        <div className="lg:w-[445px] lg:h-[275px] lg:text-left  lg:items-start md:w-[457px] md:h-[259px] w-[327px] h-[214px] items-center  flex flex-col justify-between text-center  text-[#242B37] ">
          <img className="w-[71px] h-[7] " src={patter1} alt="patter1" />
          <h1 className="md:text-[48px] md:leading-[48px] md:tracking-[0.5px] text-[32px] leading-[40px] tracking-[0.4px] font-bold">
            The most locally <span className="block">sourced food</span>
          </h1>
          <p className="md:text-[20px] md:leading-[30px] text-[16px] leading-[26px]  ">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
        <img
          className="absolute md:block hidden lg:right-[-10%] lg:top-[40%] md:right-[-10%] md:top-[35%]"
          src={lines}
          alt="lines"
        />
      </div>
    </div>
  );
};
