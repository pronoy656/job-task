import { Lobster_Two } from "next/font/google";

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weight(s) you need
  style: ["normal", "italic"], // optional: if you want italic too
});

export default function AppIntro() {
  return (
    <div className="h-auto md:h-[812px] overflow-hidden">
      <div className="max-w-7xl mx-auto relative px-4 md:px-0">
        <div className="flex flex-col-reverse md:flex-row md:space-x-9">
          {/* Text Content */}
          <div className="w-full md:w-[756px] md:h-[327.94px] mt-8 md:mt-[120px] text-center md:text-left">
            <h1
              className={`${lobsterTwo.className} text-[18px] md:text-[20px] font-400`}
            >
              Restaurants
            </h1>
            <h1 className="text-[28px] md:text-[40px] font-[600] text-[#000000] mt-2.5">
              Enhance your experience, <br className="hidden md:block" />
              <span className="text-[#ED6923FA]">
                Download the Tweet app today!
              </span>
            </h1>
            <p className="w-full md:w-[688px] text-sm md:text-base font-[400] text-[#5C5C5C] mt-4 md:mt-6 leading-relaxed md:[word-spacing:0.4rem]">
              Discover a whole new level of convenience with our mobile app.
              From browsing our delectable menu to securing exclusive deals,
              it's your gateway to a world of culinary delights. Download now
              and elevate your dining experience with just a tap.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-3 space-y-3 md:space-y-0 mt-6 justify-center md:justify-start">
              <img
                className="w-[160px] h-auto"
                src="app-store.png.png"
                alt="App Store"
              />
              <img
                className="w-[160px] h-auto"
                src="google-store.png.png"
                alt="Google Store"
              />
            </div>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center md:block mt-8 md:mt-[38px]">
            <img
              className="w-[250px] md:w-[343px] h-auto relative z-10"
              src="Frame 1597881976 (1).png"
              alt="App Preview"
            />
          </div>
        </div>

        {/* Background Shape */}
        <div className="absolute -bottom-95 md:-bottom-32 w-full flex justify-center md:justify-start">
          <img
            className="h-[200px] md:h-[298px]"
            src="Rectangle 8769.png"
            alt=""
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto mt-12 md:-mt-5 md:-mb-16 relative z-10 px-4 md:px-0">
        <div className="w-full md:w-[637px] md:ml-[51px] bg-[#ED6923] rounded-xl py-6 md:py-0">
          <div className="flex flex-wrap md:flex-nowrap justify-around md:justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-[22px] md:text-[40px] font-[700] text-white">
                100+
              </p>
              <p className="text-[10px] md:text-[20px] font-[400] text-white">
                Food Menu
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <p className="text-[22px] md:text-[40px] font-[700] text-white">
                100+
              </p>
              <p className="text-[10px] md:text-[20px] font-[400] text-white">
                Downloads
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <p className="text-[22px] md:text-[40px] font-[700] text-white">
                20+
              </p>
              <p className="text-[10px] md:text-[20px] font-[400] text-white">
                Positive reviews
              </p>
            </div>
            <div>
              <p className="text-[22px] md:text-[40px] font-[700] text-white">
                4.7
              </p>
              <p className="text-[10px] md:text-[20px] font-[400] text-white">
                Average Review
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
