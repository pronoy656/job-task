import { Lobster_Two } from "next/font/google";
import { CiClock2 } from "react-icons/ci";
import { IoMdBicycle } from "react-icons/io";
import { BsShop } from "react-icons/bs";

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weight(s) you need
  style: ["normal", "italic"], // optional: if you want italic too
});

export default function PopularResturant() {
  return (
    <div className="h-auto md:h-[620px]">
      <div className="max-w-7xl mx-auto mt-[65px] relative px-4 md:px-0">
        <h1 className={`${lobsterTwo.className} text-[20px] font-400`}>
          Popular Food
        </h1>

        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
          <h1 className="text-[28px] md:text-[40px] font-600">
            Popular <span className="text-[#ED6923]">Restaurant Near me</span>
          </h1>
          <button className="w-full md:w-[172px] h-[48px] border border-[#ED6923] rounded-[8px] text-[18px] md:text-[20px] font-[600] text-[#ED6923]">
            View All
          </button>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between mt-10 gap-6">
          {/* CARD */}
          {[
            "image-resize (3).png",
            "image-resize (4).png",
            "image-resize (5).png",
            "image-resize (7).png",
          ].map((imgSrc, index) => (
            <div
              key={index}
              className="w-full max-w-[290px] md:w-[290px] flex flex-col"
            >
              <img
                src={imgSrc}
                alt=""
                className="w-full h-[175px] rounded-tl-2xl rounded-tr-2xl object-cover"
              />
              <div className="w-full bg-[#FFFFFF] shadow-lg rounded-bl-2xl rounded-br-2xl">
                <h1 className="text-[18px] font-medium mt-[15px] pl-[15px]">
                  Burger King
                </h1>

                <div className="flex flex-wrap space-x-5 mt-3 pl-[15px]">
                  <div className="flex space-x-2 items-center">
                    <div className="w-[14px] h-[14px]">
                      <CiClock2 />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#ED6923]">
                      20-30 min
                    </h1>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <div className="w-[14px] h-[14px]">
                      <IoMdBicycle />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#ED6923]">
                      Delivery Fee €10
                    </h1>
                  </div>
                </div>

                <div className="flex flex-wrap items-center pl-[15px] text-[#767676] text-[12px] font-[400] mt-3">
                  <p>Pizza</p>
                  <div className="border-r h-3 border-[#767676] mx-2"></div>
                  <p>Burger</p>
                  <div className="border-r h-3 border-[#767676] mx-2"></div>
                  <p>Pasta</p>
                  <div className="border-r h-3 border-[#767676] mx-2"></div>
                  <p>Chicken fry</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute -left-4 md:-left-20 top-[255px] hidden md:block">
          <img
            className="w-[44px] h-[44px] bg-white shadow-lg rounded-full"
            src="SVG.png"
            alt=""
          />
        </div>
        <div className="absolute -right-4 md:-right-20 top-[255px] hidden md:block">
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
