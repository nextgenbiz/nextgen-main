import React from "react";
import Image from "next/image";
import Collateralfree from "../../assets/hotservice1.png";
import Naiff from "../../assets/hotservice2.png";
import SeedFund from "../../assets/hotservice3.png";
import GrantFund from "../../assets/hotservice4.png";
import StartupSeed from "../../assets/hotservice5.png";
import Pmegp from "../../assets/hotservice6.png";

export const HotServicesSection = () => {
  const services = [
    {
      amount: "₹5 cr",
      title: "Collateral Free Loans",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      icon: Collateralfree,
    },
    {
      amount: "₹2 cr",
      title: "NAIFF Loans",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      icon: Naiff,
    },
    {
      amount: "₹50 L",
      title: "Seed fund",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      icon: SeedFund,
    },
    {
      amount: "₹10 cr",
      title: "Grant fund",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      icon: GrantFund,
    },
    {
      amount: "₹1 cr",
      title: "Startup Seed Support",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      icon: StartupSeed,
    },
    {
      amount: "₹50 L",
      title: "PMEGP",
      backgroundImage:
        "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-98.svg",
      icon: Pmegp,
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
                src={service.icon}
                alt="Service Icon"
                width={70}
                height={70}
                className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] left-1/2 transform -translate-x-1/2"
              />

              {/* Text Content */}
              <div className="flex flex-col justify-center items-center mt-14 sm:mt-20 md:mt-24 z-10 px-2">
                <p className="font-['Bayon'] font-normal text-[#264c92] text-xl sm:text-2xl md:text-3xl">
                  UP TO
                </p>
                <h1 className="bebas-neue-regular bg-[linear-gradient(171deg,rgba(46,111,182,1)_0%,rgba(123,174,224,0.42)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] text-transparent font-['Bebas_Neue'] text-[60px] sm:text-[70px] md:text-[90px] leading-none">
                  {service.amount}
                </h1>
                <h3 className="text-center font-['Be_Vietnam'] font-medium text-[#46484f] text-lg sm:text-xl md:text-2xl mt-2 px-2">
                  {service.title}
                </h3>

                <button className="mt-4 md:mt-6 w-[220px] h-[45px] md:h-[51px] rounded-md bg-[#3a80c1] hover:bg-[#3076b7] border-none flex items-center justify-center transition">
                  <span className="font-['Be_Vietnam'] font-normal text-white text-lg sm:text-xl md:text-[22px] flex items-center">
                    Avail now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
