import Image from "next/image";
import about from "../../assets/about.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Background Stripes */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-64.svg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
      />

      {/* Background overlay - Hidden on mobile */}
      <Image
        className="absolute right-0 top-0 w-full md:w-2/3 lg:w-1/2 h-full object-contain hidden md:block"
        alt="Rectangle"
        src="https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-85.svg"
        width={912}
        height={914}
        priority
      />

      {/* Content Container */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen px-4 sm:px-6 lg:px-12 xl:px-20 pt-16 pb-10 lg:py-20 gap-8 lg:gap-12 xl:gap-16">
        
        {/* Text Content */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 flex-1 text-center lg:text-left max-w-2xl lg:max-w-none z-10">
          {/* Heading */}
          <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
            Transforming<br className="hidden xs:block" />
            Business Dreams<br className="hidden xs:block" />
            Into Reality
          </h1>

          {/* Description */}
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl max-w-full md:max-w-2xl lg:max-w-3xl leading-relaxed mt-4 sm:mt-6">
            Founded in 2022, we've revolutionized the consultancy landscape with AI-powered solutions and innovative strategies that deliver extraordinary results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start mt-6 sm:mt-8">
            <button className="flex items-center justify-center bg-white hover:bg-gray-100 transition-all duration-300 rounded-xl h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="text-black text-sm sm:text-base font-medium">Start Your Journey</span>
            </button>
            
            <button className="flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:border-white transition-all duration-300 rounded-xl h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto transform hover:scale-105">
              <span className="text-white hover:text-black text-sm sm:text-base font-medium">Services</span>
            </button>
          </div>
        </div>

        {/* About Image */}
        <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl z-10">
          <Image
            className="bg-white p-3 sm:p-4 rounded-lg shadow-2xl object-contain w-full h-auto"
            alt="Group"
            src={about}
            width={550}
            height={330}
            priority
          />
        </div>
      </div>
    </section>
  );
}