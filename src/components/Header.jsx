import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import uk from "../assets/vector/uk.png";
import spain from "../assets/vector/spain.png";
import world from "../assets/vector/world.png";
import Arrow from "../assets/vector/Arrow.png";

const Header = ({ contactClicked }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full  flex items-center justify-between flex-wrap  py-6  z-50 px-6 bg-white">
      <div className="flex items-center flex-shrink-0  mr-6 cursor-pointer">
        <img src={logo} alt="" className="w-full " />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`w-full block   lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className=" text-sm  lg:flex-grow">
          <a
            href="#hero"
            className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover-animation mr-4"
          >
            INICIO
          </a>
          <span className="text-gray-400 font-thin px-2">/</span>

          <a
            href="#SOBRENOSOTROS"
            className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover-animation mr-4"
          >
            SOBRE NOSOTROS
          </a>
          <span className="text-gray-400 font-thin px-2">/</span>

          <a
            href="#EQUIPO"
            className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover-animation mr-4"
          >
            EQUIPO
          </a>
          <span className="text-gray-400 font-thin px-2">/</span>

          <a
            href="#NUESTROSSERVICIOS"
            className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover-animation mr-4"
          >
            SERVICIOS
          </a>
          <span className="text-gray-400 font-thin px-2">/</span>
          <a
            href="#"
            id="contact-link"
            className={
              contactClicked
                ? "block px-2 mt-4 lg:inline-block lg:mt-0 text-black duration-200  mr-4 active1 "
                : " "
            }
          >
            CONTACTANOS
          </a>
        </div>
      </div>
      <div
        className={`w-full block   lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="hover-rotate ">
          <li class="dropdown dropdown-2">
            <img id="img-world" src={world} alt="world" />
            IDIOMA
            <img className="arrow-idioma px-1" src={Arrow} alt="" />
            <ul class="dropdown_menu dropdown_menu-2">
              <li id="boton-esp" class="dropdown_item-1">
                <div className="botones-idiomas">
                  <img id="icono-idioma" src={spain} alt="" />
                  <p>ESPAÑOL</p>
                </div>
              </li>
              <li id="boton-ing" class="dropdown_item-2">
                <div className="botones-idiomas">
                  <img id="icono-idioma" src={uk} alt="" />
                  <p>INGLES</p>
                </div>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
