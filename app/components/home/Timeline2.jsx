// components/Timeline.tsx
"use client";
import Image from "next/image";
import timeline from "../../assets/timeline.png";

const steps = [
  {
    id: 1,
    title: "The Spark",
    subtitle: "Sab kuch ek dream se shuru hota hai.",
    desc: "We help you shape your vision into bold, practical action.",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/vector-7.svg",
  },
  {
    id: 2,
    title: "The Structure",
    subtitle: "Legal, financial & regulatory setup sorted.",
    desc: "Aapko build karte hain scale ke liye, struggle ke liye nahi.",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/vector-5.svg",
  },
  {
    id: 3,
    title: "The Lift",
    subtitle: "Pitch decks, fundraising, resources - all in place.",
    desc: "We connect you to the right investors, at the right time.",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/vector-15.svg",
    iconClass: "absolute w-8 h-[34px] top-[479px] left-[53px]",
  },

  {
    id: 4,
    title: "The Push",
    subtitle: "Go-to-market strategies + digital presence.",
    desc: "Hum banate hain aapka brand jo market mein ghoome, chale, aur chale tez!",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/group-3.png",
  },

  {
    id: 5,
    title: "The Motion",
    subtitle: "Startup sirf launch nahi hota: accelerate hota hai.",
    desc: "Aur hum ensure karte hai ki aapki momentum kabhi rukhe nahi.",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/group-226.png",
    iconClass: "absolute w-[39px] h-[37px] top-[848px] left-[47px]",
  },
];

export default function Timeline2() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(232,244,255,1)_0%,rgba(232,244,255,1)_100%)] py-20 px-0">
      <div className="mx-auto relative">
        {/* Header */}
        <div className="text-center  mb-10">
          <h2 className="max-w-7xl mx-auto  font-semibold text-[#05325f] text-[30px] md:text-[47.5px] leading-normal">
            From Spark to Motion — The Next-Gen Way:
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative  mx-auto h-full">
            {/* Background rectangles */}
            {/* <div
            className=" w-full h-[164px] left-0 bg-cover md:bg-fill"
            style={{
                backgroundImage: "url('https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-95.svg')"
            }}
            ></div> */}

            {/* Timeline Items */}
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative mt-1 md:mt-6 w-full flex items-center gap-4 px-4 md:gap-8 md:px-20 py-3 md:py-3 rounded-lg shadow-lg bg-white mb-5 md:mb-20"
                style={{
                  backgroundImage: `url(${timeline.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "repeat",
                }}
              >
                {/* Icon Container */}
                <div className="relative z-[1] flex justify-center items-center p-4 md:p-5 rounded-full border border-[#6b728080] shadow-[0px_0.99px_9.87px_0.99px_#00000040] bg-gradient-to-b from-[#2E5AA8] to-[#3A80C1]">
                  <Image
                    height={29}
                    width={29}
                    src={step.icon}
                    alt={step.title}
                    className="w-[19px] h-[19px] md:w-[29px] md:h-[29px]"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col ">
                  <h3
                    className={`font-semibold font-['Be_Vietnam_Pro'] font-semibold text-[#264c92] text-lg md:text-[28.6px] leading-normal `}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={` font-medium text-black text-sm md:text-[17.8px] leading-normal`}
                  >
                    {step.subtitle}
                  </p>
                  <p
                    className={`text-black font-normal text-sm md:text-[19.7px] `}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Vertical line */}
              </div>
            ))}
            <Image
              height={164}
              width={1403}
              className="absolute w-3.5 h-[115vh] md:h-[120vh] top-[-30px] md:top-0 scale-[1] md:scale-[1.1] left-[32px] md:left-[110px] z-0"
              src="https://c.animaapp.com/metmcazsfuMR7v/img/line-14.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
