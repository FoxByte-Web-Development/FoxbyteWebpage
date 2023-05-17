import React from "react";

function ServicesCard({ Services, lineimg, name }) {
  return (
    <div className="capitalize sm:w-[80%] w-full mx-auto  py-5">
      <div>
        <h2 className="text-xl font-[600] py-3 text-center ">{name}</h2>
      </div>
      <div className="bg-black-200 px-3  rounded-3xl  py-3 opacity-100 transform-0 ">
        <div className="py-1">
          <p className="text-base sm:px-28 px-2 leading-8">{Services}</p>
        </div>
      </div>
      <div className="mx-auto h-1 w-full py-3 ">
        <img src={lineimg} alt=" " className="h-2 mx-auto" />
      </div>
    </div>
  );
}

export default ServicesCard;
