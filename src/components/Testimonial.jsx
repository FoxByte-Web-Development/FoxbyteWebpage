import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonial from "../assets/images/testimonial.png";
function Testimonial() {
  return (
    <div className="bg-[#212121] py-10 " id="EQUIPO">
      <div className="p-4 my-5 text-center  w-full mx-auto">
        <div className="w-72 mx-auto">
          <h1 className="text-2xl font-extrabold py-5 text-white">
            EQUIPO DE TRABAJO
          </h1>
          <div class="separator1 ">
            <span class="dot1"></span>
          </div>
        </div>
      </div>
      <div className="py-6 w-full">
        {/* about */}
        {/* end about */}
        <div className="cards w-full" data-aos="fade-up">
          <TestimonialCard
            name="carlos collado"
            Profession={"Software Developer"}
            profile={testimonial}
          />
          <TestimonialCard
            name="carlos collado"
            Profession={"Software Developer"}
            profile={testimonial}
          />{" "}
          <TestimonialCard
            name="carlos collado"
            Profession={"Software Developer"}
            profile={testimonial}
          />
          <TestimonialCard
            name="carlos collado"
            Profession={"Software Developer"}
            profile={testimonial}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
