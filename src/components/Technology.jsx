import React from "react";
import icebattery from "../asset/icebattery.png";
import car5 from "../asset/car5.png";
import bluebattery5 from "../asset/bluebattery5.png";
import { Link } from "react-router-dom";
import dataSource from "../data/technologyData";
import Contact from "./Contact";

const Technology = () => {
  const ids = dataSource.map((data) => data.id);

  return (
    <div name="technology" className="w-full h-fit pt-16 bg-[#020b1f] text-white">
      <div className="flex flex-col justify-center items-center my-20">
        <div className=" mb-10 pl-4 text-center">
          <p className="text-4xl text-[#EAEAEA] font-bold inline border-b-4 border-[#00ffff]">
            Technology
          </p>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 py-10 px-4 gap-y-10">
          {/* 1 */}

          <div className=" sm:mr-5 flex justify-center items-center">
            <img
              className="w-full rounded-br-3xl rounded-tl-3xl mx-auto shadow-md shadow-[#00ffff]"
              src={bluebattery5}
              alt=""
            />
          </div>
          <div className="border-b-2 border-t-2 sm:ml-5 border-[#1b38c9]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quae minima accusantium dolorem, ipsa similique! Ipsum beatae
              inventore quibusdam perspiciatis voluptatibus, officia velit ipsa
              fugiat quisquam quaerat, deserunt ut expedita, sapiente aliquid
              mollitia quam quos odio amet nihil! Consequatur eveniet accusamus
              minima, perspiciatis sit at libero cum blanditiis ea ipsum?
            </p>
            <Link to={`/technology/${ids[0]}`}>
              <span className="text-blue-400 m-5 border-b-2 border-blue-500">
                Read more
              </span>
            </Link>
          </div>

          {/* 2 */}
          <div className="sm:mr-5 flex justify-center items-center">
            <img
              className="w-full rounded-br-3xl rounded-tl-3xl mx-auto shadow-md shadow-[#00ffff]"
              src={icebattery}
              alt=""
            />
          </div>

          <div className="border-b-2 border-t-2 sm:ml-5 border-[#1b38c9]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate repudiandae sint blanditiis expedita vitae? Cumque
              doloribus aut, quae qui quaerat magni omnis eligendi harum! Nulla
              deserunt, a ea repudiandae praesentium officiis corrupti totam
              dignissimos. Libero reiciendis molestias esse quasi Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Consectetur placeat
              omnis illo id vel voluptatem ducimus, iure culpa mollitia maxime.
            </p>
            <Link to={`/technology/${ids[1]}`}>
              <span className="text-blue-400 m-5 border-b-2 border-blue-500">
                Read more
              </span>
            </Link>
          </div>

          {/* 3 */}
          <div className="sm:mr-5 flex justify-center items-center">
            <img
              className="w-full rounded-br-3xl rounded-tl-3xl mx-auto shadow-md shadow-[#00ffff]"
              src={car5}
              alt=""
            />
          </div>

          <div className="border-b-2 border-t-2 sm:ml-5 border-[#1b38c9]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              similique qui modi fugit facilis rem accusamus, id earum
              repellendus necessitatibus deserunt corporis officia temporibus,
              mollitia aut ratione dolore ipsam, reprehenderit doloremque porro
              iure nulla. Quas placeat hic ut incidunt molestiae, non facilis
              quae enim? Asperiores iure praesentium ducimus eius molestiae?
            </p>
            <Link to={`/technology/${ids[2]}`}>
              <span className="text-blue-400 m-5 border-b-2 border-blue-500">
                Read more
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Contact/>
    </div>
  );
};

export default Technology;

