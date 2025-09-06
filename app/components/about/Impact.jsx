"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import Impact1 from "../../assets/Impact1.png";
import Impact2 from "../../assets/Impact2.png";
import Impact3 from "../../assets/Impact3.png";
import Impact4 from "../../assets/Impact4.png";

const Impact = () => {
  const impacts = [
    {
      image: Impact1,
      title: "Impact That Lasts",
      description:
        "We don't just build profits; we build brands that inspire trust, loyalty, and lasting market influence.",
    },
    {
      image: Impact2,
      title: "Partnership for Life",
      description:
        "Every client is a co-traveler. Hum saath hai aapke har mod pe, not just projects but long-term journeys.",
    },
    {
      image: Impact3,
      title: "Growth Without Limits",
      description:
        "Your vision doesn't stop; neither do we. From scaling up to breaking barriers, we keep fueling your momentum.",
    },
    {
      image: Impact4,
      title: "Innovation at Core",
      description:
        "We challenge norms, rethink models, and deliver fresh ideas so your business stays relevant in an evolving world.",
    },
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.6s forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="w-full relative py-[30px] md:py-[60px] bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-14">
          <h2 className="font-semibold text-[#05325f] text-[16.45px] md:text-[47.5px] leading-tight">
            Beyond Business, Toward Legacy
          </h2>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="animate-fade-in-up opacity-0 bg-[#f2f7fd] rounded-2xl p-4 shadow-md border border-blue-100 transition-transform hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-5">
                {/* Icon */}
                <div className="flex-shrink-0   md:h-full flex items-center justify-center rounded-xl bg-white shadow-sm">
                  <Image
                    src={impact.image}
                    alt={impact.title}
                    className="md:w-full md:h-full w-[29.31px] h-[43.65px] object-contain"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-[11.49px] md:text-[22.2px] font-semibold text-[#2c5282] mb-2 leading-snug">
                    {impact.title}
                  </h3>
                  <p className="text-gray-700 text-[8.96px] md:text-[17.32px] leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
