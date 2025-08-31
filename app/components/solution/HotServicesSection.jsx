import { ChevronRightIcon } from "lucide-react";
import React from "react";
import Collateralfree from "../../assets/hotservice1.svg";
import Image from "next/image";

export const HotServicesSection = () => {
  const services = [
    {
      amount: "₹5 cr",
      title: "Collateral Free Loans",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      iconImages: {
        src: Collateralfree,
        className:
          "absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] top-[-30px] sm:top-[-35px] md:top-[-40px] left-1/2 transform -translate-x-1/2", // Responsive icon positioning
      },
    },
    {
      amount: "₹2 cr",
      title: "NAIFF Loans",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      iconImages: {
        src: Collateralfree,
        className:
          "absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] top-[-30px] sm:top-[-35px] md:top-[-40px] left-1/2 transform -translate-x-1/2",
      },
    },
    {
      amount: "₹50 l",
      title: "Seed fund",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      iconImages: {
        src: Collateralfree,
        className:
          "absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] top-[-30px] sm:top-[-35px] md:top-[-40px] left-1/2 transform -translate-x-1/2",
      },
    },
    {
      amount: "₹10 cr",
      title: "Grant fund",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      iconImages: {
        src: Collateralfree,
        className:
          "absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] top-[-30px] sm:top-[-35px] md:top-[-40px] left-1/2 transform -translate-x-1/2",
      },
    },
    {
      amount: "₹1 cr",
      title: "Startup Seed Support",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      iconImages: {
        src: Collateralfree,
        className:
          "absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] top-[-30px] sm:top-[-35px] md:top-[-40px] left-1/2 transform -translate-x-1/2",
      },
    },
    {
      amount: "₹50 L",
      title: "PMEGP",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      iconImages: {
        src: Collateralfree,
        className:
          "absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] top-[-30px] sm:top-[-35px] md:top-[-40px] left-1/2 transform -translate-x-1/2",
      },
    },
  ];

  return (
    <section className="w-full py-10 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-['Be_Vietnam_Pro'] font-semibold text-[#05325f] text-3xl sm:text-4xl md:text-[46.6px]">
            Hot Services (Ft. Funding)
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full max-w-[350px] mx-auto h-[320px] sm:h-[350px] md:h-[403px] flex flex-col items-center bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${service.backgroundImage})` }}
            >
              {/* Icon */}
              <Image
                className={service.iconImages.className}
                alt="Service icon"
                src={service.iconImages.src}
                width={80}
                height={80}
              />

              {/* Text Content */}
              <div className="flex flex-col justify-center items-center mt-16 sm:mt-18 md:mt-20 z-10 px-2">
                {/* UP TO */}
                <p className="font-['Bayon'] font-normal text-[#264c92] text-xl sm:text-2xl md:text-3xl">
                  UP TO
                </p>

                {/* Amount */}
                <h1 className="bg-[linear-gradient(171deg,rgba(46,111,182,1)_0%,rgba(123,174,224,0.42)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] text-transparent font-['Bebas_Neue'] text-[60px] sm:text-[70px] md:text-[90.2px] leading-none">
                  {service.amount}
                </h1>

                {/* Title */}
                <h3 className="text-center font-['Be_Vietnam'] font-medium text-[#46484f] text-lg sm:text-xl md:text-2xl mt-2 px-2">
                  {service.title}
                </h3>

                {/* Button */}
                <button className="mt-4 md:mt-6 w-full max-w-[220px] h-[40px] sm:h-[45px] md:h-[51px] rounded-[5.56px] bg-[linear-gradient(180deg,rgba(58,128,193,1)_0%)] hover:bg-[linear-gradient(180deg,rgba(48,118,183,1)_0%)] border-none flex items-center justify-center">
                  <span className="font-['Be_Vietnam'] font-normal text-white text-lg sm:text-xl md:text-[29.4px]">
                    Avail now
                  </span>
                  <div className="ml-2 sm:ml-3 md:ml-4 flex items-center">
                    <Image
                      className="w-[20px] sm:w-[25px] md:w-[31px] h-0.5"
                      width={31}
                      height={2}
                      alt="Arrow line"
                      src="https://c.animaapp.com/metmcazsfuMR7v/img/vector-8.svg"
                    />
                    <Image
                      className="w-[8px] sm:w-[10px] md:w-[11px] h-[12px] sm:h-[15px] md:h-[17px] ml-0.5 sm:ml-1"
                      width={11}
                      height={17}
                      alt="Arrow head"
                      src="https://c.animaapp.com/metmcazsfuMR7v/img/vector-11.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 h-auto p-0 hover:bg-transparent">
            <span className="font-['Chivo'] font-medium text-[#03518f] text-lg sm:text-xl md:text-[24.9px] tracking-[-0.50px]">
              View all
            </span>
            <ChevronRightIcon className="w-[11px] sm:w-[12px] md:w-[13px] h-[16px] sm:h-[18px] md:h-[19px] text-[#03518f]" />
          </button>
        </div>
      </div>
    </section>
  );
};