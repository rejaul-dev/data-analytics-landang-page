import React from "react";
import BusinessImage from "../assets/business-idea.png";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={BusinessImage} />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] uppercase font-bold">Data Analytics Dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quasi itaque beatae molestiae deserunt inventore sit cum minima.
            Fugit id, esse assumenda ab culpa nisi at dolore vel fugiat
            expedita?
          </p>
          <button className="btn bg-[#000000] w-[200px] rounded-md text-[#00df9a] my-6 py-3 ">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
