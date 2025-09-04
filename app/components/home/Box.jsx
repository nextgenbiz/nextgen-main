"use client";

const Box = () => {
  return (
    <section className="w-full bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 pt-10 md:pt-16 px-4">
          <h2 className="font-['Be_Vietnam_Pro'] font-semibold text-[#05325f] text-3xl sm:text-4xl md:text-[46.6px]">
            Achieving Business Growth
          </h2>
        </div>
      </div>

      {/* Video with spacing */}
      <div className="w-full md:px-8">
        <div className="h-[300px] sm:h-[500px] md:h-[800px] lg:h-[1050px] overflow-hidden rounded-1xl">
          <video
            className="w-full h-full object-cover"
            src="/videos/Achieving_Business_Growth.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default Box;
