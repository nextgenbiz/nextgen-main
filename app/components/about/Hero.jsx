import Image from "next/image";
import about from "../../assets/about.png";
import Hero_Banner from "../../assets/Hero _Banner.webp";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[650px] overflow-hidden flex items-center justify-center pt-24 sm:pt-28">
      <Image
        src={Hero_Banner}
        alt="Hero Banner"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-col lg:flex-row items-center justify-between px-4  py-10 md:py-0 gap-3  w-full md:max-w-[1200px] mx-auto">
        {/* Text Content */}
        <div className="flex flex-col gap-4 flex-1 text-center md:text-center lg:text-left z-10 w-full lg:w-1/2 md:w-full">
          {/* Heading */}
          <h1 className="text-white text-[32px] lg:text-[43.94px] font-semibold leading-snug text-center md:text-left">
            Transforming <br />
            Business Dreams <br />
            Into Reality
          </h1>

          {/* Description */}
          <p className="text-white   md:text-[18.55px] leading-relaxed tracking-wide text-center md:text-left whitespace-normal">
            Founded in 2022, we've revolutionized the consultancy landscape with
            AI-powered solutions and innovative strategies that deliver
            extraordinary results.
          </p>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap justify-center md:justify-center lg:justify-start gap-3 sm:gap-4 mt-4">
            <a className="flex items-center justify-center bg-white border border-white hover:bg-white hover:border-white transition-all duration-300 rounded-xl h-10 sm:h-12 px-6 sm:px-8 transform hover:scale-105 text-sm sm:text-base font-medium text-black">
              Start Your Journey
            </a>

            <a className="flex items-center justify-center bg-white border border-white hover:bg-white hover:border-white transition-all duration-300 rounded-xl h-10 sm:h-12 px-6 sm:px-8 transform hover:scale-105 text-sm sm:text-base font-medium text-black">
              Services
            </a>
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
