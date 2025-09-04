"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

function CounterBox({
  number,
  suffix = "+",
  title,
  bg,
  icon,
  iconWidth,
  iconHeight,
  iconClass,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(end / (duration / 16)); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="relative border-0 shadow-none rounded-[15px] overflow-hidden h-36 sm:h-40 md:h-48 w-full">
      <div
        className="relative flex flex-col justify-between w-full h-full px-4 py-4"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Counter Number */}
        <div className="flex flex-col items-start">
          {/* Number */}
          <div className="font-['Bebas_Neue'] font-normal text-[#264c92] text-3xl absolute bottom-12 sm:text-4xl md:text-5xl leading-normal">
            {count}
            {suffix}
          </div>

          {/* Title */}
          <div className="font-['Bebas_Neue'] font-normal text-[#264c92] text-2lg absolute bottom-3 sm:text-2xl md:text-3xl leading-normal">
            {title}
          </div>
        </div>
        {/* Icon */}
        <Image
          className={`absolute top-3 right-3 ${iconClass}`}
          width={iconWidth || 60}
          height={iconHeight || 60}
          alt={title}
          src={icon}
        />
      </div>
    </div>
  );
}

export default CounterBox;
