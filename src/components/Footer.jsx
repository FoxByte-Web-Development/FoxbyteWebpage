import React from "react";
import logotrans from "../assets/images/logotrans.png";

function Footer() {
  return (
    <>
      <footer class="bg-orange-600 py-8 sm:px-20 px-4">
        <div class=" flex flex-wrap justify-between">
          <div class="sm:w-[20%] w-full text-white">
            <h3 class=" uppercase tracking-wider font-bold mb-4 py-2">
              SOBRE NOSOTROS
            </h3>
            <p className=" py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src={logotrans} alt="" className="h-[40px] w-[160px] my-6" />
          </div>
          <div class="sm:w-[20%] w-full text-white">
            <h3 class="text-white uppercase tracking-wider font-bold mb-4">
              Contacto
            </h3>
            <p>
              <a href="mailto:foxbytewebdev@gmail.com">
                foxbytewebdev@gmail.com
              </a>
            </p>
          </div>

          <div class="sm:w-[23%] w-full capitalize">
            <h3 class="text-white uppercase tracking-wider font-bold mb-4">
              equipo de trabajo
            </h3>
            <ul class="text-white text-sm">
              <li class="mb-2">
                <a href="#">rafael Aybar | interaction Designer</a>
              </li>
              <li class="mb-2">
                <a href="#">Ricardo Ramirez | Software Engineer</a>
              </li>
              <li class="mb-2">
                <a href="#">Carlos Collado | Software Engineer</a>
              </li>
              <li class="mb-2">
                <a href="#">Fernando Reyes | Software Engineer</a>
              </li>
            </ul>
          </div>
          <div class="sm:w-[20%] w-full">
            <h3 class="text-white uppercase tracking-wider font-bold mb-4">
              servicios
            </h3>
          </div>
        </div>
        <hr className="h-[1px] " />
        <div className="py-2 flex justify-center items-center text-white">
          <p>©2023. Powered by Foxbyte Software Development</p>
        </div>{" "}
      </footer>
      <div className="py-2 w-full bg-white"></div>
    </>
  );
}

export default Footer;
