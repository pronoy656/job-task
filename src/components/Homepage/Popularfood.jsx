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
    <div className="h-[620px] ">
      <div className="max-w-7xl mx-auto mt-[65px] relative">
        <h1 className={`${lobsterTwo.className} text-[20px] font-400`}>
          Popular Food
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="text-[40px] font-600">
            Popular <span className="text-[#ED6923]">Food Near me</span>
          </h1>
          <button className="w-[172px] h-[48px] border border-[#ED6923] rounded-[8px] text-[20px] font-[600] text-[#ED6923]">
            View All
          </button>
        </div>
        <div className="flex justify-between  mt-14">
          {/* DOnuts */}
          <div>
            <img
              className="w-[290px] h-[175px] rounded-tl-2xl rounded-tr-2xl"
              src="image-resize (6).png"
              alt=""
            />
            <div className="w-[290px] h-[137.05px] bg-[#FFFFFF] shadow-lg rounded-bl-2xl rounded-br-2xl relative">
              <div className="flex justify-between items-center p-4">
                <h1 className="w-[178.89px] h-[46px]  text-[18px] font-medium">
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
                <h1 className="text-[16px] font-[400] text-[#262626]">
                  Burger King
                </h1>
              </div>
              <div className="flex justify-between items-center pl-4 pr-4">
                <div className="flex space-x-5  ">
                  <div className="flex space-x-4  ">
                    <div className="w-[3px] h-[3px]">
                      <CiClock2 />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      30 min
                    </h1>
                  </div>
                  <div className="flex space-x-4  ">
                    <div className="w-[3px] h-[3px]">
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
          {/* DOnuts */}
          <div>
            <img
              className="w-[282px] h-[175px] rounded-tl-2xl rounded-tr-2xl"
              src="image-resize.png"
              alt=""
            />
            <div className="w-[282px] h-[137.05px] bg-[#FFFFFF] shadow-lg  rounded-bl-2xl rounded-br-2xl relative">
              <div className="flex justify-between items-center p-4">
                <h1 className="w-[178.89px] text-[18px] font-medium">
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
                <h1 className="text-[16px] font-[400] text-[#262626]">
                  Burger King
                </h1>
              </div>
              <div className="flex justify-between items-center pl-4 pr-4">
                <div className="flex space-x-5  ">
                  <div className="flex space-x-4  ">
                    <div className="w-[3px] h-[3px]">
                      <CiClock2 />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      30 min
                    </h1>
                  </div>
                  <div className="flex space-x-4  ">
                    <div className="w-[3px] h-[3px]">
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
          {/* DOnuts */}
          <div>
            <img
              className="w-[282px] h-[175px] rounded-tl-2xl rounded-tr-2xl"
              src="image-resize (1).png"
              alt=""
            />
            <div className="w-[282px] h-[137.05px] bg-[#FFFFFF] shadow-lg  rounded-bl-2xl rounded-br-2xl relative">
              <div className="flex justify-between items-center  p-4">
                <h1 className="w-[178.89px]  text-[18px] font-medium">
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
                <h1 className="text-[16px] font-[400] text-[#262626]">
                  Burger King
                </h1>
              </div>
              <div className="flex justify-between items-center pl-4 pr-4">
                <div className="flex space-x-5  ">
                  <div className="flex space-x-4  ">
                    <div className="w-[3px] h-[3px]">
                      <CiClock2 />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      30 min
                    </h1>
                  </div>
                  <div className="flex space-x-4  ">
                    <div className="w-[3px] h-[3px]">
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
          {/* DOnuts */}
          <div>
            <img
              className="w-[282px] h-[175px] rounded-tl-2xl rounded-tr-2xl"
              src="image-resize (2).png"
              alt=""
            />
            <div className="w-[282px] h-[137.05px] bg-[#FFFFFF] shadow-lg  rounded-bl-2xl rounded-br-2xl relative">
              <div className="flex justify-between items-center p-4">
                <h1 className="w-[178.89px] h-[46px] text-[18px] font-medium">
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
                <h1 className="text-[16px] font-[400] text-[#262626]">
                  Burger King
                </h1>
              </div>
              <div className="flex justify-between items-center pl-4 pr-4">
                <div className="flex space-x-5  ">
                  <div className="flex space-x-4  ">
                    <div className="w-[3px] h-[3px]">
                      <CiClock2 />
                    </div>
                    <h1 className="text-[12px] font-[500] text-[#5C5C5C]">
                      30 min
                    </h1>
                  </div>
                  <div className="flex space-x-4  ">
                    <div className="w-[3px] h-[3px]">
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
        <div className="absolute -left-20 top-[153px]">
          <img
            className="w-[48px] h-[48px] bg-white shadow-lg rounded-full"
            src="SVG.png"
            alt=""
          />
        </div>
        <div className="absolute -right-20 top-[153px]">
          <img
            className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2"
            src="Vector (2).png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
