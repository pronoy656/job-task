import React from "react";
import { Lobster_Two } from "next/font/google";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weight(s) you need
  style: ["normal", "italic"], // optional: if you want italic too
});

export default function Category() {
  return (
    <div className="h-auto md:h-[422px]">
      <div className="max-w-7xl mx-auto mt-[65px] relative px-4 md:px-0">
        <h1
          className={`${lobsterTwo.className} text-[16px] md:text-[20px] font-400`}
        >
          category
        </h1>
        <h1 className="text-[28px] md:text-[40px] font-600">
          Popular <span className="text-[#ED6923]">Category</span>
        </h1>

        <div className="flex flex-wrap md:flex-nowrap justify-between mt-14 gap-4 md:gap-0">
          {/* Donuts */}
          <div className="w-[45%] md:w-[138.47px] h-[128px] bg-[#E1B47B] rounded-[8px] relative">
            <div className="relative md:absolute md:top-[-15px]">
              <img
                className="w-full md:w-[138.94px] h-[93.91px]"
                src="Donut.png"
                alt=""
              />
              <h1 className="text-[16px] md:text-[20px] font-medium text-white text-center">
                Donuts
              </h1>
            </div>
          </div>

          {/* Pizza */}
          <div className="w-[45%] md:w-[138.47px] h-[128px] bg-[#FA8D1C] rounded-[8px] relative">
            <div className="relative md:absolute md:top-[-22px]">
              <img
                className="w-full md:w-[138.94px] h-[93.91px]"
                src="Pizza.png"
                alt=""
              />
              <h1 className="text-[16px] md:text-[20px] font-medium text-white text-center">
                Pizza
              </h1>
            </div>
          </div>

          {/* Kabab */}
          <div className="w-[45%] md:w-[138.47px] h-[128px] bg-[#FD683E] rounded-[8px] relative">
            <div className="relative md:absolute md:top-[-9px]">
              <img
                className="w-full md:w-[134.94px] h-[93.91px]"
                src="Kabab.png"
                alt=""
              />
              <h1 className="text-[16px] md:text-[20px] font-medium text-white text-center">
                Kebab
              </h1>
            </div>
          </div>

          {/* Burger */}
          <div className="w-[45%] md:w-[138.47px] h-[128px] bg-[#FF8000] rounded-[8px] relative">
            <div className="relative md:absolute md:top-[-15px]">
              <img
                className="w-full md:w-[138.94px] h-[93.91px]"
                src="Burger.png"
                alt=""
              />
              <h1 className="text-[16px] md:text-[20px] font-medium text-white text-center">
                Burger
              </h1>
            </div>
          </div>

          {/* Sandwich */}
          <div className="w-[45%] md:w-[138.47px] h-[128px] bg-[#F75E28] rounded-[8px] relative">
            <div className="relative md:absolute md:top-[-15px]">
              <img
                className="w-full md:w-[138.94px] h-[93.91px]"
                src="Sandwitch.png"
                alt=""
              />
              <h1 className="text-[16px] md:text-[20px] font-medium text-white text-center">
                Sandwich
              </h1>
            </div>
          </div>

          {/* Shawarma */}
          <div className="w-[45%] md:w-[138.47px] h-[128px] bg-[#FCBD00] rounded-[8px] relative">
            <div className="relative md:absolute md:top-[-15px]">
              <img
                className="w-full md:w-[138.94px] h-[93.91px]"
                src="Susi.png"
                alt=""
              />
              <h1 className="text-[16px] md:text-[20px] font-medium text-white text-center">
                Shawarma
              </h1>
            </div>
          </div>

          {/* Taco */}
          <div className="w-[45%] md:w-[138.47px] h-[128px] bg-[#DA270F] rounded-[8px] relative">
            <div className="relative md:absolute md:top-[-15px]">
              <img
                className="w-full md:w-[138.94px] h-[93.91px]"
                src="Anthon.png"
                alt=""
              />
              <h1 className="text-[16px] md:text-[20px] font-medium text-white text-center">
                Taco
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute -left-20 top-[180px] hidden md:block">
          <img
            className="w-[44px] h-[44px] bg-white shadow-lg rounded-full"
            src="SVG.png"
            alt=""
          />
        </div>

        <div className="absolute -right-20 top-[180px] hidden md:block">
          <img
            className="w-[44px] h-[44px] bg-white shadow-lg rounded-full p-2"
            src="Vector (2).png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
