import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Carousel from "./components/Framework";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Service from "./components/Service";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [contactClicked, setContactClicked] = useState(false);

  function handleContactClick(value) {
    setContactClicked(value);
  }
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Header contactClicked={contactClicked} />
      <Hero handleContactClick={handleContactClick} />
      <About />
      <Service />
      <Testimonial />
      <div className="my-24">
        <Carousel items={items} active={0} />,
      </div>

      <Footer />
    </>
  );
}

export default App;
