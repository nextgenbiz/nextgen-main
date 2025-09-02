import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#15324f] to-[#1c4268] text-white">
      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-16 text-center max-w-7xl">
        <p
          className="text-[13px] text-white uppercase tracking-wider mb-4"
          style={{ letterSpacing: "1ch" }}
        >
          BUSINESS ISN'T COMPLICATED. LOG BANATE HAI.
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          We just un-complicate it.
        </h2>

        <p className="text-[19px] text-white mb-12 max-w-2xl mx-auto leading-relaxed">
          Aapke paas vision hai, hum handle karenge chaos. Let's get to work
          together.
        </p>

        <button className="bg-gradient-to-b from-[#245586] to-[#76a5d3] text-white font-medium px-8 py-3 rounded-md transition-colors duration-300">
          Contact Us
        </button>
      </div>

      {/* Navigation and Social Section */}
      <div className="border-t border-[#245589]">
        <div className="container mx-auto px-6 py-12 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Image
                  className="w-100 sm:w-56 h-auto object-contain"
                  alt="Hiring instagram"
                  src="https://c.animaapp.com/metmcazsfuMR7v/img/hiring-instagram-post--2--2.png"
                  width={248}
                  height={49}
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="mb-8 md:mb-0">
              <ul className="flex flex-wrap justify-center gap-8 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-white hover:text-white transition-colors"
                  >
                    Who we are
                  </a>
                </li>
                <li>
                  <a
                    href="/solution"
                    className="text-white hover:text-white transition-colors"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white hover:text-white transition-colors"
                  >
                    Connect
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://in.linkedin.com/company/nextgen-business-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1c4268] hover:bg-[#1c4268] rounded-full flex items-center justify-center transition-colors border-2 border-[#245589]"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/p/Next-Gen-Business-Consultancy-Private-Limited-61574060610065/"
                target="_blank"
                className="w-10 h-10 bg-[#1c4268] hover:bg-[#1c4268] rounded-full flex items-center justify-center transition-colors border-2 border-[#245589]"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/next_gen_business_consultancy/"
                target="_blank"
                className="w-10 h-10 bg-[#1c4268] hover:bg-[#1c4268] rounded-full flex items-center justify-center transition-colors border-2 border-[#245589]"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Next-Gen-business-consultancy"
                target="_blank"
                className="w-10 h-10 bg-[#1c4268] hover:bg-[#1c4268] rounded-full flex items-center justify-center transition-colors border-2 border-[#245589]"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#245589]">
        <div
          className="container mx-auto px-6 py-8"
          style={{ maxWidth: "1200px" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white">
            <div className="mb-4 md:mb-0">
              © 2025 By Next-Gen Business Consultancy PVT. LTD
            </div>

            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          {/* Legal Disclaimers */}
          <div className="mt-6 text-[10px] text-white leading-relaxed">
            <p className="mb-2">
              Important Notice: All payments for our services must be made
              exclusively to Next-Gen Business Consultancy Pvt. Ltd. through a
              Current Account on NEFT, IMPS, RTGS, or approved digital payment
              platforms (Cashfree, Razorpay, Paytm/Axis). We do not accept
              payments through personal accounts or third-party intermediaries.
            </p>
            <p>
              Disclaimer: Next-Gen Business Consultancy Pvt. Ltd. is a private
              consultancy firm specializing in start-up advisory services across
              India. We provide professional guidance tailored to the needs of
              emerging enterprises. Please note, we operate independently and
              are not affiliated with or endorsed by any government,
              non-government agency, institution, or department.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="bg-[#3278bd] border-t border-[#3278bd]">
        <div
          className="container mx-auto px-4 py-4 md:py-6"
          style={{ maxWidth: "1200px" }}
        >
          <div className="flex flex-row md:flex-row items-center justify-center gap-2 md:gap-8 text-sm text-white">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
              <span className="text-sm text-left">Founder-First Approach</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
              <span className=" text-left">Speed + Simplicity</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
              <span className=" text-left">Expert-Led Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
