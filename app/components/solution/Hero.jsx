import Image from "next/image";
import solution1 from "../../assets/solution1.png";

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
        }}
      />

      {/* Background overlay - Responsive */}
      <Image
        className="absolute right-0 top-0 w-full md:w-3/4 lg:w-1/2 h-full object-cover md:object-contain"
        alt="Rectangle background"
        src="https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-85.svg"
        width={912}
        height={914}
        priority
      />

      {/* Content - Responsive positioning */}
      <div className="relative flex flex-col mt-10 md:mt-1 gap-4 md:gap-6 max-w-7xl min-h-screen justify-center lg:justify-end px-4 sm:px-6 md:px-10 lg:px-20 pb-16 md:pb-20">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Funding <br /> Solutions <br /> For Every Business
        </h1>
        
        {/* Description - Responsive text and layout */}
        <p className="text-white text-base sm:text-lg md:text-xl max-w-md md:max-w-3xl">
          From startups to established enterprises, we<br/> 
          provide comprehensive funding solutions across all <br/>
          business categories with expert guidance and <br/>
          support.
        </p>

        {/* Features - Responsive grid and sizing */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="flex items-center justify-center bg-white border border-white/20 backdrop-blur rounded-xl h-12 sm:h-10 px-6 w-full sm:w-48">
            <span className="text-black text-sm font-medium text-center">Get Funding Now</span>
          </div>

          <div className="flex items-center justify-center bg-white border border-white/20 backdrop-blur rounded-xl h-12 sm:h-10 px-6 w-full sm:w-48">
            <span className="text-black text-sm font-medium text-center">Expert Consultation</span>
          </div>
        </div>
      </div>
      
      {/* Solution Image - Responsive positioning with proper dimensions */}
      <div className="absolute 
          left-1/2 -translate-x-1/2 bottom-4 
          sm:left-auto sm:translate-x-0 sm:right-4 sm:bottom-4
          md:right-8 md:bottom-8
          lg:right-40 lg:top-[280px] lg:bottom-auto
          w-[200px] h-[120px] 
          sm:w-[250px] sm:h-[150px] 
          md:w-[350px] md:h-[210px] 
          lg:w-[450px] lg:h-[270px] 
          xl:w-[550px] xl:h-[330px]">
        <Image
          className="bg-white p-2 rounded object-contain w-full h-full"
          alt="Business solution illustration"
          src={solution1}
          width={550}
          height={330}
          priority
        />
      </div>
    </section>
  );
}