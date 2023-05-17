import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Angular from "../assets/framework/Angular.png";
import Angularjs from "../assets/framework/Angularjs.png";
import ExpressJS from "../assets/framework/ExpressJS.png";
import ReactLogo from "../assets/framework/React.png";

function LogoSlider(props) {
  const [state, setState] = useState({
    items: [Angular, Angularjs, ExpressJS, ReactLogo],
    active: props.active,
    direction: "",
  });

  const generateItems = () => {
    let items = [];
    let level;
    console.log(state.active);
    for (let i = state.active - 2; i < state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = state.items.length + i;
      } else if (i >= state.items.length) {
        index = i % state.items.length;
      }
      level = state.active - i;
      items.push(
        <img key={index} src={state.items[index]} alt={`logo ${index}`} />
      );
    }
    return items;
  };

  const moveLeft = () => {
    let newActive = state.active;
    newActive--;
    setState({
      ...state,
      active: newActive < 0 ? state.items.length - 1 : newActive,
      direction: "left",
    });
  };

  const moveRight = () => {
    let newActive = state.active;
    setState({
      ...state,
      active: (newActive + 1) % state.items.length,
      direction: "right",
    });
  };

  return (
    <div>
      <h1 className="font-bold text-center py-7   lg:text-[40px] sm:text-[1.6em] xs:text-[1em] text-[1em] lg:leading-[1.3em] mt-2 ">
        FRAMEWORKS{" "}
      </h1>
      <div className="slider1">
        <div id="carousel" className="noselect">
          <div className="arrow arrow-left" onClick={moveLeft}>
            <AiOutlineLeft className="w-10 h-10" />
          </div>

          {generateItems()}
          <div className="arrow arrow-right" onClick={moveRight}>
            <AiOutlineRight className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;
