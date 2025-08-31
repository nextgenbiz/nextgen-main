import Image from "next/image";
import contact1 from "../../assets/contact1.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Stripes */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-64.svg')",
          backgroundRepeat: "repeat-x",
        }}
      />

      {/* Background overlay - Hidden on mobile */}
      <Image
        className="absolute right-0 top-0 w-1/2 h-full object-contain hidden lg:block"
        alt="Rectangle"
        src="https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-85.svg"
        width={912}
        height={914}
      />

      {/* Content Container */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 min-h-screen pt-20 lg:pt-10">
        
        {/* Text Content */}
        <div className="z-10 text-center lg:text-left mb-8 lg:mb-0 lg:mr-20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug">
            Get Free <br /> 
            Consultation Today. <br /> 
            Give us a Call!
          </h1>
        </div>

        {/* Image Content */}
        <div className="z-10 flex-shrink-0">
          <Image
            className="bg-white p-2 rounded object-contain w-full max-w-[300px] h-auto lg:w-[550px] lg:h-[330px] lg:max-w-none"
            alt="Group"
            src={contact1}
            width={600}
            height={250}
            priority
          />
        </div>
      </div>
    </section>
  );
}