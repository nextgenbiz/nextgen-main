import React from "react";
import Image from "next/image";

// Icons
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
        "../../assets/Rectangle.png",
      icon: Collateralfree,
    },
    {
      amount: "₹2 cr",
      title: "NAIFF Loans",
      backgroundImage:
        "../../assets/Rectangle.png",
      icon: Naiff,
    },
    {
      amount: "₹50 L",
      title: "Seed fund",
      backgroundImage:
        "../../assets/Rectangle.png",
      icon: SeedFund,
    },
    {
      amount: "₹10 cr",
      title: "Grant fund",
      backgroundImage:
        "../../assets/Rectangle.png",
      icon: GrantFund,
    },
    {
      amount: "₹1 cr",
      title: "Startup Seed Support",
      backgroundImage:
        "../../assets/Rectangle.png",
      icon: StartupSeed,
    },
    {
      amount: "₹50 L",
      title: "PMEGP",
      backgroundImage:
        "../../assets/Rectangle.png",
      icon: Pmegp,
    },
  ];

  return (
    <section className="w-full py-10 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-semibold text-[#05325f] text-3xl sm:text-4xl md:text-[46.6px]">
            Hot Services (Ft. Funding)
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-14 mb-10 md:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-[180px]  shadow-none  md:h-[380px] flex flex-col items-center bg-cover md:bg-cover bg-no-repeat bg-center rounded-lg"
              style={{ backgroundImage: `url(${service.backgroundImage})`,    boxShadow: '1.04px 2.07px 10.36px 1.04px #00000040',
 }}
            >
              {/* Icon */}
              <Image
                src={service.icon}
                alt="Service Icon"
                width={70}
                height={70}
                className="absolute w-[60px] md:-mt-6 h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] left-1/2 transform -translate-x-1/2 -top-6"
              />

              {/* Text Content */}
              <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-10 z-10 text-center px-2 md:px-6">
                {/* UP TO aligned right */}
                <p className="bayon-font font-normal text-[#264c92] text-base sm:text-3xl md:text-5xl md:mt-7 w-[80%] text-left">
                  UP TO
                </p>

                {/* ₹5 CR centered */}
                <h1 className="bebas-neue-regular bg-[linear-gradient(171deg,rgba(46,111,182,1)_0%,rgba(123,174,224,0.42)_100%)] 
                  [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] text-transparent 
                  font-['Bebas_Neue'] text-[60px] md:text-[130px] leading-none mt-1 mb-1">
                  {service.amount}
                </h1>

                {/* Collateral Free Loans centered */}
                <h3 className="font-medium text-[#46484f] text-sm sm:text-xl md:text-2xl md:mb-6">
                  {service.title}
                </h3>

                {/* Avail Now Button centered */}
                <button className="py-1 px-2 md:w-[220px]  md:h-[51px] rounded-md bg-[#3a80c1] hover:bg-[#3076b7] flex items-center justify-center transition">
                  <span className="font-normal text-white text-small  md:text-[22px] flex items-center">
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
      <div className="flex justify-center">
          <button className="text-[#1463b8] text-sm sm:text-base md:text-lg font-semibold border-[#1463b8] flex items-center hover:opacity-80 transition">
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};