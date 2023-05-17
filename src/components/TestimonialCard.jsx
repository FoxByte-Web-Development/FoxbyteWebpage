import React from "react";

function TestimonialCard({ name, profile, Profession }) {
  return (
    <>
      <div className="cards">
        <div className="card1">
          <span className="close" />
          <span className="arrow" />
          <article>
            <h2>{name}</h2>
            <div className="title">{Profession}</div>
            <div className="pic">
              <img src={profile} />
            </div>
            <div className="desc">
              Elijah has collected bugs since they were six years old and now
              has many dozen bugs but none in their pants.
            </div>
          </article>
          <div className="actions">
            <button className="btn w-full">
              <span className="font-semibold capitalize text-lg">likedin</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
