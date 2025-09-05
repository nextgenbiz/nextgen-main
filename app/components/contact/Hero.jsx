import Image from "next/image";
import contact1 from "../../assets/contact1.png";
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
        <div className="flex flex-col gap-4 flex-1 text-center md:text-center lg:text-left z-10 w-full lg:w-1/2">
          {/* Heading */}
          <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold leading-snug">
            Get Free <br />
            Consultation Today. <br />
            Give us a Call!
          </h1>
        </div>

        {/* About Image */}
        <div className="bg-white p-6 rounded-md shadow-2xl w-full max-w-[500px] h-[280px] flex items-center justify-center">
          <Image
            className="object-contain max-w-[350px] max-h-[200px]"
            alt="Group"
            src={contact1}
            width={400}
            height={250}
            priority
          />
        </div>
      </div>
    </section>
  );
}
