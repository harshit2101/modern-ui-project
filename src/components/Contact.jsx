import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-fit bg-black text-white">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 py-8 px-4 gap-y-10">
          <div>
            <h1 className="text-[#00ffff] text-2xl font-poppins">Navigation</h1>
            <ul className="mt-3 text-lg">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-500"
                      : "text-gray-100 hover:text-gray-400"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/technology/sbms"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-500"
                      : "text-gray-100 hover:text-gray-400"
                  }
                >
                  SBMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technology/cooling"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-500"
                      : "text-gray-100 hover:text-gray-400"
                  }
                >
                  Cooling
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/solutions"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-500"
                      : "text-gray-100 hover:text-gray-400"
                  }
                >
                  Solutions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-500"
                      : "text-gray-100 hover:text-gray-400"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/contactform"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-500"
                      : "text-gray-100 hover:text-gray-400"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <h1 className="mb-2 text-xl text-[#00ffff] font-poppins">
                Address
              </h1>
              <p className="text-gray-400">
                <a
                  href={`https://www.google.com/maps/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-b-2 border-gray-700"
                >
                  21-4, yyyyy, xxxx, fqbfebwf 158790
                </a>
              </p>
            </div>

            <div>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-5">
                <div>
                  <p className="mt-5 text-xl text-[#00ffff] font-poppins">
                    Contact Us
                  </p>
                  <div className="flex mt-2">
                    <li className="mr-5 border-black bg-black hover:animate-pulse hover:scale-105">
                      <a
                        href="tel:+917681062550"
                        className=""
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsFillTelephoneFill size={27} className="text-white" />
                      </a>
                    </li>
                    <li className="mr-4 border-black bg-black hover:animate-pulse hover:scale-105">
                      <a
                        href="mailto:harshitverma.2101.hv@gmail.com"
                        className=""
                      >
                        <HiOutlineMail size={35} className="text-white" />
                      </a>
                    </li>
                  </div>
                </div>

                <div>
                  <p className="text-xl text-[#00ffff] font-poppins">Socials</p>
                  <div className="flex mt-2">
                    <li className="mr-4 border-black bg-black hover:animate-pulse hover:scale-105">
                      <a
                        href="https://www.linkedin.com/in/harshit-verma-0a009421b/"
                        className="w-10 h-10 rounded-full overflow-hidden text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin
                          size={35}
                          className="text-white font-size-23 m-auto"
                        />
                      </a>
                    </li>
                    <li className="mr-4 border-black bg-black hover:animate-pulse hover:scale-105">
                      <a
                        href="https://twitter.com/Hv2101"
                        className="w-10 h-10 rounded-full overflow-hidden text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter
                          size={35}
                          className="text-white font-size-23 m-auto"
                        />
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
