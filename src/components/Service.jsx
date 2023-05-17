import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {} from "module";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import line1 from "../assets/vector/line1.png";
import line2 from "../assets/vector/line2.png";
import line3 from "../assets/vector/line3.png";
// import required modules
import { Pagination, Autoplay } from "swiper";
import ServicesCard from "./ServicesCard";
export default function Testimonial() {
  return (
    <div div className="py-20 my-7">
      <div className="w-72 mx-auto " id="NUESTROSSERVICIOS">
        <div className="py-5 my-5">
          <h1 className="text-2xl font-normal ">NUESTROS SERVICIOS</h1>
          <div class="separator">
            <span class="dot"></span>
          </div>
        </div>
      </div>
      <div className="h-[100%]">
        <div className="h-[100%] p-5 sm:w-[90%] w-full m-auto ">
          <Swiper
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <ServicesCard
                Services={
                  "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed de  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt i culpa qui officia deserunt mollit anim id est laborum."
                }
                name={"DISEñO WEB"}
                lineimg={line1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard
                Services={
                  "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed de  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt i culpa qui officia deserunt mollit anim id est laborum."
                }
                name={"consultoria"}
                lineimg={line2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard
                Services={
                  "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed de  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt i culpa qui officia deserunt mollit anim id est laborum."
                }
                name={"dESARROLLO DE SOFTWARE A MEDIDA"}
                lineimg={line3}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
