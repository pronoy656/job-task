import React from "react";

export default function Footer() {
  return (
    <div className="h-[439px] border bg-[#000000] mt-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center mt-[47px]">
        <div>
          <img src="png file 2 2.png" alt="" />
          <p className="w-[293px] h-[84px] text-[#A5A5A5]">
            Your go-to choice for fast and fresh delivery, bringing the best to
            your door in no time
          </p>
          <div className="flex space-x-5 mt-5">
            <img src="Link.png" alt="" />
            <img src="Link (1).png" alt="" />
            <img src="Link (2).png" alt="" />
            <img src="Link (3).png" alt="" />
          </div>
        </div>

        <div className="w-[843px] h-[203px]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-semibold text-white">Quick Link</p>
              <p className="text-base font-[400] text-[#A5A5A5] mt-6">
                About Us
              </p>
              <p className="text-base font-[400] text-[#A5A5A5]">
                How We works
              </p>
              <p className="text-base font-[400] text-[#A5A5A5]">Career</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Quick Link</p>
              <p className="text-base font-[400] text-[#A5A5A5] mt-6">
                Privacy Policies
              </p>
              <p className="text-base font-[400] text-[#A5A5A5]">
                Terms & Conditions
              </p>
              <p className="text-base font-[400] text-[#A5A5A5]">Faq</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Newsletter</p>
              <p className="text-base font-[400] text-[#A5A5A5] mt-6">
                Subscribe Our newsletter to get our <br /> Latest Update & News
              </p>

              <div className="flex mt-[15px]">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="bg-[#181D21] w-[280px] h-[53px] border border-[#5C5C5C] pl-2.5 rounded-sm "
                  class="text-white placeholder-[#A5A5A5] focus:outline-none"
                />
                <img className="w-[55px] h-[52px]" src="Button.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-3 border-[#5C5C5C] mt-[84px]"></div>
      <p className="text-[#A5A5A5] text-base font-[400] text-center mt-6">
        © 2024 Tweet. All rights reserved.
      </p>
    </div>
  );
}
