import { React, useEffect, useRef } from "react";
import ev from "../asset/ev.png";
import Typed from "typed.js";
import { motion } from "framer-motion";
import About from "../components/About";

const Home = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Project", "Battery", "EVs", "Technology"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div name="home" className="w-full h-screen relative">
      <div className="bg-black h-screen flex items-center">
        <img
          className="w-full h-screen object-cover opacity-40 animate-pulse"
          src={ev}
          alt="Blue"
        />
      </div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center p-4 ">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
          }}
          className="container bg-blue-600 bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-10 border-r-0 border-b-0 backdrop-filter backdrop-blur-md max-w-3xl mx-auto p-4 shadow-md shadow-[#694cdf]"
        >
          <h1 className="cursor-pointer contents text-[#00ffff] md:text-5xl text-2xl font-bold select-none">
            STARTUP{" "}
            <span
              className="font-poppins text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-[#00ffff]"
              ref={el}
            ></span>
          </h1>
        </motion.div>
      </div>

      <About />
    </div>
  );
};

export default Home;
