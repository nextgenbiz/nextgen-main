'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

import process1 from '../../assets/process1.png';
import process2 from '../../assets/process2.png';
import process3 from '../../assets/process3.png';
import process4 from '../../assets/process4.png';
import process5 from '../../assets/process5.png';

const Process = () => {
  const impacts = [
    {
      image: process1,
      title: 'The Spark',
      description:
        "It all begins with ek chhoti si soch (a small thought) that can change the world.",
    },
    {
      image: process2,
      title: 'The Stone',
      description:
        "Your raw idea takes shape – we carve, polish, and build the solid foundation it deserves.",
    },
    {
      image: process3,
      title: 'The Forge',
      description:
        "Through compliance, structure, and early strategy, your vision gets the strength of steel.",
    },
    {
      image: process4,
      title: 'The Lift',
      description:
        "With funding, pitch decks, and resources, we fuel your ambition to rise beyond barriers.",
    },
    {
      image: process5,
      title: 'The Shine',
      description:
        "Your brand glows like a diamond – trusted, impactful, and ready to dominate the market.",
    },
  ];

  useEffect(() => {
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
    <section className="w-full relative py-20 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-semibold text-[#05325f] text-[30px] md:text-[47.5px] leading-tight">
            Next-Gen Business Consultancy Growth
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="animate-fade-in-up opacity-0 flex flex-col items-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center">
                <Image
                  src={impact.image}
                  alt={impact.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#05325f] mb-3">
                {impact.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
