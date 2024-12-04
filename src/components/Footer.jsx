import Logo from "../images/logo.svg";

export const Footer = () => {
  return (
    <div className="  lg:max-w-[1440px] lg:h-[240px]  md:h-[328px] max-w-full h-[440px] mx-auto flex flex-col justify-center items-center text-white ">
      <div className="h-full w-full flex items-center justify-center  bg-black">
        <div className="lg:w-[1110px] lg:h-[86px] md:w-[689px] md:h-[202px] w-[327px] h-[282px] flex   items-center   justify-between  md:flex-row flex-col ">
          <div className="md:h-full h-[82px]  ">
            <img
              className="object-cover w-[103px] h-[40px] "
              src={Logo}
              alt="logo"
            />
          </div>

          <div className="lg:w-[814px] md:w-[456px] w-[327px] h-full flex justify-between lg:flex-row md:flex-col  text-[14px] leading-[28px] tracking-[2px]  flex-col text-center md:text-left  ">
            <div className="lg:w-[244px]">
              <p>Marthwaite, Sedbergh</p>
              <p>Cumbria</p>
              <p>+00 44 123 4567</p>
            </div>
            <div className="lg:w-[446px]">
              <p>OPEN TIMES</p>
              <p>MON - FRI: 09:00 AM - 10:00 PM</p>
              <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
