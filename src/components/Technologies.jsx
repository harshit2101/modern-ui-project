import React from "react";
import { useParams } from "react-router-dom";
import dataSource from '../data/technologyData'

const Technologies = () => {
  const { id } = useParams();
  const data=dataSource.map((data)=>data)

  return (
    <div className="h-screen w-full bg-black">
      {id === data[0].id && <p className="text-white">{data[0].name}</p>}
      {id === data[1].id && <p className="text-white">{data[1].name}</p>}
      {id === data[2].id && <p className="text-white">{data[2].name}</p>}

     
    </div>
  );
};

export default Technologies;
