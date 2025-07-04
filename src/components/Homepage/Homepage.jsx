import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Popularfood from "./Popularfood";
import PopularResturant from "./PopularResturant";
import AppIntro from "./AppIntro";
import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <h1 className="bg-[#ED6923] text-white h-[50px] text-center font-[400] text-[16px] p-2.5">
        {" "}
        Free Delivery on Your First Order – Order Now!
      </h1>

      <div className="max-w-7xl mx-auto flex justify-between items-center mt-5">
        <img className="w-[102px] h-[56px]" src="png file 2 2.png" alt="" />
        <Link href="/profile">
          <img className="w-[65px] h-[65px]" src="Ellipse 2872.png" alt="" />
        </Link>
      </div>

      <div
        style={{
          background:
            "linear-gradient(to right, rgba(253, 237, 229, 0), rgba(254, 140, 79, 0.1), rgba(254, 140, 79, 0.2))",
        }}
      >
        <Banner />
        <Category />
        <Popularfood />
        <PopularResturant />
        <AppIntro />
      </div>
    </div>
  );
}
