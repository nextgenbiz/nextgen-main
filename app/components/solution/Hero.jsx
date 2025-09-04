import Image from "next/image";
import solution1 from "../../assets/solution1.png";
import Hero_Banner from "../../assets/Hero _Banner.webp";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden flex items-center justify-center pt-24 sm:pt-28">
      <Image
        src={Hero_Banner}
        alt="Hero Banner"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Background Stripes */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-64.svg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 110%",
        }}
      />

      {/* Content Container */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-20 py-10 lg:py-0 gap-8 lg:gap-12 xl:gap-16 w-full max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex flex-col gap-4 flex-1 text-center lg:text-left z-10 lg:w-1/2">
          {/* Heading */}
          <h1 className="text-white xs:text-4xl md:text-5xl font-semibold text-3xl sm:text-5xl lg:text-6xl">
            Funding <br />
            Solutions <br />
            For Every Business
          </h1>

          {/* Description */}
          <p className="text-white text-base sm:text-lg lg:text-xl max-w-3xl">
            From startups to established enterprises, we <br />
            provide comprehensive funding solutions across all <br />
            business categories with expert guidance and <br />
            support.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start mt-6">
            <button className="flex items-center justify-center bg-white hover:bg-gray-100 transition-all duration-300 rounded-xl h-10 sm:h-12 px-6 sm:px-8 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="text-black text-sm sm:text-base font-medium">
                Get Funding Now
              </span>
            </button>

            <button className="flex items-center justify-center bg-white border-white hover:bg-white hover:border-white transition-all duration-300 rounded-xl h-10 sm:h-12 px-6 sm:px-8 w-full sm:w-auto transform hover:scale-105">
              <span className="text-black text-sm sm:text-base font-medium">
                Expert Consultation
              </span>
            </button>
          </div>
        </div>

        {/* About Image */}
        <div className="bg-white p-6 rounded-md shadow-2xl w-full max-w-[500px] h-[350px] flex items-center justify-center">
          <Image
            className="object-contain max-w-[400px] max-h-[250px]"
            alt="Group"
            src={solution1}
            width={500}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}
