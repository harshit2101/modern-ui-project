import React, { useState } from "react";
import { FiX, FiAlignRight } from "react-icons/fi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "bg-gradient-to-br from-black via-black/90 to-gray-700/90 flex w-full fixed justify-between items-center h-20 px-4 z-10"
          : "flex w-full fixed justify-between items-center h-20 px-4 z-10"
      }
    >
      <div
        className={`text-4xl ${color ? "text-white" : "text-white"} font-bold`}
      >
        <NavLink to="/">
          <h1
            className={
              !nav ? "block cursor-pointer hover:text-[#00ffff]" : "hidden"
            }
          >
            STARTUP
          </h1>
        </NavLink>
      </div>

      <ul
        className={
          color
            ? "hidden lg:flex gap-x-7 lg:gap-x-16 lg:mr-6 ml-3  text-2xl py-5 px-6 text-white select-none"
            : "hidden lg:flex gap-x-7 lg:gap-x-16 lg:mr-6 ml-3 text-2xl bg-gradient-to-br from-black via-black to-gray-700 py-5 px-6 text-white shadow-md shadow-[#00ffff] rounded-2xl select-none"
        }
      >
        <li className="cursor-pointer font-poppins hover:text-gray-400">
          <NavLink to="/" className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>Home</NavLink>
        </li>
        <li
          className="font-poppins flex cursor-pointer"
          onClick={handleDropdown}
        >
          <NavLink className="hover:text-gray-400 ">Technology</NavLink>
          {!dropdown ? (
            <BsChevronDown
              size={23}
              className=" ml-2 relative top-[6px] text-[#00ffff] right-1"
            />
          ) : (
            <BsChevronUp
              size={23}
              className=" ml-2 relative top-[6px] text-[#00ffff] right-1"
            />
          )}
          {dropdown && (
            <div className="absolute mt-16 border-2 bg-gradient-to-br from-black via-black to-gray-700 rounded-lg">
              <ul className="">
                <NavLink to="/technology/sbms" className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>
                  <li className="border-b-2 py-2 px-10 cursor-pointer hover:text-gray-400">
                    SBMS
                  </li>
                </NavLink>
                <NavLink to="/technology/cooling" className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>
                  <li className="px-10 py-2 cursor-pointer hover:text-gray-400">
                    Cooling
                  </li>
                </NavLink>
              </ul>
            </div>
          )}
        </li>
        <li className="cursor-pointer font-poppins hover:text-gray-400">
          <NavLink to="/solutions" className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>Solutions</NavLink>
        </li>
        <li className="cursor-pointer font-poppins hover:text-gray-400">
          <NavLink to="/about" className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>About</NavLink>
        </li>
        <li className="cursor-pointer font-poppins hover:text-gray-400">
          <NavLink to="/contactform" className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>Contact</NavLink>
        </li>
      </ul>

      <div onClick={handleNav} className="lg:hidden text-white z-10">
        {!nav ? <FiAlignRight size={30} /> : <FiX size={35} />}
      </div>

      <ul
        className={`lg:hidden pb-12 absolute bg-gradient-to-br from-black via-gray-900/90 to-gray-600/90 left-0 w-full shadow-md shadow-[#00ffff] pl-9 text-white transition-all duration-[400ms] ease-in ${
          nav ? "top-0 " : "top-[-490px]"
        }`}
      >
        <li className="border-b mt-14 font-poppins duration-500 cursor-pointer">
          <NavLink to="/" onClick={handleNav} className={({ isActive }) =>
                isActive ? "text-red-600" : "text-blue-600"
              }>
            Home
          </NavLink>
        </li>
        <li
          className="border-b mt-3 font-poppins duration-500 cursor-pointer flex"
          onClick={handleDropdown}
        >
          <NavLink>Technology</NavLink>
          {!dropdown ? (
            <BsChevronDown
              size={15}
              className=" ml-2 relative top-[5px] text-[#00ffff] right-1"
            />
          ) : (
            <BsChevronUp
              size={15}
              className=" ml-2 relative top-[5px] text-[#00ffff] right-1"
            />
          )}
        </li>
        {dropdown && (
          <div className="my-4">
            <li
              className="mt-3 font-poppins duration-500 cursor-pointer"
              onClick={handleDropdown}
            >
              <NavLink to="/technology/sbms" onClick={handleNav} className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>
                SBMS
              </NavLink>
            </li>
            <li
              className="mt-3 font-poppins duration-500 cursor-pointer"
              onClick={handleDropdown}
            >
              <NavLink to="/technology/cooling" onClick={handleNav} className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>
                Cooling
              </NavLink>
            </li>
          </div>
        )}
        <li className="border-b mt-3 font-poppins duration-500 cursor-pointer">
          <NavLink to="/solutions" onClick={handleNav} className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>
            Solutions
          </NavLink>
        </li>
        <li className="border-b mt-3 font-poppins duration-500 cursor-pointer">
          <NavLink to="/about" onClick={handleNav} className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>
            About
          </NavLink>
        </li>
        <li className="border-b mt-3 font-poppins duration-500 cursor-pointer">
          <NavLink to="/contactform" onClick={handleNav} className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-gray-100 hover:text-gray-400"
              }>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
