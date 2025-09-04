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
    <div className="relative border-0 shadow-none  rounded-[15px] overflow-hidden h-40 md:h-48 w-full">
      <div
        className="relative flex flex-row flex-wrap  w-full h-full px-2"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex flex-col justify-center align-center items-center z-10  md:w-full md:h-full">
          <div className="font-['Bebas_Neue'] font-normal text-[#264c92] text-3xl md:text-4xl leading-normal absolute bottom-[50px] left-[10px]">
            {count}
            {suffix}
          </div>
          <div className="font-['Bebas_Neue'] font-normal text-[#264c92] text-3xl leading-normal mt-2 absolute bottom-[5px] left-[10px]">
            {title}
          </div>
        </div>
        <Image
          className={`absolute top-[15px] right-[20px] ${iconClass}`}
          width={75}
          height={75}
          alt={title}
          src={icon}
        />
      </div>
    </div>
  );
}

export default CounterBox;
