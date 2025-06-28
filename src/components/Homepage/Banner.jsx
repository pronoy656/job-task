import { Rancho } from "next/font/google";
import React from "react";

const rancho = Rancho({
  subsets: ["latin"],
  weight: "400",
});

export default function Banner() {
  return (
    <div
      className="h-[791px] mt-6"
      style={{
        background:
          "linear-gradient(to left, rgba(253, 237, 229, 1), rgba(254, 140, 79, 0.2), rgba(254, 140, 79, 0.2))",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-6 px-4 md:px-0">
        {/* Left section (text + input) */}
        <div className="h-[494px] w-full md:w-[584px] mt-[152px]">
          <h1
            className={`${rancho.className} text-[100px] font-normal text-[#ED6923]`}
          >
            Hungry?
          </h1>
          <h1 className="text-[72px] font-bold text-[#ED6923]">
            <span className="text-[#000000]">Let Us</span> Bring <br /> The
            Feast to You
          </h1>
          <h1 className="text-[18px] font-[400] text-[#333333] mt-2">
            Explore hundreds of delicious options from top restaurants and Enjoy
            fast, reliable delivery right to you.
          </h1>

          {/* Input */}
          <div className="mt-5 relative max-w-full">
            <input
              type="text"
              placeholder="Enter your location"
              className="bg-white w-full border border-[#ED6923] pl-2.5 h-[64px] rounded-bl-2xl rounded-tl-2xl rounded-br-2xl rounded-tr-2xl flex-grow text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-[#ED6923] w-[159px] h-[64px] text-white font-semibold rounded-br-2xl rounded-tr-2xl absolute right-0 top-0">
              Find Food
            </button>
            <div className="flex space-x-1.5 items-center hover:underline absolute right-48 top-5 text-[#ED6923] cursor-pointer">
              <img src="vector (12).png" alt="" />
              <h1>Locate me</h1>
            </div>
          </div>
        </div>

        {/* Right section (images and overlays) */}
        <div className="h-[533px] w-full md:w-[590px] mt-[85px] relative mx-auto md:mx-0">
          <img
            src="Untitled design (1) 1.png"
            alt=""
            className="w-full h-auto"
          />
          <div className="w-[194px] h-[150px] rounded-[14px] bg-white absolute top-0 left-5 p-3">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full"
                src="Avater-1.png"
                alt=""
              />
              <img
                className="w-12 h-12 rounded-full ml-[-22px]"
                src="Avater-2.png"
                alt=""
              />
              <img
                className="w-12 h-12 rounded-full ml-[-22px]"
                src="Avater-3.png"
                alt=""
              />
              <div className="w-12 h-12 rounded-full ml-[-22px] bg-[#F2F2F2]">
                <img className="ml-3.5 mt-3.5" src="Vector.png" alt="" />
              </div>
            </div>
            <h1 className="mt-4 text-[16px] font-[600]">Satisfied Customer</h1>
            <div className="flex items-center space-x-1 mt-4">
              <img className="h-[26px] w-[26px]" src="Star 1.png" alt="" />
              <h1 className="text-[16px] font-[400] text-[#333333]">
                5.0 (3K Reviews)
              </h1>
            </div>
          </div>
          <div className="border border-[#FFFFFF80] backdrop-blur-lg bg-white/30 shadow-lg w-[322px] h-[140px] rounded-[14px] absolute bottom-[-74px] left-2 p-3">
            <div className="flex items-center space-x-3">
              <img
                className="w-[113px] h-[110px] rounded-[14px]"
                src="Rectangle 10.png"
                alt=""
              />
              <div>
                <h1 className="text-[16px] font-[600] text-[#333333]">
                  Flavor Fusion Bistro
                </h1>
                <h1>Kaliurang, Seleman</h1>
                <div className="flex items-center space-x-2">
                  <h1>4.9</h1>
                  <img
                    className="w-[13.3px] h-[13.3px]"
                    src="Star 1.png"
                    alt=""
                  />
                </div>
                <div className="border border-[#E2D3BB] w-[33px] h-[33px] rounded-full p-2 ml-34">
                  <img
                    className="w-[16.18px] h-[14.09px]"
                    src="Vector (11).png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-pink-100 shadow-lg w-[161px] h-[83px] rounded-[14px] absolute bottom-[-20px] right-0 p-3">
            <div className="flex items-center space-x-5">
              <img className="w-[41px] h-[41px]" src="car.png" alt="" />
              <div>
                <h1 className="text-[16px] font-[600]">24/7</h1>
                <h1 className="text-[#737373]">Delivery</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
