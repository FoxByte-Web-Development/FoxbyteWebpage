import React from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import figma from "../assets/framework/Figma.png";
import Angular from "../assets/framework/Angular.png";
import Angularjs from "../assets/framework/Angularjs.png";
import ExpressJS from "../assets/framework/ExpressJS.png";
import ReactLogo from "../assets/framework/React.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          image: figma,
          text: "Figma",
        },
        {
          image: ReactLogo,
          text: "React",
        },
        {
          image: ExpressJS,
          text: "Express",
        },
        {
          image: Angular,
          text: "Angular",
        },
        {
          image: Angularjs,
          text: "Angular",
        },
      ],
      active: this.props.active,
      direction: "",
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    var items = [];
    var level;
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <Item
          key={index}
          item={this.state.items[index]}
          level={level}
          active={this.state.active}
        />
      );
    }
    return items;
  }

  moveLeft() {
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left",
    });
  }

  moveRight() {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right",
    });
  }

  render() {
    return (
      <>
        <div className="w-72 mx-auto mb-12">
          <h1 className="text-2xl font-base py-5 text-center">FRAMEWORKS</h1>
          <div class="separator">
            <span class="dot"></span>
          </div>
        </div>
        <div id="carousel" className="noselect  py-2">
          {" "}
          <div className="arrow arrow-left" onClick={this.leftClick}>
            <AiOutlineLeft className="w-10 h-10" />
          </div>
          <ReactTransitionGroup transitionName={this.state.direction}>
            {this.generateItems()}
          </ReactTransitionGroup>
          <div className="arrow arrow-right" onClick={this.rightClick}>
            <AiOutlineRight className="w-10 h-10" />
          </div>
        </div>
      </>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
      item: this.props.item,
    };
  }

  render() {
    const className = `item level${this.props.level} ${
      this.props.active === this.props.level ? "active" : ""
    }`;

    return (
      <div className={className}>
        <img
          src={this.props.item.image}
          alt="img"
          className="w-full h-full"
          width="100"
          height={100}
        />
        <div className="sm:text-lg md:text-sm  text-[9px] leading-3 sm:py-5 py-3 sm:font-bold font-thin text-black uppercase">
          {this.props.item.text}
        </div>
      </div>
    );
  }
}
//   <Carousel items={items} active={0} />,

export default Carousel;
