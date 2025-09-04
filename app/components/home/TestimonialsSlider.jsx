"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSlider = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

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
      { breakpoint: 1024, settings: { slidesToShow: 3, centerPadding: "15%" } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "0" } },
    ],
  };

const videos = ["CH8jBkQk-DI", "m9Quda1uOmo", "Ljt18uURvBc", "4pAlebkNPVg"];

  return (
   <div className="bg-white">
    <div className="text-center  mb-10">
          <h2 className="max-w-7xl mx-auto  font-semibold text-[#05325f] text-[30px] md:text-[47.5px] leading-normal">
            Real experiences, real voices
          </h2>
        </div>
     <div className="slider-container max-w-7xl mx-auto px-4 py-10 bg-white">
      <Slider {...settings}>
        {videos.map((id, i) => (
          <div
            key={i}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white h-[400px]"
            onClick={() => setSelectedVideo(id)}
          >
            {/* YouTube thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={`Video ${i + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-16 h-16 opacity-90"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ))}
      </Slider>

      {/* Popup modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-white flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-[90%] max-w-3xl bg-white rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Close button */}
            <button
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>

   </div>
  );
};

export default TestimonialsSlider;
