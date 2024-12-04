import HeroDekstop from "../images/homepage/hero-bg-desktop.jpg";
import HeroTablet from "../images/homepage/hero-bg-tablet.jpg";
import HeroMobile from "../images/homepage/hero-bg-mobile.jpg";

import { Link } from "react-router-dom";

import Logo from "../images/logo.svg";

export const Hero = () => {
  return (
    <div className=" relative lg:max-w-[1440px] lg:h-[820px]  md:h-[992px] max-w-full h-[748px] mx-auto text-white ">
      <div className="absolute top-0  w-full h-full ">
        <img
          className="lg:block hidden object-cover w-full h-full"
          src={HeroDekstop}
          alt="HeroDekstop"
        />
        <img
          className=" md:hidden block object-cover w-full h-full"
          src={HeroMobile}
          alt="HeroMobile"
        />
        <img
          className="lg:hidden md:block hidden object-cover w-full h-full"
          src={HeroTablet}
          alt="HeroTablet"
        />
        <div className="absolute lg:top-0 bg-black lg:w-[500px] lg:h-full bottom-0 md:h-[60%]    w-full h-[70%]  z-20">
          <img
            className=" absolute lg:block hidden lg:left-[167px] lg:top-[65px]"
            src={Logo}
            alt="Logo"
          />
          <div className="lg:absolute  lg:left-[167px] lg:top-[258px]  lg:w-[507px] lg:h-[364px] lg:text-start lg:items-start md:w-[689px] md:h-[402px] text-center  items-center mx-auto w-[327px] h-[364px] mt-2  flex flex-col justify-between   z-20">
            <img
              className="lg:hidden block md:w-[103px] md:h-[40px] w-[82px] h-[32px]  "
              src={Logo}
              alt="logo"
            />

            <h1 className="lg:text-[80px] lg:tracking-[-1px] lg:leading-[80px] lg:px-0 md:text-[48px] md:tracking-[-0.6px] md:leading-[64px] text-[32px] tracking-[-0.4px] leading-[40px] font-light ">
              Exquisite dining <span className="block"> since 1989 </span>
            </h1>
            <p className="lg:w-[445px] md:text-[20px]  md:leading-[30px] lg:px-0 md:px-12 ">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <Link to="/booking">
              <button className="w-[245px] h-[64px] tracking-[2.5px] leading-[16px] hover:bg-white hover:text-black duration-500 font-semibold border">
                BOOK A TABLE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
