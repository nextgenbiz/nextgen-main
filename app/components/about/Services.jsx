"use client";
import Image from "next/image";
import aboutImage from "../../assets/about2.png";
import { useState } from "react";

const features = [
  {
    title: "YOUR DREAM,  OUR DRIVE",
    description: "Every startup begins with a spark. We turn that spark into fire, ideas into businesses, dreams into unstoppable realities."
  },
  {
    title: "SIMPLICITY OVER JARGON",
    description: "No heavy words, no confusion. We speak your language, business made easy, success made possible."
  },
  {
    title: "GROWTH WITHOUT LIMITS",
    description: "From registrations to funding, from strategy to scaling. We don't just open doors, we build entire highways for your growth."
  },
  {
    title: "WITH YOU, ALWAYS",
    description: "We don't leave after advice. We walk with you every step, from first step to full scale. True partners never quit."
  }
];

function FeatureCard({ title, description, isActive, onClick }) {
  return (
    <div 
      className={`relative w-[300px] h-[300px] bg-[#b4cce6] rounded-[15px] overflow-hidden shadow-lg p-6 border border-gray-400 transition-all duration-300 cursor-pointer ${
        isActive ? "scale-105 shadow-xl border-blue-500" : "hover:scale-102"
      }`}
      onClick={onClick}
    >
      <div className="relative w-full h-full flex flex-col justify-center">
        <h3 className="font-sans-Neo Grotesque  font-extrabold text-blue-900 text-xl mb-4 text-left">
          {/* <h3 className="font-serif - roun  font-extrabold text-blue-900 text-xl mb-4 text-left"> */}
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed text-left">
          • {description}
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
          <div className="text-center  mb-10">
            <h2 className="max-w-7xl mx-auto  font-semibold text-[#05325f] text-[30px] md:text-[47.5px] leading-normal">
            About</h2>
            <div className="flex justify-center">
              <Image
                className="bg-white p-2 rounded-lg object-contain"
                alt="About our consultancy"
                src={aboutImage} 
                width={800}
                height={100}
                style={{ 
                  objectFit: 'contain'
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