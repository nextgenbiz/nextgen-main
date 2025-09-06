"use client";

import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Who is eligible for government grants?",
      answer:
        "Eligibility varies. Typically, small businesses, startups, homeowners, non-profits, and research entities can apply.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "The application process typically takes 4-6 weeks, depending on the complexity of your request and the current volume of applications.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "Generally, you'll need identification documents, proof of address, business plans, financial statements, and any industry-specific licenses or permits.",
    },
    {
      question: "Can I apply for multiple grants at once?",
      answer:
        "Yes, you can apply for multiple grants as long as you meet the eligibility criteria for each program. However, you may need to disclose other applications during the process.",
    },
    {
      question: "What are the common reasons for grant rejection?",
      answer:
        "Common reasons include incomplete applications, not meeting eligibility criteria, insufficient documentation, or proposals that don't align with grant objectives.",
    },
    {
      question: "Is there a fee to apply for government grants?",
      answer:
        "Legitimate government grants never require upfront fees. Be cautious of any program asking for payment to apply or guarantee approval.",
    },
  ];

  return (
    <section className="w-full py-[30px] md:py-[60px] px-4 bg-[#f8fafc]">
      <div className="max-w-[1000px] mx-auto">
        {" "}
        {/* Changed to max-w-7xl for wider container */}
        <div className="text-center mb-16">
          <h2 className="font-['Be_Vietnam_Pro'] font-semibold text-[#05325f] text-3xl md:text-[46.6px]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-[#C9E5FF] rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl w-full" // Added w-full
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-[#EAF2FF] hover:bg-[#EAF2FF] transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-[#1e293b] text-lg md:text-xl font-sans max-w-[80%]">
                  {item.question}
                </span>
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#e2e8f0] transition-all duration-300 ${
                      activeIndex === index ? "bg-[#76a5d3]" : "bg-[#245586]"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 text-white transform transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
              {activeIndex === index && (
                <div className="p-6 bg-white border-t border-[#e2e8f0] animate-in slide-in-from-top-2 duration-300 bg-white">
                  <p className="text-[#64748b] leading-relaxed font-sans text-base md:text-lg">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
