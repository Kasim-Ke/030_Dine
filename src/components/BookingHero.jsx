import HeroDesktop from "../images/booking/hero-bg-desktop.jpg";
import HeroTablet from "../images/booking/hero-bg-tablet.jpg";
import HeroMobile from "../images/booking/hero-bg-mobile.jpg";

import logo from "../images/logo.svg";

export const BookingHero = () => {
  return (
    <div className="relative lg:max-w-[1440px] h-[600px] max-w-full mx-auto text-white">
      <div className="absolute top-0 w-full h-full -z-10">
        <img
          className="lg:block hidden object-cover w-full h-full"
          src={HeroDesktop}
          alt="HeroDesktop"
        />
        <img
          className="md:hidden block object-cover w-full h-full"
          src={HeroMobile}
          alt="HeroMobile"
        />
        <img
          className="lg:hidden md:block hidden object-cover w-full h-full"
          src={HeroTablet}
          alt="HeroTablet"
        />
        <div className="w-full flex justify-center">
          <img
            className="absolute lg:left-[163px] lg:top-[65px] md:left-[40px] md:mx-0 top-[56px]"
            src={logo}
            alt="logo"
          />
        </div>

        <div className="absolute lg:left-[165px] lg:top-[258px] md:top-[166px] top-[185px] lg:mx-0  left-0 right-0 mx-auto w-[327px] h-[207px] sm:w-[327px] sm:h-[157px] md:w-[690px] md:h-[166px] lg:w-[445px] lg:h-[188px] lg:text-left text-center flex flex-col justify-between">
          <h1 className="lg:text-[80px] lg:leading-[80px] lg:tracking-[-1px] md:text-[48px] md:leading-[64px] md:tracking-[-0.6px] font-light text-[32px] leading-[40px] tracking-[-0.4px]">
            Reservations
          </h1>
          <p className="md:text-[20px] md:leading-[30px] lg:px-0 md:px-10 text-[16px] leading-[26px]">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        </div>
      </div>
    </div>
  );
};
