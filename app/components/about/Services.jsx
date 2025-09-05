"use client";
import Image from "next/image";
import aboutImage from "../../assets/about2.png";
import { useState } from "react";

const features = [
  {
    title: "YOUR DREAM,\nOUR DRIVE",
    description:
      "Every startup begins with a spark. We turn that spark into fire,\nideas into businesses, dreams into unstoppable realities.",
  },
  {
    title: "SIMPLICITY OVER JARGON",
    description:
      "No heavy words, no confusion. We speak your language, business made easy, success made possible.",
  },
  {
    title: "GROWTH WITHOUT LIMITS",
    description:
      "From registrations to funding, from strategy to scaling. We don't just open doors, we build entire highways for your growth.",
  },
  {
    title: "WITH YOU, ALWAYS",
    description:
      "We don't leave after advice. We walk with you every step, from first step to full scale. True partners never quit.",
  },
];

function FeatureCard({ title, description, isActive, onClick }) {
  return (
    <div
      className={`relative w-[300px] h-[300px] bg-[#b4cce6] rounded-[15px] overflow-hidden shadow-lg p-6 border border-gray-400 transition-all duration-300 cursor-pointer ${
        isActive ? "scale-105 shadow-xl border-blue-500" : "hover:scale-105"
      }`}
      onClick={onClick}
    >
      <div className="relative w-full h-full flex flex-col justify-center">
        <h3 className="font-['Bebas_Neue'] font-normal text-[#264c92] text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-3">
          {title}
        </h3>
        <p className="font-normal text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-left">
          •{" "}
          {description.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <>
      <section className="w-full relative py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="max-w-7xl mx-auto font-semibold text-[#05325f] text-3xl md:text-5xl leading-tight">
              About
            </h2>
            <div className="flex justify-center">
              <Image
                className="bg-white p-2 rounded-lg object-contain"
                alt="About our consultancy"
                src={aboutImage}
                width={800}
                height={100}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative py-10 bg-white mt-[-20px]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              {...feature}
              isActive={activeCard === idx}
              onClick={() => handleCardClick(idx)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
