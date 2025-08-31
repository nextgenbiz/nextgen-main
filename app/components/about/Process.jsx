'use client';

import React from 'react';
import { Zap, Square, Hammer, TrendingUp, Star } from 'lucide-react';
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";
import process4 from "../../assets/process4.png";
import process5 from "../../assets/process5.png";

const Process = () => {
  const steps = [
    {
      image: process1,
      title: "The Spark",
      description: "It all begins with ek chhoti si soch (a small thought) that can change the world."
    },
    {
      image: process2,
      title: "The Stone",
      description: "Your raw idea takes shape — we carve, polish, and build the solid foundation it deserves."
    },
    {
      image: process3,
      title: "The Forge",
      description: "Through compliance, structure, and early strategy, your vision gets the strength of steel."
    },
    {
      image: process4,
      title: "The Lift",
      description: "With funding, pitch decks, and resources, we fuel your ambition to rise beyond barriers."
    },
    {
      image: process5,
      title: "The Shine",
      description: "Your brand glows like a diamond - trusted, impactful, and ready to dominate the market."
    }
  ];

  return (
    <section className="w-full relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-[#1c4268] mb-4">
              Next-Gen Business Consultancy Growth
            </h2>
        </div>
      </div>
    </section>
  );
};

export default Process;