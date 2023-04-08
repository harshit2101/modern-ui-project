import React from "react";
import { Zoom } from "react-awesome-reveal";
import Contact from "./Contact";
import { motion } from "framer-motion";

const Solution = () => {
  return (
    <div name="solutions" className="w-full h-fit pt-16 bg-[#020b1f]">
      <div className="my-20">
        <div className="mb-10 pl-4 text-center">
          <p className="text-4xl text-[#EAEAEA] font-bold inline border-b-4 border-[#00ffff]">
            Solutions
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
            }}
            className="text-center"
          >
            <p className="text-3xl py-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              asperiores earum placeat veritatis dignissimos itaque.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
            <div className="border py-8 rounded-xl shadow-xl">
              <Zoom>
                <p className="text-6xl font-bold text-indigo-600">124</p>
              </Zoom>
              <p className="text-gray-400 mt-2">Efficieny</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <Zoom>
                <p className="text-6xl font-bold text-indigo-600">124</p>
              </Zoom>
              <p className="text-gray-400 mt-2">Power</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <Zoom>
                <p className="text-6xl font-bold text-indigo-600">124</p>
              </Zoom>
              <p className="text-gray-400 mt-2">Output</p>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Solution;
