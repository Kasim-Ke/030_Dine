import fieldDesktop from "../images/homepage/enjoyable-place-desktop.jpg";

import fieldTablet from "../images/homepage/enjoyable-place-tablet.jpg";

import fieldMobile from "../images/homepage/enjoyable-place-mobile.jpg";

import patter1 from "../images/patterns/pattern-divide.svg";
import curve from "../images/patterns/pattern-curve-top-right.svg";

export const FristMainCard = () => {
  return (
    <div className="relative lg:max-w-[1440px] lg:h-[720px]  md:h-[775px] max-w-full h-[720px] mx-auto flex justify-center items-center">
      <div className=" absolute lg:top-[-50px] lg:w-[1110px] lg:h-[720px] md:top-[-100px] md:w-[573px] md:h-[675px] w-[327px] h-[662px] top-[-70px]  z-30 flex lg:flex-row flex-col justify-between items-center ">
        <img
          className="lg:block hidden object-cover w-[540px] h-[720px] shadow-2xl "
          src={fieldDesktop}
          alt="fieldDesktop"
        />
        <img
          className="object-cover lg:hidden md:block hidden  shadow-2xl "
          src={fieldTablet}
          alt="fieldTablet"
        />

        <img
          className="block md:hidden shadow-2xl"
          src={fieldMobile}
          alt="fieldMobile "
        />

        <div className="lg:w-[445px] lg:h-[275px] lg:text-left  lg:items-start md:w-[457px] md:h-[259px] w-[327px] h-[214px] items-center  flex flex-col justify-between text-center  text-[#242B37] ">
          <img className="w-[71px] h-[7] " src={patter1} alt="patter1" />
          <h1 className="md:text-[48px] md:leading-[48px] md:tracking-[0.5px] text-[32px] leading-[40px] tracking-[0.4px]   font-bold">
            Enjoyable place <span className="block">for all the family</span>
          </h1>
          <p className="md:text-[20px] md:leading-[30px] text-[16px] leading-[26px]  ">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
      <div className="absolute lg:left-0 lg:top-[30%] md:top-[10%] md:left-[-70%] md:block hidden">
        <img src={curve} alt="curve" />
      </div>
    </div>
  );
};
