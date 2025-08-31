"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import slide1 from "../../assets/slide1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    dots: true,
    centerPadding: "25%",
    responsive: [
      {
        breakpoint: 1024,
        slidesToShow: 3,
        settings: { centerPadding: "15%" },
      },
      {
        breakpoint: 640,
        slidesToShow: 1,
        settings: { centerPadding: "0" },
      },
    ],
  };

  return (
    <div className="slider-container max-w-6xl mx-auto px-4 py-10">
      <Slider {...settings}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="px-2">
            <Image
              src={slide1}
              alt={`Slide ${i + 1}`}
              className="rounded-xl shadow-lg"
              width={500}
              height={350}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
