import React from "react";
import AboutCard from "./AboutCard";
import about from "../assets/images/about.png";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";

export default function About() {
  return (
    <div className="py-24 my-11">
      <div
        className="p-4 my-5 text-center sm:w-[50%] w-full mx-auto"
        id="SOBRENOSOTROS"
      >
        <div className="w-72 mx-auto">
          <h1 className="text-2xl font-normal py-5 ">SOBRE NOSOTROS</h1>
          <div class="separator">
            <span class="dot"></span>
          </div>
        </div>
        <p className="text-sm font-light leading-7 py-8 px-3">
          Somos una compañía dominicana fundada en el año 2022, empeñada en
          brindar soluciones tecnológicas en el ámbito de desarrollo de
          software. Nos enfocamos en ofrecerle a nuestros clientes la mejor
          experiencia en la obtención de productos y servicios de software.
        </p>
      </div>
      <div className="mt-5 sm:w-[90%] w-full mx-auto  py-4">
        <div
          className="flex justify-around items-center flex-wrap gap-3 px-3"
          data-aos="fade-up"
        >
          <AboutCard
            heading={"Misión"}
            detail={
              "Ser una de las empresas líder en el mercado de la República Dominicana, reconocida por brindar soluciones innovadoras y de calidad que generen un impacto positivo en la industria tecnológica. "
            }
            img={about}
          />
          <AboutCard
            heading={"Visión"}
            detail={
              " Proporcionar soluciones tecnológicas de alta calidad en el desarrollo de software que satisfagan las necesidades y expectativas de los clientes, a través de la innovación, el compromiso y la experiencia del servicio. "
            }
            img={about1}
          />
          <AboutCard
            heading={"Valores"}
            detail={
              " Responsabilidad, eficiencia, compromiso, trabajo en equipo, innovación e integridad.. "
            }
            img={about2}
          />
        </div>
      </div>
      <div className="w-[80%] mx-auto py-5 my-11">
        <hr />
      </div>
    </div>
  );
}
