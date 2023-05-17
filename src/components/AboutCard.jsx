import React from "react";

function AboutCard({ img, heading, detail }) {
  return (
    <>
      <div className="card relative px-3 w-72 h-64  border-t-2 border-b-0 border-l-0 border-r-0 border-black ">
        <h1 className="font-bold text-lg  p-2 ">{heading}</h1>
        <p className="font-[400] px-2  text-sm py-1">{detail} </p>
        <img src={img} alt="" className="w-10 h-10 absolute bottom-2 right-2" />
      </div>
    </>
  );
}

export default AboutCard;
