import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Popularfood from "./Popularfood";

export default function Homepage() {
  return (
    <div>
      <h1 className="bg-[#ED6923] text-white h-[50px] items-center text-center font-[400] text-[16px] font-Rancho">
        {" "}
        Free Delivery on Your First Order – Order Now!
      </h1>
      <div className="max-w-7xl mx-auto flex justify-between items-center mt-5">
        <img className="w-[102px] h-[56px]" src="png file 2 2.png" alt="" />
        <img className="w-[65px] h-[65px]" src="Ellipse 2872.png" alt="" />
      </div>
      <Banner />
      <Category />
      <Popularfood />
    </div>
  );
}
