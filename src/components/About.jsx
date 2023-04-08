import React from "react";
import user from "../asset/user.jpg";
import { Zoom } from "react-awesome-reveal";
import Contact from "./Contact";

const About = () => {
  return (
    <div name="about" className="w-full h-fit pt-16 bg-[#020b1f] text-white">
      <div className="my-20">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-10 pl-4 text-center">
            <p className="text-4xl text-[#EAEAEA] font-bold inline border-b-4 border-[#00ffff]">
              About
            </p>
          </div>

          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 my-8">
            <div className="sm:text-right text-3xl font-bold">
              <p className="text-[#7D8E95]">
                Question. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div>
              <p>
                Answer. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium aspernatur rem sunt architecto? Consequatur, magni.
                Distinctio unde tempore debitis delectus?
              </p>
            </div>
          </div>

          {/* Card */}

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 mb-6 px-8 pt-12 sm:pt-20 text-black">
              {/* 1 */}
              <div className="bg-gradient-to-tl from-black via-gray-900 to-gray-800  rounded-xl shadow-lg shadow-gray-800">
                <div className="p-8 mt-5">
                  <img
                    src={user}
                    className="w-36 mx-auto h-36 object-cover rounded-full mt-[-6rem]"
                    alt=""
                  />
                  <h3 className="font-bold text-2xl my-6 text-gray-200">
                    Name
                  </h3>
                  <Zoom>
                    <p className="text-gray-400 text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi provident iure placeat blanditiis ea sint earum
                      hic iste quibusdam exercitationem.
                    </p>
                  </Zoom>
                </div>
                <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 shadow-md shadow-purple-600 animate-pulse rounded-xl pl-8 py-4 cursor-pointer hover:scale-105">
                  <p className="flex items-center text-black font-semibold">
                    Contact
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="bg-gradient-to-tl from-black via-gray-900 to-gray-800  rounded-xl shadow-lg shadow-gray-800">
                <div className="p-8 mt-5">
                  <img
                    src={user}
                    className="w-36 mx-auto h-36 object-cover  rounded-full mt-[-6rem]"
                    alt=""
                  />

                  <h3 className="font-bold text-2xl my-6 text-gray-200">
                    Name
                  </h3>
                  <Zoom>
                    <p className="text-gray-400 text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi provident iure placeat blanditiis ea sint earum
                      hic iste quibusdam exercitationem.
                    </p>
                  </Zoom>
                </div>
                <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 shadow-md shadow-purple-600 animate-pulse rounded-xl pl-8 py-4 cursor-pointer hover:scale-105">
                  <p className="flex items-center text-black font-semibold">
                    Contact
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="bg-gradient-to-tl from-black via-gray-900 to-gray-800  rounded-xl shadow-lg shadow-gray-800">
                <div className="p-8 mt-5">
                  <img
                    src={user}
                    className="w-36 mx-auto h-36 object-cover  rounded-full mt-[-6rem]"
                    alt=""
                  />

                  <h3 className="font-bold text-2xl my-6 text-gray-200">
                    Name
                  </h3>
                  <Zoom>
                    <p className="text-gray-400 text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi provident iure placeat blanditiis ea sint earum
                      hic iste quibusdam exercitationem.
                    </p>
                  </Zoom>
                </div>
                <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 shadow-md shadow-purple-600 animate-pulse rounded-xl pl-8 py-4 cursor-pointer hover:scale-105">
                  <p className="flex items-center text-black font-semibold">
                    Contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default About;
