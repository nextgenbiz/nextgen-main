"use client";
import { useState } from "react";

function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("⚠️ Please enter your email before booking.");
    } else {
      alert(`✅ Thank you! We'll contact you at ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-b from-[#245586] to-[#76a5d3] rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white leading-tight font-semibold">
              Ready for Transformation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/80">
              Book your consultancy today and take the first step.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-auto lg:flex-shrink-0"
          >
            <div className="bg-white rounded-2xl p-2 shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-md mx-auto lg:mx-0 gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-gradient-to-b from-[#245586] to-[#76a5d3] text-white px-4 sm:px-6 py-3 rounded-xl font-medium text-sm transition-colors duration-200 whitespace-nowrap hover:from-[#1d456d] hover:to-[#5a8dbd]"
              >
                <span className="sm:hidden">Book</span>
                <span className="hidden sm:inline">Book a Consultancy</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;
