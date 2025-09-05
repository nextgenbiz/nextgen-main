import Image from "next/image";
import about from "../../assets/about.png";
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

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-20 py-10 lg:py-0 gap-8 lg:gap-12 xl:gap-16 w-full max-w-7xl mx-auto">
        
        {/* Text Content */}
        <div className="flex flex-col gap-4 flex-1 text-center md:text-center lg:text-left z-10 w-full lg:w-1/2 md:w-full">
          
          {/* Heading */}
          <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold leading-snug md:leading-snug">
            Transforming <br /> 
            Business Dreams <br />
            Into Reality
          </h1>

          {/* Description */}
          <p className="text-white text-sm sm:text-base md:text-base lg:text-lg leading-relaxed md:leading-relaxed max-w-xl mx-auto md:mx-auto lg:mx-0">
            Founded in 2022, we've revolutionized the <br />
            consultancy landscape with AI-powered solutions <br /> 
            and innovative strategies that deliver  <br /> 
            extraordinary results. 
          </p>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap justify-center md:justify-center lg:justify-start gap-3 sm:gap-4 mt-4">
            <button className="flex items-center justify-center bg-white hover:bg-gray-100 transition-all duration-300 rounded-xl h-10 sm:h-12 px-6 sm:px-8 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base font-medium text-black">
              Start Your Journey
            </button>

            <button className="flex items-center justify-center bg-white border border-white hover:bg-white hover:border-white transition-all duration-300 rounded-xl h-10 sm:h-12 px-6 sm:px-8 transform hover:scale-105 text-sm sm:text-base font-medium text-black">
              Services
            </button>
          </div>
        </div>

        {/* About Image */}
        <div className="bg-white p-6 rounded-md shadow-2xl w-full max-w-[500px] h-[280px] flex items-center justify-center md:mt-4 md:w-full">
          <Image
            className="object-contain max-w-[420px] max-h-[280px]"
            alt="Group"
            src={about}
            width={400}
            height={250}
            priority
          />
        </div>
      </div>
    </section>
  );
}
