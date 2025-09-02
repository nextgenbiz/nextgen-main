// components/Timeline.tsx
"use client";
import { Rocket, TrendingUp, Handshake, Star } from "lucide-react";

const timelineData = [
  {
    year: "2022",
    title: "Foundation in Ahmedabad",
    icon: <Rocket className="w-5 h-5 text-white" />,
  },
  {
    year: "2023",
    title: "Rapid Growth and Expansion",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    
  },
  {
    year: "2024",
    title: "Building Trust Across India", 
    icon: <Handshake className="w-5 h-5 text-white" />,
  },
  {
    year: "2025",
    title: "Towards Nationwide Leadership",
    icon: <Star className="w-5 h-5 text-white" />,
  },
];

function Timeline() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center  mb-10">
            <h2 className="max-w-7xl mx-auto  font-semibold text-[#05325f] text-[30px] md:text-[47.5px] leading-normal">
            Next-Gen Business Consultancy's Journey to Leadership
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Horizontal connecting line */}
            <div className="absolute top-[120px] left-[10%] right-[10%] h-3 bg-gradient-to-b from-[#245586] to-[#76a5d3] rounded-full"></div>
            
            {/* Timeline items */}
            <div className="flex justify-between items-start relative z-10 px-[10%]">
              {timelineData.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-1/4">
                  {/* Year Badge */}
                  <div className={`mb-6 px-6 py-3 rounded-lg shadow-md border-2 ${
                    item.highlight 
                      ? 'bg-[#245586] border-[#border] text-white' 
                        : 'bg-gray-100 border-gray-300 text-[#2c5282]'
                  }`}>
                    <span className="text-lg font-bold">
                      {item.year}
                    </span>
                  </div>

                  {/* Icon Circle with connecting line */}
                  <div className="relative">
                    {/* Vertical connecting line */}
                    <div className="absolute top-10 left-1/2 w-1 h-16 bg-[#2c5282] transform -translate-x-1/2"></div>
                    
                    {/* Icon circle */}
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ${
                      item.highlight 
                        ? 'bg-[#245586] border-4 border-[#76a5d3]' 
                      : 'bg-[#245586] border-4 border-[#76a5d3]'
                    }`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mt-8 text-center">
                    <p className="text-sm lg:text-base font-semibold text-[#2c5282] max-w-[160px] leading-tight">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#245586] to-[#76a5d3]"></div>
              
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10 ${
                    item.highlight 
                      ? 'bg-[#245586] border-4 border-[#76a5d3]' 
                      : 'bg-[#245586] border-4 border-[#76a5d3]'
                     
                  }`}>
                    <div className="w-5 h-5 text-white">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    {/* Year Badge */}
                    <div className={`inline-block mb-3 px-4 py-2 rounded-lg shadow-md border-2 ${
                      item.highlight 
                        ? 'bg-[#245586] border-[#border] text-white' 
                        : 'bg-gray-100 border-gray-300 text-[#2c5282]'
                    }`}>
                      <span className="text-base font-bold">
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <p className="text-base font-semibold text-[#2c5282] leading-tight">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;