import patter1 from "../images/patterns/pattern-divide.svg";
import salmonDesktopTablet from "../images/homepage/salmon-desktop-tablet.jpg";
import beefDesktopTablet from "../images/homepage/beef-desktop-tablet.jpg";
import chocoDesktopTablet from "../images/homepage/chocolate-desktop-tablet.jpg";

import salmonmobile from "../images/homepage/salmon-mobile.jpg";
import beefmobile from "../images/homepage/beef-mobile.jpg";
import chocomobile from "../images/homepage/chocolate-mobile.jpg";

export const Highlights = () => {
  return (
    <div className=" lg:max-w-[1440px] lg:h-[761px]  md:h-[891px] max-w-full h-[1720px] mx-auto text-white  bg-black flex justify-center items-center  ">
      <div className="lg:w-[1110px] lg:h-[441px] md:w-[573px] md:h-[699px] w-[327px] h-auto justify-between  flex lg:flex-row flex-col ">
        <div className="lg:w-[475px] lg:h-[275px] lg:text-left  lg:items-start md:w-[477px] md:h-[259px] w-[337px] h-[214px] items-center  flex flex-col justify-between text-center mx-auto lg:mx-0 md:mb-[80px] mb-10 ">
          <img className="w-[71px] h-[7] mb-5 " src={patter1} alt="patter1" />

          <h1 className="md:text-[48px] md:leading-[48px] md:tracking-[0.5px] text-[32px] leading-[40px] tracking-[0.4px]   font-bold mb-4">
            A few highlights from our menu
          </h1>
          <p className="md:text-[20px] md:leading-[30px] text-[16px] leading-[26px]  ">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className="lg:w-[540px] lg:h-[386px] my-auto  md:w-[573px] md:h-[386px] w-[327px] h-[1346px]   flex flex-col justify-between ">
          <div className="md:w-full md:h-[96px] flex md:flex-row flex-col  justify-between ">
            <img
              className="md:block hidden"
              src={salmonDesktopTablet}
              alt="salmonDesktopTablet"
            />
            <img
              className="block md:hidden"
              src={salmonmobile}
              alt="salmonmobile"
            />
            <div className="lg:w-[350px] md:h-[82px] h-[173px] md:w-[383px] flex flex-col  md:text-left  text-center items-center md:items-start justify-center  ">
              <h2 className="text-[20px] font-bold mb-2">
                Seared Salmon Fillet
              </h2>
              <p className="pr-2">
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <hr className="border-[#9E7F66]" />

          <div className="md:w-full md:h-[96px] flex md:flex-row flex-col  justify-between  ">
            <img
              className="md:block hidden"
              src={beefDesktopTablet}
              alt="beefDesktopTablet"
            />
            <img
              className="block md:hidden"
              src={beefmobile}
              alt="beefmobile"
            />
            <div className="lg:w-[350px] md:h-[82px] h-[173px] md:w-[383px] flex flex-col  md:text-left  text-center items-center md:items-start justify-center  ">
              <h2 className="text-[20px] font-bold mb-2">
                Rosemary Filet Mignon
              </h2>
              <p className="pr-2">
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <hr className="border-[#9E7F66]  " />
          <div className="md:w-full md:h-[96px] flex md:flex-row flex-col  justify-between  ">
            <img
              className="md:block hidden"
              src={chocoDesktopTablet}
              alt="chocoDesktopTablet"
            />
            <img
              className="block md:hidden"
              src={chocomobile}
              alt="chocomobile"
            />
            <div className="lg:w-[350px] md:h-[82px] h-[173px] md:w-[383px] flex flex-col  md:text-left  text-center items-center md:items-start justify-center  ">
              <h2 className="text-[20px] font-bold mb-2">
                Summer Fruit Chocolate Mousse
              </h2>
              <p className="pr-2">
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
