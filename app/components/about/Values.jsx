// components/SparkToMotion.jsx
"use client";
import { Shield, Users, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const valuesData = [
  {
    title: "Integrity First",
    description:
      "We believe in honesty, transparency, and building trust, no shortcuts, bas clear aur sahi kaam.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "People Over Profit",
    description:
      "Your success matters more than numbers. Relationships drive growth, aur wahi hai hamara true ROI.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Innovation Everyday",
    description:
      "We simplify complexity with fresh ideas, practical solutions, aur thode out-of-the-box thoughts for businesses.",
    icon: <Lightbulb className="w-5 h-5" />,
  },
];

function SparkToMotion() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <section className="w-full relative py-16 bg-white overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div> */}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center  mb-10">
          <h2 className="max-w-7xl mx-auto  font-semibold text-[#05325f] text-[30px] md:text-[47.5px] leading-normal">
            From Spark to Motion - The Next-Gen Way:
          </h2>

          {/* Tab Layout */}
          <div className="hidden lg:flex items-center justify-center mt-10">
            <div className="flex bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
              {valuesData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`flex items-center gap-2 px-6 py-3 cursor-pointer text-sm font-semibold transition-all duration-300 ${
                    activeCard === index
                      ? "bg-gradient-to-r from-[#245586] to-[#76a5d3] text-white"
                      : "bg-white text-black hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                      activeCard === index
                        ? "bg-white/20 border-white text-white"
                        : "bg-[#1c4268] text-white border-[#1c4268]/20"
                    }`}
                  >
                    {item.icon}
                  </div>
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          <div className="flex justify-center gap-8">
            {valuesData.map((item, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 w-80 ${
                  index === 1 ? "w-96 z-20" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`${
                    activeCard === index
                      ? "bg-gradient-to-br from-[#245586] to-[#76a5d3] text-white"
                      : "bg-white text-[#1c4268]"
                  } rounded-2xl shadow-lg p-8 border transition-all duration-500 h-full ${
                    activeCard === index
                      ? "ring-4 ring-blue-300"
                      : "border-gray-200"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                      activeCard === index
                        ? "bg-white/20 text-white"
                        : "bg-[#1c4268] text-white"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p
                    className={`leading-relaxed ${
                      activeCard === index ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {valuesData.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-500 hover:scale-105"
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`${
                    activeCard === index
                      ? "bg-gradient-to-br from-[#245586] to-[#76a5d3] text-white"
                      : "bg-white text-[#1c4268]"
                  } rounded-2xl shadow-md p-6 border transition-all duration-500 h-full ${
                    activeCard === index
                      ? "ring-4 ring-blue-300"
                      : "border-gray-200"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                      activeCard === index
                        ? "bg-white/20 text-white"
                        : "bg-[#1c4268] text-white"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      activeCard === index ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Third card full width */}
            <div className="col-span-2 flex justify-center mt-4">
              <div
                className="group cursor-pointer transition-all duration-500 hover:scale-105 w-full max-w-md"
                onClick={() => handleCardClick(2)}
              >
                <div
                  className={`${
                    activeCard === 2
                      ? "bg-gradient-to-br from-[#245586] to-[#76a5d3] text-white"
                      : "bg-white text-[#1c4268]"
                  } rounded-2xl shadow-md p-6 border transition-all duration-500 ${
                    activeCard === 2
                      ? "ring-4 ring-blue-300"
                      : "border-gray-200"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                      activeCard === 2
                        ? "bg-white/20 text-white"
                        : "bg-[#1c4268] text-white"
                    }`}
                  >
                    {valuesData[2].icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    {valuesData[2].title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      activeCard === 2 ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {valuesData[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {valuesData.map((item, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 ${
                activeCard === index ? "scale-105" : "hover:scale-102"
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`${
                  activeCard === index
                    ? "bg-gradient-to-br from-[#245586] to-[#76a5d3] text-white"
                    : "bg-white text-[#1c4268]"
                } rounded-2xl shadow-md p-6 border transition-all duration-500 ${
                  activeCard === index
                    ? "ring-2 ring-blue-300"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                      activeCard === index
                        ? "bg-white/20 text-white"
                        : "bg-[#1c4268] text-white"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <div
                        className={
                          activeCard === index ? "text-white" : "text-[#1c4268]"
                        }
                      >
                        {activeCard === index ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </div>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        activeCard === index
                          ? "text-blue-100 mt-2"
                          : "text-gray-600 line-clamp-2"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom indicator dots */}
        {/* <div className="mt-12 flex justify-center">
          <div className="flex space-x-3">
            {valuesData.map((item, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCard === index
                    ? "bg-gradient-to-r from-[#245586] to-[#76a5d3] scale-125 shadow-md"
                    : "bg-gray-300 hover:bg-[#1c4268] hover:scale-110"
                }`}
                onClick={() => handleCardClick(index)}
              ></div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default SparkToMotion;
