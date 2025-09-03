import Image from "next/image";
import contact1 from "../../assets/contact1.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden flex items-center justify-center pt-24 sm:pt-28">
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
            Get Free <br />
            Consultation Today. <br />
            Give us a Call!
          </h1>
        </div>
        {/* About Image */}
        <div className="flex w-full justify-center items-center z-10 lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-0">
          <Image
            className="bg-white p-3 sm:p-6 rounded-lg shadow-2xl object-contain w-full max-w-[400px] h-auto"
            alt="Group"
            src={contact1}
            width={500}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}
