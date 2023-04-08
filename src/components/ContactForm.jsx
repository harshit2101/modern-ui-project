import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Contact from "./Contact";

const ContactForm = () => {
  return (
    <div name="contact" className="w-full h-fit pt-16 bg-[#020b1f] text-white">
      <div className="mt-20 mb-16 flex flex-col justify-center items-center">
        <div className=" border-2 border-gray-600 shadow-md shadow-gray-500 bg-gray-900 rounded-2xl sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1100px]">
          <div className="mb-10 pl-4 text-center">
            <p className="text-4xl text-[#EAEAEA] font-bold inline border-b-4 border-[#00ffff]">
              Contact Us
            </p>
          </div>
          <div className="max-w-[1100px] w-full grid sm:grid-cols-2 py-8 px-5 gap-y-10 gap-x-10 mx-auto">
            <div>
              <motion.p
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                }}
                className="text-2xl font-poppins text-[#00ffff] font-bold"
              >
                Submit the form or Contact Us:
              </motion.p>

              <div>
                <h1 className="mt-10 sm:mt-20 mb-2 text-xl font-sans font-semibold">
                  Address
                </h1>
                <p className="text-gray-400">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=80-1, Baner Rd, Pune, Maharashtra 411045`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-b-2 border-gray-700"
                  >
                    21-4, yyyyy, xxxx, fwbvoiwe 235872
                  </a>
                </p>
              </div>
              <div>
                <h1 className="mt-6 mb-2 text-xl font-sans font-semibold">
                  Phone
                </h1>
                <p className="text-gray-400">+91-7681062550</p>
              </div>
              <div>
                <h1 className="mt-6 mb-2 text-xl font-sans font-semibold">
                  Mail Us
                </h1>
                <p className="text-gray-400">harshitverma.2101.hv@gmail.com</p>
              </div>

              <div>
                <p className="mt-6 text-xl font-sans font-semibold">Socials</p>
                <ul>
                  <div className="flex mt-4">
                    <li className="mr-4 ">
                      <a
                        href="https://www.linkedin.com/in/harshit-verma-0a009421b/"
                        className=""
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin size={30} className="hover:text-black" />
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        href="https://twitter.com/Hv2101"
                        className=" "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter size={35} className="hover:text-black" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl z-2 border border-gray-700 border-opacity-20 backdrop-filter backdrop-blur-sm bg-opacity-20 bg-white p-4">
              <form className="flex flex-col max-w-[700px] w-full mt-7 ">
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    className="border-b focus:outline-none focus:border-[#00ffff] shadow-sm shadow-[#00ffff] focus:border-b-2 transition-colors peer w-full p-2 bg-gradient-to-t from-black to-gray-900 text-black rounded-md"
                    autoComplete="off"
                  />
                  <label
                    htmlFor="username"
                    className="absolute select-none left-3 top-2 text-gray-400 cursor-text peer-focus:text-sm peer-focus:-top-5 peer-focus:text-[#00ffff] transition-all"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative mt-6">
                  <input
                    type="text"
                    id="email"
                    className="border-b focus:outline-none focus:border-[#00ffff] shadow-sm shadow-[#00ffff] focus:border-b-2 transition-colors peer w-full p-2 bg-gray-200 bg-gradient-to-t from-black to-gray-900 text-black rounded-md"
                    autoComplete="off"
                  />
                  <label
                    htmlFor="email"
                    className="absolute select-none left-3 top-2 text-gray-400 cursor-text peer-focus:text-sm peer-focus:-top-5 peer-focus:text-[#00ffff] transition-all"
                  >
                    Your Email
                  </label>
                </div>

                <div className="relative my-6">
                  <input
                    type="text"
                    id="username"
                    className="border-b focus:outline-none focus:border-[#00ffff] shadow-sm shadow-[#00ffff] focus:border-b-2 transition-colors peer w-full p-2 bg-gradient-to-t from-black to-gray-900 text-black rounded-md"
                    autoComplete="off"
                  />
                  <label
                    htmlFor="username"
                    className="absolute select-none left-3 top-2 text-gray-400 cursor-text peer-focus:text-sm peer-focus:-top-5 peer-focus:text-[#00ffff] transition-all"
                  >
                    Subject
                  </label>
                </div>

                <div className="relative mt-1">
                  <textarea
                    type="text"
                    id="message"
                    className="border-b focus:outline-none focus:border-[#00ffff] shadow-sm shadow-[#00ffff] focus:border-b-2 transition-colors peer w-full p-2 bg-gray-200 bg-gradient-to-t from-black to-gray-900 text-black rounded-md"
                    autoComplete="off"
                    name="message"
                    rows="6"
                  />
                  <label
                    htmlFor="message"
                    className="absolute select-none left-3 top-2 text-gray-400 cursor-text peer-focus:text-sm peer-focus:-top-5 peer-focus:text-[#00ffff] transition-all"
                  >
                    Message or Feedback
                  </label>
                </div>

                <button className="text-white bg-black border-2 hover:bg-gradient-to-r from-[#0a345e] via-[#0a345e] to-[#056697] shadow-md hover:shadow-[#056697] px-4 py-3 my-8 max-w-full flex justify-center items-center rounded-md">
                  Let's collaborate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default ContactForm;
