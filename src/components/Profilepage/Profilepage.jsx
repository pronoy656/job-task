import { CgProfile } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";

export default function Profilepage() {
  return (
    <div className="flex space-x-[74px] mb-[224px]">
      <div className="w-[282px] h-[1076px] bg-white ml-[31px] mt-[38px]">
        <div className="border h-[150px] bg-[#FF8D2F]"></div>

        <div className="flex justify-center mt-[-40px]">
          <img className="w-[100px] h-[100px]" src="p5.png.png" alt="" />
        </div>
        <div>
          <p className="text-center">Mark Jecno</p>
          <p className="text-center">mark-jecno@gmail.com</p>
        </div>
        <div className="flex flex-col space-y-4 mt-9 ml-[30px]">
          <div className="flex space-x-1.5 items-center">
            <CgProfile />
            <p>Profile</p>
          </div>
          <div className="flex space-x-1.5 items-center">
            <FiShoppingBag />
            <p>Order </p>
          </div>
          <div className="flex space-x-1.5 items-center">
            <FiCreditCard />
            <p>StampCard</p>
          </div>
          <div className="flex space-x-1.5 items-center">
            <IoIosHelpCircleOutline />
            <p>Help</p>
          </div>
          <div className="flex space-x-1.5 items-center">
            <CiSettings />
            <p>Setting</p>
          </div>
          <div className="flex space-x-1.5 items-center">
            <CiLogin />
            <p>Log Out</p>
          </div>
        </div>
      </div>
      <div>
        {/* Card 1 */}
        <div className="w-[895px] h-[468px] mt-[38px] bg-white">
          <p className="text-2xl font-medium text-black mt-6 ml-6">Profile</p>
          {/* input field */}
          <div class="flex items-start space-x-3 border-2 border-dotted border-[#A1A1A1] w-[847px] h-[95px] rounded-[13px] ml-6 p-7 mt-6">
            <span class="text-orange-500 w-[12.53px] h-[16.45px] mt-1">
              <CgProfile />
            </span>
            <div>
              <label class="text-sm font-semibold text-gray-700">Name :</label>
              <div class="text-gray-600 text-sm">Mark Jecno</div>
            </div>
          </div>
          {/* input field */}
          <div class="flex items-start space-x-3 border-2 border-dotted border-[#A1A1A1] w-[847px] h-[95px] rounded-[13px] ml-6 p-7 mt-6">
            <span class="text-orange-500 w-[12.53px] h-[16.45px] mt-1">
              <CgProfile />
            </span>
            <div>
              <label class="text-sm font-semibold text-gray-700">Name :</label>
              <div class="text-gray-600 text-sm">Mark Jecno</div>
            </div>
          </div>
          {/* input field */}
          <div class="flex items-start space-x-3 border-2 border-dotted border-[#A1A1A1] w-[847px] h-[95px] rounded-[13px] ml-6 p-7 mt-6">
            <span class="text-orange-500 w-[12.53px] h-[16.45px] mt-1">
              <CgProfile />
            </span>
            <div>
              <label class="text-sm font-semibold text-gray-700">Name :</label>
              <div class="text-gray-600 text-sm">Mark Jecno</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="w-[198.5px] h-[48px] border bg-[#ED6923] text-white rounded-[12px]">
            Update
          </button>
        </div>
        {/* card 2 */}
        <div className="w-[895px] h-[468px] mt-[38px] bg-white">
          <p className="text-2xl font-medium text-black mt-6 ml-6">
            Change Password
          </p>
          {/* input field */}
          <div class="flex items-start space-x-3 border-2 border-dotted border-[#A1A1A1] w-[847px] h-[95px] rounded-[13px] ml-6 p-7 mt-6">
            <span class="text-orange-500 w-[12.53px] h-[16.45px] mt-1">
              <CgProfile />
            </span>
            <div>
              <label class="text-sm font-semibold text-gray-700">Name :</label>
              <div class="text-gray-600 text-sm">Mark Jecno</div>
            </div>
          </div>
          {/* input field */}
          <div class="flex items-start space-x-3 border-2 border-dotted border-[#A1A1A1] w-[847px] h-[95px] rounded-[13px] ml-6 p-7 mt-6">
            <span class="text-orange-500 w-[12.53px] h-[16.45px] mt-1">
              <CgProfile />
            </span>
            <div>
              <label class="text-sm font-semibold text-gray-700">Name :</label>
              <div class="text-gray-600 text-sm">Mark Jecno</div>
            </div>
          </div>
          {/* input field */}
          <div class="flex items-start space-x-3 border-2 border-dotted border-[#A1A1A1] w-[847px] h-[95px] rounded-[13px] ml-6 p-7 mt-6">
            <span class="text-orange-500 w-[12.53px] h-[16.45px] mt-1">
              <CgProfile />
            </span>
            <div>
              <label class="text-sm font-semibold text-gray-700">Name :</label>
              <div class="text-gray-600 text-sm">Mark Jecno</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="w-[198.5px] h-[48px] border bg-[#ED6923] text-white rounded-[12px]">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
