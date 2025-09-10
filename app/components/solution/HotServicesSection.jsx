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
      backgroundImage: "../../assets/Rectangle.png",
      icon: Collateralfree,
    },
    {
      amount: "₹2 cr",
      title: "NAIFF Loans",
      backgroundImage: "../../assets/Rectangle.png",
      icon: Naiff,
    },
    {
      amount: "₹50 L",
      title: "Seed fund",
      backgroundImage: "../../assets/Rectangle.png",
      icon: SeedFund,
    },
    {
      amount: "₹10 cr",
      title: "Grant fund",
      backgroundImage: "../../assets/Rectangle.png",
      icon: GrantFund,
    },
    {
      amount: "₹1 cr",
      title: "Startup Seed Support",
      backgroundImage: "../../assets/Rectangle.png",
      icon: StartupSeed,
    },
    {
      amount: "₹50 L",
      title: "PMEGP",
      backgroundImage: "../../assets/Rectangle.png",
      icon: Pmegp,
    },
  ];

  return (
    <section className="w-full py-[30px] md:py-[60px] px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="Vietnam-font font-semibold text-[#05325f] text-[28px] md:text-[35.62px]">
            Hot Services (Ft. Funding)
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 mb-20 md:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-[180px]  shadow-none  md:h-[380px] flex flex-col items-center bg-cover md:bg-cover bg-no-repeat bg-center rounded-lg"
              style={{
                background: "linear-gradient(180deg, #F7F9FF 0%, #EAF2FF 100%)",
                boxShadow: "1.04px 2.07px 10.36px 1.04px #00000040",
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
                <h3
                  className="bebas-neue-regular bg-[linear-gradient(171deg,rgba(46,111,182,1)_0%,rgba(123,174,224,0.42)_100%)] 
                  [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] text-transparent 
                  font-['Bebas_Neue'] text-[60px] md:text-[130px] leading-none mt-1 mb-1"
                >
                  {service.amount}
                </h3>

                {/* Collateral Free Loans centered */}
                <h3 className="font-medium text-[#46484f] text-[12px]  md:text-2xl mb-2 md:mb-6">
                  {service.title}
                </h3>

                {/* Avail Now Button centered */}
                <a
                  href="/contact"
                  className="py-1 px-2 md:w-[220px]  md:h-[51px] rounded-md bg-[#3A80C1] hover:bg-[#3076b7] flex items-center justify-center transition"
                >
                  <span className="font-normal text-white text-small text-[11.99px] md:text-[22px] flex items-center">
                    Avail now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      className="w-[14px] md:w-[21px] h-[8px] md:h-[12px] ml-2 md:ml-4"
                    >
                      <path
                        d="M9.57159 7.31981L13.1948 4.15991L9.57159 1"
                        stroke="white"
                        strokeWidth="0.679356"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12.7754 4.23535L0.999939 4.23535"
                        stroke="white"
                        strokeWidth="0.679356"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </a>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
