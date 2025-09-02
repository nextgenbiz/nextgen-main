import Image from "next/image";
import about from "../../assets/about.png";

export default function Hero() {
  return (
    <section className="pt-20 md:pt-0 relative w-full h-full md:h-[80vh]  overflow-hidden flex flex-col">
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
        className="absolute right-0 top-0 w-[50%] md:w-2/3 lg:w-2/2  object-contain hidden md:block"
        alt="Rectangle"
        src="https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-85.svg"
        width={20}
        height={20}
        priority
      />

      {/* Content Container */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen px-4 sm:px-6 lg:px-12 xl:px-20 pt-16 pb-10 lg:py-20 gap-8 lg:gap-12 xl:gap-16">
        {/* Text Content */}
        <div className="flex flex-col gap-4   flex-1 text-center lg:text-left max-w-2xl lg:max-w-none z-10">
          {/* Heading */}
          <h1 className="text-white xs:text-4xl md:text-5xl font-semibold text-3xl sm:text-5xl lg:text-6xl ">
            Transforming <br/>Business Dreams
            <br />
            Into Reality
          </h1>

          {/* Description */}
          <p className="text-white text-base sm:text-lg lg:text-xl max-w-3xl">
            Founded in 2022, we've revolutionized the <br/> consultancy landscape with
            AI-powered solutions <br/>and innovative strategies that deliver<br/>
            extraordinary results.
          </p>

          {/* Buttons */}
         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start mt-6 sm:mb-10">
            <button className="flex items-center justify-center bg-white hover:bg-gray-100 transition-all duration-300 rounded-xl h-10 sm:h-12 px-6 sm:px-8 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="text-black text-sm sm:text-base font-medium">
                Start Your Journey
              </span>
            </button>

            <button className="flex items-center mb-8 justify-center bg-white border-white hover:bg-white hover:border-white transition-all duration-300 rounded-xl h-10 sm:h-12 px-6 sm:px-8 w-full sm:w-auto transform hover:scale-105">
              <span className="text-black text-sm sm:text-base font-medium">
                Services
              </span>
            </button>
          </div>
        </div>

        {/* About Image */}
        <div className="flex justify-center align-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl z-10">
          <Image
            className="bg-white p-3 sm:p-4 rounded-lg shadow-2xl object-contain w-1/2"
            alt="Group"
            src={about}
            width={500}
            // height={200}
            priority
            style={{
              width: '70%',
              // height: '30%',
              padding: '2%',
            }}
          />
        </div>
      </div>
    </section>
  );
}
