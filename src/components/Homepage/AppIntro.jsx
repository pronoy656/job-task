import { Lobster_Two } from "next/font/google";

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weight(s) you need
  style: ["normal", "italic"], // optional: if you want italic too
});

export default function AppIntro() {
  return (
    <div className="h-[812px]">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex space-x-9">
          <div className="w-[756px] h-[327.94px] mt-[120px]">
            <h1 className={`${lobsterTwo.className} text-[20px] font-400`}>
              Restaurants
            </h1>
            <h1 className="text-[40px] font-[600] text-[#000000] mt-2.5">
              Enhance your experience, <br />
              <span className="text-[#ED6923FA]">
                Download the Tweet app today!
              </span>
            </h1>
            <p className="w-[688px] text-base font-[400] text-[#5C5C5C] mt-6 [word-spacing:0.4rem]">
              Discover a whole new level of convenience with our mobile app.
              From browsing our delectable menu to securing exclusive deals,
              it's your gateway to a world of culinary delights. Download now
              and elevate your dining experience with just a tap.
            </p>
            <div className="flex items-center space-x-3 mt-6">
              <img
                className="w-[148px] h-[47.94px]"
                src="app-store.png.png"
                alt=""
              />
              <img
                className="w-[148px] h-[47.94px]"
                src="google-store.png.png"
                alt=""
              />
            </div>
          </div>
          <div className="mt-[38px]">
            <img
              className="w-[343px] h-[614px] -mb-16 relative z-10"
              src="Frame 1597881976 (1).png"
              alt=""
            />
          </div>
        </div>
        <div className="absolute -bottom-32">
          <img className="h-[298px]" src="Rectangle 8769.png" alt="" />
        </div>
        {/* <div className="w-[637px] h-[90px] border  relative z-10"></div> */}
      </div>
    </div>
  );
}
