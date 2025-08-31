"use client";
import { useState } from "react";

function Support() {
  const [activeCard, setActiveCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const businessTypes = [
    { 
      title: "Private Limited", 
      description: "Ideal for startups and growing businesses with limited liability protection.",
      category: "registration"
    },
    { 
      title: "Limited Liability Partnership", 
      description: "Combines benefits of partnership and corporation with limited liability.",
      category: "registration"
    },
    { 
      title: "Partnership Firm (ROF)", 
      description: "Traditional business structure for two or more persons with shared profits.",
      category: "registration"
    },
    { 
      title: "Udyam Registration", 
      description: "Government registration for MSMEs to access benefits and subsidies.",
      category: "registration"
    },
    { 
      title: "One Person Company", 
      description: "Single promoter company with limited liability protection.",
      category: "registration"
    },
    { 
      title: "Sole Proprietorship", 
      description: "Simplest business structure owned and operated by one individual.",
      category: "registration"
    },
    { 
      title: "GST Compliance", 
      description: "Ensure your business stays compliant with GST regulations and filings.",
      category: "compliance"
    },
    { 
      title: "Tax Filing", 
      description: "Professional tax filing services for businesses of all sizes.",
      category: "compliance"
    },
    { 
      title: "Annual Compliance", 
      description: "Meet all annual compliance requirements for your business entity.",
      category: "compliance"
    },
    { 
      title: "Seed Funding", 
      description: "Assistance in securing seed funding for early-stage startups.",
      category: "funding"
    },
    { 
      title: "VC Funding", 
      description: "Connect with venture capitalists and secure growth funding.",
      category: "funding"
    },
    { 
      title: "Business Loans", 
      description: "Access to business loans from various financial institutions.",
      category: "funding"
    },
    { 
      title: "Website Development", 
      description: "Professional website development for your business.",
      category: "digital"
    },
    { 
      title: "Digital Marketing", 
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      category: "digital"
    },
    { 
      title: "E-commerce Setup", 
      description: "Complete e-commerce store setup and integration.",
      category: "digital"
    }
  ];

  // Filter business types based on active filter
  const filteredBusinessTypes = activeFilter === "all" 
    ? businessTypes 
    : businessTypes.filter(business => business.category === activeFilter);

  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff] py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1c4268] mb-6">
              Business Support Services
            </h2>
            
            {/* Filter Pills - Responsive */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-lg shadow-lg border border-gray-200 w-full max-w-4xl">
            
  
              <button 
                className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border flex-shrink-0 transition-all ${
                  activeFilter === "registration" 
                    ? "bg-gradient-to-b from-[#245586] to-[#76a5d3] text-white border-gray-300" 
                    : "bg-white text-[#245586] border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handleFilterClick("registration")}
              >
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activeFilter === "registration" ? "bg-white/20" : "bg-[#245586]"
                }`}>
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 384 512">
                    <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"/>
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">Business Registration</span>
              </button>
  
              <button 
                className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border flex-shrink-0 transition-all ${
                  activeFilter === "compliance" 
                    ? "bg-gradient-to-b from-[#245586] to-[#76a5d3] text-white border-gray-300" 
                    : "bg-white text-[#245586] border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handleFilterClick("compliance")}
              >
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activeFilter === "compliance" ? "bg-white/20" : "bg-[#245586]"
                }`}>
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"/>
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">Compliance Support</span>
              </button>

              <button 
                className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border flex-shrink-0 transition-all ${
                  activeFilter === "funding" 
                    ? "bg-gradient-to-b from-[#245586] to-[#76a5d3] text-white border-gray-300" 
                    : "bg-white text-[#245586] border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handleFilterClick("funding")}
              >
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activeFilter === "funding" ? "bg-white/20" : "bg-[#245586]"
                }`}>
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zM144 288h-32v-48c0-8.84 7.16-16 16-16s16 7.16 16 16v48zm96 0h-32v-48c0-8.84 7.16-16 16-16s16 7.16 16 16v48zm96 0h-32v-48c0-8.84 7.16-16 16-16s16 7.16 16 16v48zm96 0h-32v-48c0-8.84 7.16-16 16-16s16 7.16 16 16v48zM496 96H16C7.16 96 0 103.2 0 112s7.16 16 16 16h480c8.84 0 16-7.16 16-16s-7.16-16-16-16z"/>
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">Funding Support</span>
              </button>

              <button 
                className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg border flex-shrink-0 transition-all ${
                  activeFilter === "digital" 
                    ? "bg-gradient-to-b from-[#245586] to-[#76a5d3] text-white border-gray-300" 
                    : "bg-white text-[#245586] border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handleFilterClick("digital")}
              >
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activeFilter === "digital" ? "bg-white/20" : "bg-[#245586]"
                }`}>
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V120c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24v309.6zM192 160h128v32H192v-32zm0 64h128v32H192v-32zm0 64h128v32H192v-32z"/>
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">Digital Transformation</span>
              </button>
            </div>
          </div>

          {/* Business Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredBusinessTypes.map((business, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg p-5 md:p-6 shadow-md border border-gray-200 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                  activeCard === index ? 'ring-2 ring-[#4a90e2] transform scale-[1.02]' : ''
                }`}
                onClick={() => handleCardClick(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#1c4268] mb-3 md:mb-4 text-center">
                  {business.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-center">
                  {business.description}
                </p>
              </div>
            ))}
          </div>

          {/* Empty state message */}
          {filteredBusinessTypes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Support;