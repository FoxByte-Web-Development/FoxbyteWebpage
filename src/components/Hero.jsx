import React, { useState } from "react";
import hero from "../assets/images/hero.png";
function Hero({ handleContactClick }) {
  function handleClick() {
    handleContactClick(true);
    setTimeout(() => {
      handleContactClick(false);
    }, 1000);
  }
  return (
    <>
      <div className="hero flex justify-center sm:flex-row flex-col items-center h-screen sm:mt-2 mt-10">
        <div className=" capitalize  sm:w-[48%] w-full sm:px-7 px-3 text-black">
          <h1 className="font-normal text-[#333333]   lg:text-[40px] sm:text-[1.6em] xs:text-[1em] text-[1em] lg:leading-[1.3em] mt-2 ">
            BIENVENIDO A FOXBYTE
          </h1>
          <p className="py-3 leading-8 text-[#212121]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At
            elementum eu facilisis sed odio morbi quis commodo odio. Ullamcorper
            sit amet risus nullam eget felis eget nunc. Feugiat scelerisque
            varius morbi enim nunc faucibus a pellentesque sit. Egestas purus
            viverra accumsan in nisl nisi scelerisque eu ultrices.
          </p>
          <div className="py-4  ">
            <button id="CONOCE" class="button" onClick={handleClick}>
              CONOCE MáS
            </button>
          </div>
        </div>
        <div className="sm:w-[48%] w-full px-2 py-3">
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
