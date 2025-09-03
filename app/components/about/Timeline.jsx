"use client";
import React from 'react';
import { Rocket, TrendingUp, Handshake, Star } from "lucide-react";

const timelineData = [
  {
    year: "2022",
    title: "Rapid Growth and Expansion",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
  },
  {
    year: "2023",
    title: "Building Trust Across India",
    icon: <Handshake className="w-5 h-5 text-white" />,
  },
  {
    year: "2024",
    title: "Towards Nationwide Leadership",
    icon: <Star className="w-5 h-5 text-white" />,
  },
  {
    year: "2025",
    title: "Foundation in Ahmedabad",
    icon: <Rocket className="w-5 h-5 text-white" />,
  },
];

function Timeline() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#245586] rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#76a5d3] rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#245586] to-[#76a5d3] text-white px-6 py-2 rounded-full text-sm font-medium tracking-wider uppercase">
              Our Journey
            </span>
          </div>
          <h2 className="max-w-7xl mx-auto font-semibold text-[#05325f] text-[30px] md:text-[47.5px] leading-normal mb-6">
            Next-Gen Business Consultancy's Journey to Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#245586] to-[#76a5d3] mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Horizontal connecting line with enhanced styling */}
            <div className="absolute top-[140px] left-[10%] right-[10%] h-2 bg-gradient-to-r from-[#245586] via-[#5a7ba8] to-[#76a5d3] rounded-full shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[#245586] via-[#5a7ba8] to-[#76a5d3] rounded-full animate-pulse opacity-50"></div>
            </div>
            
            {/* Timeline items */}
            <div className="flex justify-between items-start relative z-10 px-[10%]">
              {timelineData.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-1/4 group">
                  {/* Year Badge */}
                  <div className="mb-8 px-8 py-4 rounded-xl shadow-lg border-2 transition-all duration-500 cursor-pointer backdrop-blur-sm relative overflow-hidden bg-white/80 border-gray-200 text-[#2c5282] hover:bg-gradient-to-br hover:from-[#245586] hover:to-[#1a3f5c] hover:text-white hover:border-[#245586] hover:shadow-xl hover:shadow-[#245586]/20 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="text-lg font-bold relative z-10">
                      {item.year}
                    </span>
                  </div>

                  {/* Icon Circle with connecting line */}
                  <div className="relative">
                    {/* Vertical connecting line with glow */}
                    <div className="absolute top-12 left-1/2 w-0.5 h-20 bg-gradient-to-b from-[#2c5282] to-[#76a5d3] transform -translate-x-1/2 shadow-sm">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#2c5282] to-[#76a5d3] blur-sm opacity-50"></div>
                    </div>
                    
                    {/* Icon circle with enhanced effects */}
                    <div className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 cursor-pointer backdrop-blur-sm border-4 bg-gradient-to-br from-[#245586] to-[#1a3f5c] border-[#76a5d3] hover:from-[#76a5d3] hover:to-[#5a7ba8] hover:border-[#245586] hover:shadow-[#76a5d3]/30 hover:scale-110 shadow-[#245586]/30">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="relative z-10">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title with enhanced typography */}
                  <div className="mt-10 text-center">
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-3 border-gray-100 hover:shadow-lg hover:bg-white/90 transition-all duration-300 cursor-pointer">
                      <p className="text-sm lg:text-base font-semibold text-[#2c5282] max-w-[160px] leading-tight hover:text-[#245586] transition-colors duration-300">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative">
              {/* Vertical connecting line with glow effect */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#245586] to-[#76a5d3] rounded-full shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-[#245586] to-[#76a5d3] rounded-full blur-sm opacity-50"></div>
              </div>
              
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start mb-16 last:mb-0 group">
                  {/* Icon Circle */}
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-xl z-10 transition-all duration-500 cursor-pointer backdrop-blur-sm border-4 bg-gradient-to-br from-[#245586] to-[#1a3f5c] border-[#76a5d3] hover:from-[#76a5d3] hover:to-[#5a7ba8] hover:border-[#245586] hover:shadow-[#76a5d3]/30 hover:scale-110 shadow-[#245586]/30">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="relative z-10">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    {/* Year Badge */}
                    <div className="inline-block mb-4 px-6 py-3 rounded-xl shadow-lg border-2 transition-all duration-500 cursor-pointer backdrop-blur-sm relative overflow-hidden bg-white/80 border-gray-200 text-[#2c5282] hover:bg-gradient-to-br hover:from-[#245586] hover:to-[#1a3f5c] hover:text-white hover:border-[#245586] hover:shadow-xl hover:shadow-[#245586]/20 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="text-base font-bold relative z-10">
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 cursor-pointer inline-block">
                      <p className="text-base font-semibold text-[#2c5282] leading-tight hover:text-[#245586] transition-colors duration-300">
                        {item.title}
                      </p>
                    </div>
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