import footerdesktop from "../images/homepage/ready-bg-desktop.jpg";
import footertablet from "../images/homepage/ready-bg-tablet.jpg";
import footermobile from "../images/homepage/ready-bg-mobile.jpg";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <div className=" lg:max-w-[1440px] lg:h-full  md:h-[272px] max-w-full h-[328px] mx-auto flex flex-col justify-center items-center text-white ">
      <div className="relative">
        <img
          className="object-cover lg:block hidden w-full "
          src={footerdesktop}
          alt="footerdesktop"
        />

        <img
          className="object-cover lg:hidden md:block hidden w-full "
          src={footertablet}
          alt="footerdesktop"
        />

        <img
          className="object-cover block md:hidden w-full "
          src={footermobile}
          alt="footerdesktop"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
          <div className="lg:w-[1110px] lg:flex-row flex-col mx-6 flex items-center  justify-between">
            <h1 className="md:text-[48px] md:leading-[48px] md:tracking-[0.5px] text-[32px] leading-[40px] tracking-[0.4px] mb-4 font-bold text-center">
              Ready to make a reservation?
            </h1>
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

export default Reservation;
