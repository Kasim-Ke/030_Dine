import patter from "../images/patterns/pattern-curve-bottom-right.svg";

import lines from "../images/patterns/pattern-lines.svg";

const BookingPattern = () => {
  return (
    <div className=" relative lg:max-w-[1440px] lg:max-h-screen md:h-[435px] h-[534px] max-w-full mx-auto">
      <div className="">
        <img className=" lg:block hidden" src={patter} alt="pattern" />
        <img
          className="absolute lg:block hidden top-[-45px] left-[55px] "
          src={lines}
          alt="lines"
        />
      </div>
    </div>
  );
};

export default BookingPattern;
