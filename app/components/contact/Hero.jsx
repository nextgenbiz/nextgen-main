import Image from "next/image";
import contact1 from "../../assets/contact1.png";

export default function Hero() {
  return (
    <section className="pt-20 md:pt-0 relative w-full  h-[80vh]  overflow-hidden flex flex-col justify-center align-center items-center mx-auto ">
      {/* Background Stripes */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage:
            "url('https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-64.svg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
      />

      {/* Background overlay - Hidden on mobile
      <Image
        className="absolute right-0 top-0 w-[50%] md:w-2/3 lg:w-2/2  object-contain hidden md:block"
        alt="Rectangle"
        src="https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-85.svg"
        width={20}
        height={20}
        priority
      /> */}

      {/* Content Container */}
      <div className="relative mt-20 max-w-7xl flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 py-4 gap-8 mx-auto">
        {/* Text Content */}
        <div className="flex flex-col gap-4 text-center lg:text-left max-w-2xl lg:max-w-none z-10">
          {/* Heading */}
          <h1 className="text-white xs:text-4xl md:text-5xl font-semibold text-3xl sm:text-5xl lg:text-6xl ">
            Get Free <br />
            Consultation Today. 
            Give us a Call!  
          </h1>
        </div>
        {/* About Image */}
        <div className="flex w-full justify-center items-center z-10" style={{width: '70%', maxWidth: '80%', margin: '0 auto'}}>
          <Image
            className="bg-white rounded-xl shadow-2xl object-contain aspect-[16/9]"
            alt="Group"
            src={contact1}
            width={500}
            height={250}
            priority
            style={{
              width: '90%',
              height: 'auto',
              padding: '3%',
            }}
          />
        </div>
      </div>
    </section>
  );
}
