'use client';

import React, { useEffect } from 'react';
import Impact1 from "../../assets/Impact1.png";
import Impact2 from "../../assets/Impact2.png";
import Impact3 from "../../assets/Impact3.png";
import Impact4 from "../../assets/Impact4.png";

const Impact = () => {
  const impacts = [
    {
      image: Impact1, 
      title: "Impact That Lasts",
      description: "We don't just build profits; we build brands that inspire trust, loyalty, and lasting market influence."
    },
    {
      image: Impact2, 
      title: "Partnership for Life",
      description: "Every client is a co-traveler. Hum saath hai aapke har mod pe, not just projects but long-term journeys."
    },
    {
      image: Impact3, 
      title: "Growth Without Limits",
      description: "Your vision doesn't stop; neither do we. From scaling up to breaking barriers, we keep fueling your momentum."
    },
    {
      image: Impact4, 
      title: "Innovation at Core",
      description: "We challenge norms, rethink models, and deliver fresh ideas so your business stays relevant in an evolving world."
    }
  ];

  useEffect(() => {
    // Add animation keyframes to document
    const style = document.createElement('style');
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
    <section className="w-full relative py-16 bg-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-[#1c4268] mb-16">
            Beyond Business, Toward Legacy
          </h2>
        </div>
        
        {/* Grid Layout - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="opacity-0 translate-y-5 animate-fade-in-up bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff] backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-xl">
                  <img 
                    src={impact.image.src} 
                    alt={impact.title}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#2c5282] mb-3">
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
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