import { Lobster_Two } from "next/font/google";
import { CiClock2 } from "react-icons/ci";
import { IoMdBicycle } from "react-icons/io";
import { BsShop } from "react-icons/bs";

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weight(s) you need
  style: ["normal", "italic"], // optional: if you want italic too
});

export default function Popularfood() {
  return (
    <div className="h-auto md:h-[620px]">
      <div className="max-w-7xl mx-auto mt-[65px] relative px-4 md:px-0">
        <h1
          className={`${lobsterTwo.className} text-[16px] md:text-[20px] font-400`}
        >
          Popular Food
        </h1>

        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 md:gap-0">
          <h1 className="text-[28px] md:text-[40px] font-600">
            Popular <span className="text-[#ED6923]">Food Near me</span>
          </h1>
          <button className="w-[120px] md:w-[172px] h-[48px] border border-[#ED6923] rounded-[8px] text-[18px] md:text-[20px] font-[600] text-[#ED6923] mt-4 md:mt-0">
            View All
          </button>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-between mt-14 gap-6">
          {/* Donuts */}
          <div className="w-full md:w-auto max-w-[320px] mx-auto md:mx-0">
            <img
              className="w-full h-[175px] rounded-tl-2xl rounded-tr-2xl object-cover"
              src="image-resize (6).png"
              alt=""
            />
            <div className="w-full bg-[#FFFFFF] shadow-lg rounded-bl-2xl rounded-br-2xl relative">
              <div className="flex justify-between items-center p-4">
                <h1 className="w-[178.89px] text-[16px] md:text-[18px] font-medium">
                  Burger with <br /> Emmental Cheese
                </h1>
                <div>
                  <h1 className="text-[12px] font-[300] text-[#767676] line-through">
                    € 49.99
                  </h1>
                  <h1 className="text-[16px] font-[600] text-[#ED6923]">
                    €44.99
                  </h1>
                </div>
              </div>
              <div className="flex items-center space-x-2 pl-4">
                <div className="w-[15px] h-[15px]">
                  <BsShop />
                </div>
                <h1 className="text-[14px] md:text-[16px] font-[400] text-[#262626]">
                  Burger King
                </h1>
              </div>
              <div className="flex justify-between items-center pl-4 pr-4 pb-4">
                <div className="flex space-x-5">
                  <div className="flex space-x-2">
                    <div className="w-[12px] h-[12px]">
                      <CiClock2 />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      30 min
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-[12px] h-[12px]">
                      <IoMdBicycle />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      $02
                    </h1>
                  </div>
                </div>
                <div>
                  <img
                    className="w-[36px] h-[36px]"
                    src="Frame 1171275975.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Repeat same pattern for each card */}
          {/* Tandoori Chicken */}
          <div className="w-full md:w-auto max-w-[320px] mx-auto md:mx-0">
            <img
              className="w-full h-[175px] rounded-tl-2xl rounded-tr-2xl object-cover"
              src="image-resize.png"
              alt=""
            />
            <div className="w-full bg-[#FFFFFF] shadow-lg rounded-bl-2xl rounded-br-2xl relative">
              <div className="flex justify-between items-center p-4">
                <h1 className="w-[178.89px] text-[16px] md:text-[18px] font-medium">
                  Tandoori Chicken
                </h1>
                <div>
                  <h1 className="text-[12px] font-[300] text-[#767676] line-through">
                    € 49.99
                  </h1>
                  <h1 className="text-[16px] font-[600] text-[#ED6923]">
                    €44.99
                  </h1>
                </div>
              </div>
              <div className="flex items-center space-x-2 pl-4">
                <div className="w-[15px] h-[15px]">
                  <BsShop />
                </div>
                <h1 className="text-[14px] md:text-[16px] font-[400] text-[#262626]">
                  Burger King
                </h1>
              </div>
              <div className="flex justify-between items-center pl-4 pr-4 pb-4">
                <div className="flex space-x-5">
                  <div className="flex space-x-2">
                    <div className="w-[12px] h-[12px]">
                      <CiClock2 />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      30 min
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-[12px] h-[12px]">
                      <IoMdBicycle />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      $02
                    </h1>
                  </div>
                </div>
                <div>
                  <img
                    className="w-[36px] h-[36px]"
                    src="Frame 1171275975.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Döner Kebab */}
          <div className="w-full md:w-auto max-w-[320px] mx-auto md:mx-0">
            <img
              className="w-full h-[175px] rounded-tl-2xl rounded-tr-2xl object-cover"
              src="image-resize (1).png"
              alt=""
            />
            <div className="w-full bg-[#FFFFFF] shadow-lg rounded-bl-2xl rounded-br-2xl relative">
              <div className="flex justify-between items-center p-4">
                <h1 className="w-[178.89px] text-[16px] md:text-[18px] font-medium">
                  Döner Kebab
                </h1>
                <div>
                  <h1 className="text-[12px] font-[300] text-[#767676] line-through">
                    € 49.99
                  </h1>
                  <h1 className="text-[16px] font-[600] text-[#ED6923]">
                    €44.99
                  </h1>
                </div>
              </div>
              <div className="flex items-center space-x-2 pl-4">
                <div className="w-[15px] h-[15px]">
                  <BsShop />
                </div>
                <h1 className="text-[14px] md:text-[16px] font-[400] text-[#262626]">
                  Burger King
                </h1>
              </div>
              <div className="flex justify-between items-center pl-4 pr-4 pb-4">
                <div className="flex space-x-5">
                  <div className="flex space-x-2">
                    <div className="w-[12px] h-[12px]">
                      <CiClock2 />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      30 min
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-[12px] h-[12px]">
                      <IoMdBicycle />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      $02
                    </h1>
                  </div>
                </div>
                <div>
                  <img
                    className="w-[36px] h-[36px]"
                    src="Frame 1171275975.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pepperoni Pizza */}
          <div className="w-full md:w-auto max-w-[320px] mx-auto md:mx-0">
            <img
              className="w-full h-[175px] rounded-tl-2xl rounded-tr-2xl object-cover"
              src="image-resize (2).png"
              alt=""
            />
            <div className="w-full bg-[#FFFFFF] shadow-lg rounded-bl-2xl rounded-br-2xl relative">
              <div className="flex justify-between items-center p-4">
                <h1 className="w-[178.89px] text-[16px] md:text-[18px] font-medium">
                  Pepperoni Pizza <br /> Slice
                </h1>
                <div>
                  <h1 className="text-[12px] font-[300] text-[#767676] line-through">
                    € 49.99
                  </h1>
                  <h1 className="text-[16px] font-[600] text-[#ED6923]">
                    €44.99
                  </h1>
                </div>
              </div>
              <div className="flex items-center space-x-2 pl-4">
                <div className="w-[15px] h-[15px]">
                  <BsShop />
                </div>
                <h1 className="text-[14px] md:text-[16px] font-[400] text-[#262626]">
                  Burger King
                </h1>
              </div>
              <div className="flex justify-between items-center pl-4 pr-4 pb-4">
                <div className="flex space-x-5">
                  <div className="flex space-x-2">
                    <div className="w-[12px] h-[12px]">
                      <CiClock2 />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      30 min
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-[12px] h-[12px]">
                      <IoMdBicycle />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      $02
                    </h1>
                  </div>
                </div>
                <div>
                  <img
                    className="w-[36px] h-[36px]"
                    src="Frame 1171275975.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hide arrows on mobile */}
        <div className="absolute -left-4 md:-left-20 top-[270px] hidden md:block">
          <img
            className="w-[44px] h-[44px] bg-white shadow-lg rounded-full"
            src="SVG.png"
            alt=""
          />
        </div>
        <div className="absolute -right-4 md:-right-20 top-[270px] hidden md:block">
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
