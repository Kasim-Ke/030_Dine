import { Link } from "react-router-dom";

import { useState } from "react";

const BookingForm = () => {
  const [count, setCount] = useState(4);

  const increment = () => {
    if (count < 8) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="relative max-w-[1440px] z-10 mx-auto flex justify-center items-center">
      <div className="absolute xl:left-[800px] lg:top-[285px] lg:left-[605px] md:top-[370px] lg:h-[560px] md:w-[540px] md:h-[545px] h-[585px] w-[327px] top-[463px] shadow-2xl bg-white flex flex-col items-center justify-center ">
        <div className="lg:w-[453px]  md:w-[444px] md:h-[500px] w-[263px] h-[519px] flex flex-col justify-between items-center p-6 gap-6 ">
          <form className="flex flex-col justify-between items-center w-full gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="md:w-[444px] w-[263px] h-[43px] px-4 border-b-[#8E8E8E] border-b-[1px] focus:border-b-black focus-b-2 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="md:w-[444px] w-[263px] h-[43px] px-4 border-b-[#8E8E8E] border-b-[1px] focus:border-b-black focus-b-2 outline-none"
              required
            />
            <div className="flex justify-between items-center md:w-[444px] w-[263px] px-4 border-b-[#8E8E8E] border-b-[1px] focus-within:border-b-black focus-within:b-2 outline-none">
              <p className="w-[90px]">Pick a date</p>
              <input
                type="date"
                name="date"
                className="h-[43px] focus:outline-none"
                required
              />
            </div>
            <div className="flex justify-between items-center md:w-[444px] w-[263px] px-4 border-b-[#8E8E8E] border-b-[1px] focus-within:border-b-black focus-within:b-2 outline-none">
              <p className="w-[90px]">Pick a time</p>
              <input
                type="time"
                name="time"
                className="h-[43px] focus:outline-none"
                required
              />
            </div>
          </form>
          <div className="md:w-[444px] w-[263px] h-[41px] flex items-center justify-between border-black border-b-[1px]">
            <button onClick={decrement} className="h-full w-[50px]">
              -
            </button>
            <h2 className="font-bold">
              {count} {count === 1 ? "Person" : "People"}
            </h2>
            <button onClick={increment} className="h-full w-[50px]">
              +
            </button>
          </div>

          <button className="md:w-[444px] w-[263px] h-[64px] tracking-[2.5px] leading-[16px] bg-black hover:bg-white hover:text-black text-white duration-500 font-semibold border border-black">
            MAKE RESERVATION
          </button>
          <Link to="/">
            <button className="md:w-[444px] w-[263px] h-[54px] tracking-[2.5px] leading-[16px] bg-black hover:bg-white hover:text-black text-white duration-500 font-semibold border border-black">
              BACK
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
