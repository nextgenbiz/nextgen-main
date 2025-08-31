// components/SparkToMotion.tsx
"use client";
import { Shield, Users, Lightbulb } from "lucide-react";
import { useState } from "react";

const valuesData = [
  {
    title: "Integrity First",
    description: "We believe in honesty, transparency, and building trust, no shortcuts, bas clear aur sahi kaam.",
    icon: <Shield className="w-6 h-6" />,
    bgColor: "bg-white",
    textColor: "text-[#1c4268]",
    iconBg: "bg-[#1c4268]",
    iconColor: "text-white",
    borderColor: "border-gray-200",
  },
  {
    title: "People Over Profit", 
    description: "Your success matters more than numbers. Relationships drive growth, aur wahi hai hamara true ROI.",
    icon: <Users className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-[#245586] to-[#76a5d3]",
    textColor: "text-white",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    borderColor: "border-transparent",
    highlight: true,
  },
  {
    title: "Innovation Everyday",
    description: "We simplify complexity with fresh ideas, practical solutions, aur thode out-of-the-box thoughts for businesses.",
    icon: <Lightbulb className="w-6 h-6" />,
    bgColor: "bg-white",
    textColor: "text-[#1c4268]",
    iconBg: "bg-[#1c4268]",
    iconColor: "text-white",
    borderColor: "border-gray-200",
  },
];

function SparkToMotion() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="w-full relative py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1c4268] mb-8 leading-tight">
            From Spark to Motion — The Next-Gen Way:
          </h2>
          
          {/* Value Pills - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:inline-flex items-center bg-white rounded-xl gap-3 p-3 shadow-xl border border-gray-100">
            {valuesData.map((item, index) => (
              <div key={index} className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-300 ${
                item.highlight 
                  ? 'bg-gradient-to-r from-[#245586] to-[#76a5d3] text-white shadow-lg' 
                  : 'bg-white text-[#1c4268] border border-gray-200 hover:border-[#1c4268] hover:shadow-md'
              }`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  item.highlight ? 'bg-white/20' : 'bg-[#1c4268]'
                }`}>
                  <div className={item.highlight ? 'text-white' : 'text-white'}>
                    {item.icon}
                  </div>
                </div>
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Three overlapping cards */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          <div className="relative flex justify-between items-start">
            {valuesData.map((item, index) => (
              <div 
                key={index} 
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                  index === 0 ? 'w-80 mt-0' : 
                  index === 1 ? 'w-96 mt-12 mx-6' : 
                  'w-80 mt-0'
                } ${
                  index === 1 ? 'z-20' : 'z-10'
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className={`${item.bgColor} rounded-2xl shadow-2xl p-8 border-2 ${item.borderColor} transition-all duration-500 group-hover:shadow-3xl ${
                  item.highlight ? 'shadow-blue-500/20' : ''
                }`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <div className={item.iconColor}>
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-4 ${item.textColor}`}>
                    {item.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    item.highlight ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                  
                  {/* Decorative elements */}
                  {item.highlight && (
                    <>
                      <div className="absolute top-6 right-6 w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/20 rounded-full"></div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout - Two columns */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {valuesData.slice(0, 2).map((item, index) => (
              <div 
                key={index} 
                className="group cursor-pointer transition-all duration-500 hover:scale-105"
                onClick={() => handleCardClick(index)}
              >
                <div className={`${item.bgColor} rounded-2xl shadow-xl p-6 border-2 ${item.borderColor} transition-all duration-500 group-hover:shadow-2xl h-full`}>
                  <div className={`w-14 h-14 ${item.iconBg} rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <div className={item.iconColor}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${item.textColor}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    item.highlight ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Third card spans full width */}
            <div className="col-span-2 flex justify-center">
              <div 
                className="group cursor-pointer transition-all duration-500 hover:scale-105 max-w-md"
                onClick={() => handleCardClick(2)}
              >
                <div className={`${valuesData[2].bgColor} rounded-2xl shadow-xl p-6 border-2 ${valuesData[2].borderColor} transition-all duration-500 group-hover:shadow-2xl`}>
                  <div className={`w-14 h-14 ${valuesData[2].iconBg} rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <div className={valuesData[2].iconColor}>
                      {valuesData[2].icon}
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${valuesData[2].textColor}`}>
                    {valuesData[2].title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {valuesData[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical stack */}
        <div className="md:hidden space-y-6">
          {valuesData.map((item, index) => (
            <div 
              key={index} 
              className={`group cursor-pointer transition-all duration-500 ${
                activeCard === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className={`${item.bgColor} rounded-2xl shadow-xl p-6 border-2 ${item.borderColor} transition-all duration-500 ${
                activeCard === index ? 'shadow-2xl' : 'group-hover:shadow-2xl'
              }`}>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                    <div className={item.iconColor}>
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-3 ${item.textColor}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      item.highlight ? 'text-blue-100' : 'text-gray-600'
                    } ${
                      activeCard === index ? 'block' : 'line-clamp-2'
                    }`}>
                      {item.description}
                    </p>
                    
                    {/* Expand indicator */}
                    <div className={`mt-2 text-xs font-medium ${
                      item.highlight ? 'text-blue-200' : 'text-[#1c4268]'
                    }`}>
                      {activeCard === index ? 'Tap to collapse' : 'Tap to read more'}
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements for highlight card */}
                {item.highlight && (
                  <>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom indicator dots */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-3">
            {valuesData.map((item, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  item.highlight 
                    ? 'bg-gradient-to-r from-[#245586] to-[#76a5d3] scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-[#1c4268] hover:scale-110'
                }`}
                onClick={() => handleCardClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SparkToMotion;