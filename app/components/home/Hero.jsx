import Image from "next/image";
import Hero_Banner from "../../assets/Hero _Banner.webp";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex flex-col py-20 md:pt-2 ">
      {/* Background Image */}
      <Image
        src={Hero_Banner}
        alt="Hero Banner"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative flex flex-col mt-5 md:mt-20 gap-6  min-h-screen justify-center px-6 sm:px-10 lg:px-20 pb-20">
        {/* Growth Partner Badge */}
        <div className="flex items-center justify-between bg-[#264c9280] border border-white/20 backdrop-blur rounded-lg px-2 py-2 md:w-[350px]">
          <span className="text-white text-[18.08px] md:text-[23px] font-medium">
            Your Growth Partner
          </span>
          <div className="bg-[#3A80C1]  px-2 pb-1  rounded-md">
            <span className="text-white text-[10px] md:text-[12px] font-medium">
              Co-founder
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-white text-[32px] lg:text-[43.94px] font-semibold leading-snug text-center md:text-left">
          Your Vision, Our Execution.
          <br /> Zero Obstacles.
        </h1>

        {/* Description */}
        <p className="text-white   md:text-[18.55px] leading-relaxed tracking-wide text-center md:text-left whitespace-normal md:whitespace-nowrap">
          Business is not a journey, it's an expedition. Every obstacle ek pahad
          hai, every win ek nayi duniya. <br />
          We're not here to advise; hum hain aapke saath legends & legacies
          banane ke liye.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 md:mt-10 w-70 md:w-full mx-auto">
          <div className="flex items-center justify-between bg-[#264c9266] border border-white/20 backdrop-blur rounded-xl p-4">
            <span className="text-white text-[11.2px] md:text-[27.24px] font-medium">
              Bold Vision
            </span>
            <Image
              alt="Eye"
              className="w-[31px] h-[20px] md:w-[78px] md:h-[48px]"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/eye-svgrepo-com-1.svg"
              width={80}
              height={80}
            />
          </div>

          <div className="flex items-center justify-between bg-[#264c9266] border border-white/20 backdrop-blur rounded-xl px-4">
            <span className="text-white text-[11.2px] md:text-[27.24px] font-medium">
              True Growth
            </span>
            <Image
              alt="Growth"
              className="w-[31px] h-[20px] md:w-[78px] md:h-[48px]"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/growth-svgrepo-com-1.svg"
              width={80}
              height={80}
            />
          </div>

          <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
            <div className="flex items-center justify-between bg-[#264c9266] border border-white/20 backdrop-blur rounded-xl p-4 md:w-full ">
              <span className="text-white text-[11.2px] md:text-[27.24px] font-medium">
                Limitless Scale
              </span>
              <Image
                alt="Scale"
                className="w-[31px] h-[20px] md:w-[78px] md:h-[48px]"
                src="https://c.animaapp.com/metmcazsfuMR7v/img/vector.svg"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
