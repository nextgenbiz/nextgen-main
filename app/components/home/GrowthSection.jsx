"use client";

import Image from "next/image";

const steps = [
  {
    title: "We Listen First",
    description:
      "Great story shuru hoti hai ek step se — samajhna aur sunna. We align with your vision, struggles, and dreams.",
    img: "https://c.animaapp.com/metmcazsfuMR7v/img/group-236.png",
    alt: "We Listen First icon",
    justify: "start",
  },
  {
    title: "We Build the Base",
    description:
      "Registration, compliance, licenses — sab kuch sorted. Foundation banate hain jo aapko scale kare, not struggle.",
    img: "https://c.animaapp.com/metmcazsfuMR7v/img/group-237.png",
    alt: "We Build the Base icon",
    justify: "center",
  },
  {
    title: "We Fuel the Fire",
    description:
      "Funding, mentorship, resources — sab under one roof. Aapki ambition ko growth mein badalna is our mission.",
    img: "https://c.animaapp.com/metmcazsfuMR7v/img/group-238.png",
    alt: "We Fuel the Fire icon",
    justify: "end",
  },
  {
    title: "We Amplify the Impact",
    description:
      "Marketing aur growth strategies jo sirf dikhaye nahi — market mein raj karein. Aapka brand banega recognizable aur unstoppable.",
    img: "https://c.animaapp.com/metmcazsfuMR7v/img/group-239.png",
    alt: "We Amplify the Impact icon",
    justify: "center",
  },
];

export default function GrowthSection() {
  return (
    <section className="w-full py-16 px-4 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-['Be_Vietnam_Pro'] font-semibold text-[#05325f] text-[44.7px] leading-normal mb-16">
          Achieving Business Growth
        </h2>

        <div className="relative">
          {/* Background flow image (decorative) */}
          <div
            className="absolute inset-0 w-full h-full z-0 opacity-20"
            style={{
              backgroundImage:
                "url('https://c.animaapp.com/metmcazsfuMR7v/img/group-244.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />

          {/* Steps Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex justify-${step.justify}`}>
                <div className="flex flex-col items-start max-w-md">
                  <div className="mb-6">
                    <Image
                      src={step.img}
                      alt={step.alt}
                      width={101}
                      height={81}
                      className="w-[101px] h-[81px]"
                    />
                  </div>
                  <h3 className="font-['Be_Vietnam_Pro'] font-bold text-[#05325f] text-[26.8px] leading-normal mb-4">
                    {step.title}
                  </h3>
                  <p className="font-['Be_Vietnam_Pro'] font-normal text-[#46484f] text-[17.9px] leading-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Growth arrows */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
            <Image
              src="https://c.animaapp.com/metmcazsfuMR7v/img/vector-4.svg"
              alt="Growth arrow 1"
              width={112}
              height={114}
              className="w-28 h-[114px]"
            />
          </div>

          <div className="absolute top-1/4 right-1/4 z-5">
            <Image
              src="https://c.animaapp.com/metmcazsfuMR7v/img/vector-13.svg"
              alt="Growth arrow 2"
              width={111}
              height={112}
              className="w-[111px] h-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
