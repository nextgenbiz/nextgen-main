import Image from "next/image";
import Hero_Banner from "../../assets/Hero _Banner.webp";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col pt-20 md:pt-2">
      {/* Background Image */}
      <Image
        src={Hero_Banner}
        alt="Hero Banner"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Background Stripes */}
      {/* <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-64.svg')",
          backgroundRepeat: "repeat-x",
        }}
      /> */}

      {/* Content */}
      <div className="relative flex flex-col mt-10 gap-6 max-w-7xl min-h-screen justify-end px-6 sm:px-10 lg:px-20 pb-20">
        {/* Growth Partner Badge */}
        <div className="flex items-center justify-between bg-[#264c9280] border border-white/20 backdrop-blur rounded-lg px-4 py-2 w-full max-w-xl">
          <span className="text-white text-xl sm:text-2xl font-medium">
            Your Growth Partner
          </span>
          <div className="bg-[url(https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-86.svg)] bg-cover px-3 py-1 rounded-md">
            <span className="text-white text-sm sm:text-base font-medium">
              Co-founder
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold leading-snug text-center md:text-left">
          Your Vision, Our Execution.
          <br /> Zero Obstacles.
        </h1>

        {/* Description */}
        <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed tracking-wide text-center md:text-left whitespace-normal md:whitespace-nowrap">
          Business is not a journey, it's an expedition. Every obstacle ek pahad
          hai, every win ek nayi duniya. <br />
          We're not here to advise; hum hain aapke saath legends & legacies
          banane ke liye.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="flex items-center justify-between bg-[#264c9266] border border-white/20 backdrop-blur rounded-xl p-4">
            <span className="text-white text-lg md:text-2xl font-medium">
              Bold Vision
            </span>
            <Image
              alt="Eye"
              className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/eye-svgrepo-com-1.svg"
              width={80}
              height={80}
            />
          </div>

          <div className="flex items-center justify-between bg-[#264c9266] border border-white/20 backdrop-blur rounded-xl p-4">
            <span className="text-white text-lg md:text-2xl font-medium">
              True Growth
            </span>
            <Image
              alt="Growth"
              className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/growth-svgrepo-com-1.svg"
              width={80}
              height={80}
            />
          </div>

          <div className="flex items-center justify-between bg-[#264c9266] border border-white/20 backdrop-blur rounded-xl p-4">
            <span className="text-white text-lg md:text-2xl font-medium">
              Limitless Scale
            </span>
            <Image
              alt="Scale"
              className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/vector.svg"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
