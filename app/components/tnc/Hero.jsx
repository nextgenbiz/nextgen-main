import Image from "next/image";
import contact1 from "../../assets/contact1.png";
import Hero_Banner from "../../assets/Hero _Banner.webp";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[450px] overflow-hidden flex items-center justify-center pt-24 sm:pt-28">
      <Image
        src={Hero_Banner}
        alt="Hero Banner"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-20 py-10 lg:py-0 gap-8 lg:gap-12 xl:gap-16 w-full max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex flex-col gap-4 flex-1  lg:text-left z-10 w-full lg:w-1/2">
          {/* Heading */}
          <h1 className="text-white text-center md:text-center  text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold leading-snug">
           Terms of Service
          </h1>

          {/* Description */}
          {/* <p className="text-white text-center md:text-center   md:text-[18.55px] leading-relaxed tracking-wide text-center md:text-left whitespace-normal">
            How we protect and use your information.
          </p> */}

          <div className="flex items-center text-center md:text-center justify-center  ">
             <svg
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M24.2768 1.26126C24.2768 0.564691 24.8437 0 25.543 0C26.2423 0 26.8092 0.564691 26.8092 1.26126V3.91706C29.2392 4.11088 30.8345 4.58656 32.0065 5.75398C33.1785 6.9214 33.656 8.51042 33.8506 10.9309H0.35265C0.547138 8.51042 1.02475 6.9214 2.19676 5.75398C3.36876 4.58656 4.96402 4.11088 7.39396 3.91706V1.26126C7.39396 0.564691 7.96089 0 8.66018 0C9.35946 0 9.92639 0.564691 9.92639 1.26126V3.80547C11.0496 3.78378 12.3086 3.78378 13.725 3.78378H20.4781C21.8947 3.78378 23.1536 3.78378 24.2768 3.80547V1.26126Z"
                    fill="white"
                    />
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.8147e-05 17.2203V20.6169C3.8147e-05 27.0214 3.8147e-05 30.2239 1.983 32.2134C3.9658 34.2032 7.1574 34.2032 13.5403 34.2032H20.3104C26.6933 34.2032 29.8847 34.2032 31.8677 32.2134C33.8506 30.2239 33.8506 27.0214 33.8506 20.6169V17.2203C33.8506 15.7954 33.8506 14.529 33.8288 13.3992H0.0218697C3.8147e-05 14.529 3.8147e-05 15.7954 3.8147e-05 17.2203ZM10.1552 19.3432C9.45416 19.3432 8.88581 19.9134 8.88581 20.6169V22.7397H6.77015C6.0691 22.7397 5.50075 23.31 5.50075 24.0134C5.50075 24.7169 6.0691 25.2872 6.77015 25.2872H8.88581V27.41C8.88581 28.1134 9.45416 28.6837 10.1552 28.6837C10.8562 28.6837 11.4246 28.1134 11.4246 27.41V25.2872H13.5403C14.2413 25.2872 14.8097 24.7169 14.8097 24.0134C14.8097 23.31 14.2413 22.7397 13.5403 22.7397H11.4246V20.6169C11.4246 19.9134 10.8562 19.3432 10.1552 19.3432Z"
                    fill="white"
                    />
                </svg>
                <span className="text-white ml-2 align-middle">Last updated: 2025</span>
          </div>
          
        </div>

        
      </div>
    </section>
  );
}
