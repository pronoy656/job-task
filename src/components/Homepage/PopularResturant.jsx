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
    <div className="h-[620px] ">
      <div className="max-w-7xl mx-auto mt-[65px] relative">
        <h1 className={`${lobsterTwo.className} text-[20px] font-400`}>
          Popular Food
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="text-[40px] font-600">
            Popular <span className="text-[#ED6923]">Restaurent Near me</span>
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
              src="image-resize (3).png"
              alt=""
            />
            <div className="w-[290px] h-[105px] bg-[#FFFFFF] shadow-lg rounded-bl-2xl rounded-br-2xl relative">
              <div>
                <h1 className="w-[178.89px] text-[18px] font-medium mt-[15px] pl-[15px]">
                  Burger King
                </h1>
              </div>

              <div className="flex space-x-5 mt-3 pl-[15px]">
                <div className="flex space-x-4  ">
                  <div className="w-[3px] h-[3px]">
                    <CiClock2 />
                  </div>
                  <h1 className="text-[12px] font-[500] text-[#ED6923]">
                    20-30 min
                  </h1>
                </div>
                <div className="flex space-x-4  ">
                  <div className="w-[3px] h-[3px]">
                    <IoMdBicycle />
                  </div>
                  <h1 className="text-[12px] font-[500] text-[#ED6923]">
                    Delivery Fee €10
                  </h1>
                </div>
              </div>
              <div className="flex items-center pl-[15px] text-[#767676] text-[12px] font-[400] mt-3">
                <p>Pizza</p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Burger</p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Pasta </p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Chicken fry </p>
              </div>
            </div>
          </div>
          {/* DOnuts */}
          <div>
            <img
              className="w-[290px] h-[175px] rounded-tl-2xl rounded-tr-2xl"
              src="image-resize (4).png"
              alt=""
            />
            <div className="w-[290px] h-[105px] bg-[#FFFFFF] shadow-lg rounded-bl-2xl rounded-br-2xl relative">
              <div>
                <h1 className="w-[178.89px] text-[18px] font-medium mt-[15px] pl-[15px]">
                  Burger King
                </h1>
              </div>

              <div className="flex space-x-5 mt-3 pl-[15px]">
                <div className="flex space-x-4  ">
                  <div className="w-[3px] h-[3px]">
                    <CiClock2 />
                  </div>
                  <h1 className="text-[12px] font-[500] text-[#ED6923]">
                    20-30 min
                  </h1>
                </div>
                <div className="flex space-x-4  ">
                  <div className="w-[3px] h-[3px]">
                    <IoMdBicycle />
                  </div>
                  <h1 className="text-[12px] font-[500] text-[#ED6923]">
                    Delivery Fee €10
                  </h1>
                </div>
              </div>
              <div className="flex items-center pl-[15px] text-[#767676] text-[12px] font-[400] mt-3">
                <p>Pizza</p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Burger</p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Pasta </p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Chicken fry </p>
              </div>
            </div>
          </div>
          {/* DOnuts */}
          <div>
            <img
              className="w-[290px] h-[175px] rounded-tl-2xl rounded-tr-2xl"
              src="image-resize (5).png"
              alt=""
            />
            <div className="w-[290px] h-[105px] bg-[#FFFFFF] shadow-lg rounded-bl-2xl rounded-br-2xl relative">
              <div>
                <h1 className="w-[178.89px] text-[18px] font-medium mt-[15px] pl-[15px]">
                  Burger King
                </h1>
              </div>

              <div className="flex space-x-5 mt-3 pl-[15px]">
                <div className="flex space-x-4  ">
                  <div className="w-[3px] h-[3px]">
                    <CiClock2 />
                  </div>
                  <h1 className="text-[12px] font-[500] text-[#ED6923]">
                    20-30 min
                  </h1>
                </div>
                <div className="flex space-x-4  ">
                  <div className="w-[3px] h-[3px]">
                    <IoMdBicycle />
                  </div>
                  <h1 className="text-[12px] font-[500] text-[#ED6923]">
                    Delivery Fee €10
                  </h1>
                </div>
              </div>
              <div className="flex items-center pl-[15px] text-[#767676] text-[12px] font-[400] mt-3">
                <p>Pizza</p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Burger</p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Pasta </p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Chicken fry </p>
              </div>
            </div>
          </div>
          {/* DOnuts */}
          <div>
            <img
              className="w-[290px] h-[175px] rounded-tl-2xl rounded-tr-2xl"
              src="image-resize (7).png"
              alt=""
            />
            <div className="w-[290px] h-[105px] bg-[#FFFFFF] shadow-lg rounded-bl-2xl rounded-br-2xl relative">
              <div>
                <h1 className="w-[178.89px] text-[18px] font-medium mt-[15px] pl-[15px]">
                  Burger King
                </h1>
              </div>

              <div className="flex space-x-5 mt-3 pl-[15px]">
                <div className="flex space-x-4  ">
                  <div className="w-[3px] h-[3px]">
                    <CiClock2 />
                  </div>
                  <h1 className="text-[12px] font-[500] text-[#ED6923]">
                    20-30 min
                  </h1>
                </div>
                <div className="flex space-x-4  ">
                  <div className="w-[3px] h-[3px]">
                    <IoMdBicycle />
                  </div>
                  <h1 className="text-[12px] font-[500] text-[#ED6923]">
                    Delivery Fee €10
                  </h1>
                </div>
              </div>
              <div className="flex items-center pl-[15px] text-[#767676] text-[12px] font-[400] mt-3">
                <p>Pizza</p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Burger</p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Pasta </p>
                <div class="border-1 h-3 border-[#767676] border-r-[#767676] ml-2"></div>
                <p className="ml-2">Chicken fry </p>
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
