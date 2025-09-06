"use client";
import React from "react";
import { Rocket, TrendingUp, Handshake, Star } from "lucide-react";

import Image from "next/image";
import timelineBg from "../../assets/timelinevertical.png";
const timelineData = [
  {
    year: "2022",
    title: "Rapid Growth and Expansion",
    icon: <TrendingUp className="w-25 h-25 text-[#2E5AA8]" />,
  },
  {
    year: "2023",
    title: "Building Trust Across India",
    icon: <Handshake className="w-25 h-25 text-[#2E5AA8]" />,
  },
  {
    year: "2024",
    title: "Towards Nationwide Leadership",
    icon: <Star className="w-25 h-25 text-[#2E5AA8]" />,
  },
  {
    year: "2025",
    title: "Foundation in Ahmedabad",
    icon: <Rocket className="w-25 h-25 text-[#2E5AA8]" />,
  },
];

function Timeline() {
  return (
    <section className="w-full bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff] py-[30px] md:py-[60px] px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-b from-[#2E6FB6] to-[#7BAEE0] rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#76a5d3] rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="max-w-7xl mx-auto font-semibold text-[#05325f] text-[16.45px] md:text-[35.75px] leading-normal mb-6">
            Next-Gen Business Consultancy's Journey to Leadership
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Horizontal connecting line with enhanced styling */}
            <div className="absolute top-[180px] left-[10%] right-[10%] h-[40px] bg-gradient-to-b from-[#2E6FB6] to-[#7BAEE0] rounded-full shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-[#2E6FB6] to-[#7BAEE0] rounded-full animate-pulse opacity-50"></div>
            </div>

            {/* Timeline items */}
            <div className="flex justify-between items-start relative z-10 px-[10%]">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-1/4 group h-[400px]"
                >
                  {/* Year Badge */}
                  <div className="mb-16 px-8 py-4 rounded-xl shadow-lg border-2 transition-all duration-500  backdrop-blur-sm relative overflow-hidden bg-gradient from-[#F7F9FF] to-[#EAF2FF] border-gray-200 text-[#2c5282] ">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F7F9FF] to-[#EAF2FF] opacity-1  transition-opacity duration-500"></div>
                    <span className="text-lg font-bold relative z-10">
                      {item.year}
                    </span>
                  </div>

                  {/* Icon Circle with connecting line */}
                  <div className="relative ">
                    {/* Vertical connecting line with glow */}
                    <div className="absolute top-[-30px] left-1/2 w-4 h-[200px] bg-gradient-to-b from-[#2E6FB6] to-[#7BAEE0] rounded-lg transform -translate-x-1/2 shadow-sm">
                      <div className="relative  bg-gradient-to-b from-[#2E6FB6] to-[#7BAEE0] blur-sm opacity-50"></div>
                    </div>

                    {/* Icon circle with enhanced effects */}
                    <div className="relative mt-[20px] w-24 h-24 rounded-full flex items-center justify-center shadow-sm transition-all duration-500 cursor-pointer backdrop-blur-sm  border-8 border-transparent bg-gradient-to-b from-[#2E6FB6] to-[#7BAEE0]  ">
                      <div className="absolute inset-0 rounded-full bg-[#E8F4FF] "></div>
                      <div className="relative z-10">{item.icon}</div>
                    </div>
                  </div>

                  {/* Title with enhanced typography */}
                  <div className="mt-20 text-center">
                    <div className=" backdrop-blur-sm rounded-lg px-2 py-3 border-gray-100 hover:shadow-lg hover:bg-white/90 transition-all duration-300 cursor-pointer">
                      <p className="text-sm md:text-[18.22px] font-semibold text-[#2c5282]  leading-tight hover:text-[#245586] transition-colors duration-300">
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
              <Image
                src={timelineBg}
                alt="Timeline Background"
                className="w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
