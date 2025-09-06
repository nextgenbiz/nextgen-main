"use client";

import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const YouTubePlayButton = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="24" fill="#FF0000" />
    <path d="M34 24.5L19 32.5V16.5L34 24.5Z" fill="white" />
  </svg>
);

export default function Test() {
  const [currentSlide, setCurrentSlide] = useState(4);
  const [slides, setSlides] = useState([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [stopSlide, setStopSlide] = useState(false);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);
  const iframeLoadedRef = useRef({});

  useEffect(() => {
    const videoData = [
      {
        id: 1,
        src: "https://www.youtube.com/embed/CH8jBkQk-DI",
        title: "Digital Marketing 1",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      {
        id: 2,
        src: "https://www.youtube.com/embed/m9Quda1uOmo",
        title: "Digital Marketing 2",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      // JIGNA PATLE
      {
        id: 3,
        title: "Digital Marketing 3",

        src: "https://www.youtube.com/embed/Ljt18uURvBc",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      // black cap
      {
        id: 4,
        src: "https://www.youtube.com/embed/UUAhosD26PM",
        title: "Digital Marketing 4",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      {
        id: 1,
        src: "https://www.youtube.com/embed/CH8jBkQk-DI",
        title: "Digital Marketing 1",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      {
        id: 2,
        src: "https://www.youtube.com/embed/m9Quda1uOmo",
        title: "Digital Marketing 2",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      // JIGNA PATLE
      {
        id: 3,
        title: "Digital Marketing 3",

        src: "https://www.youtube.com/embed/Ljt18uURvBc",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      // black cap
      {
        id: 4,
        src: "https://www.youtube.com/embed/UUAhosD26PM",
        title: "Digital Marketing 4",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      {
        id: 1,
        src: "https://www.youtube.com/embed/CH8jBkQk-DI",
        title: "Digital Marketing 1",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      {
        id: 2,
        src: "https://www.youtube.com/embed/m9Quda1uOmo",
        title: "Digital Marketing 2",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      // JIGNA PATLE
      {
        id: 3,
        title: "Digital Marketing 3",

        src: "https://www.youtube.com/embed/Ljt18uURvBc",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
      // black cap
      {
        id: 4,
        src: "https://www.youtube.com/embed/UUAhosD26PM",
        title: "Digital Marketing 4",
        thumbnail: "https://img.youtube.com/vi/CH8jBkQk-DI/maxresdefault.jpg",
      },
    ];
    setSlides(videoData);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000); // Advance every 3000ms

    // Clean up the interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeVideoIndex) {
        video.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  }, [currentSlide, activeVideoIndex]);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
    resetInterval();
    setActiveVideoIndex(null); // Reset active video
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
    resetInterval();
    setActiveVideoIndex(null); // Reset active video
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);
  };

  const getSlideStyle = (index) => {
    const totalSlides = slides.length;
    const adjustedCurrentSlide =
      ((currentSlide % totalSlides) + totalSlides) % totalSlides;
    let offset = index - adjustedCurrentSlide;

    if (offset > totalSlides / 2) offset -= totalSlides;
    if (offset < -totalSlides / 2) offset += totalSlides;

    const scale = 1 - Math.abs(offset) * 0.1;
    const translateX = offset * 100 + "%";
    const zIndex = 10 - Math.abs(offset);
    const opacity = 1 - Math.abs(offset) * 0.2;
    const blur = Math.abs(offset) > 2 ? "blur(4px)" : "none";

    return {
      transform: `translateX(${translateX}) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity,
      filter: blur,
      transition: "transform 0.5s ease-in-out",
      cursor: "pointer",
    };
  };

  const handleVideoClick = (index) => {
    setStopSlide(true);
    clearInterval(intervalRef.current);
    setActiveVideoIndex(index);

    const video = videoRefs.current[index];
    if (video) {
      if (!iframeLoadedRef.current[index]) {
        video.src = `${slides[index].src}?enablejsapi=1`;
      } else {
        video.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }

      window.addEventListener("message", handleVideoStateChange);
    }
  };

  const handleVideoStateChange = (event) => {
    const data = JSON.parse(event.data);
    if (data.event === "infoDelivery" && data.info && data.info.playerState) {
      if (data.info.playerState === 2 || data.info.playerState === 0) {
        resetInterval();
        setStopSlide(false);
        window.removeEventListener("message", handleVideoStateChange);
      }
    }
  };

  const handleIframeLoad = (index) => {
    iframeLoadedRef.current[index] = true;
    const video = videoRefs.current[index];
    if (video && index === activeVideoIndex) {
      video.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  };

  return (
    <div className="relative w-full overflow-hidden  bg-white pb-[30px] md:pb-[30px]">
      <div className="flex justify-center items-center h-[400px] mb-5">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-52 h-96 bg-white rounded-lg shadow-lg border-2 ${
              index === currentSlide % slides.length
                ? "border-blue-500"
                : "border-transparent pointer-events-none"
            }`}
            style={getSlideStyle(index)}
          >
            <Image
              src={slide.thumbnail}
              alt={slide.title}
              width={208}
              height={384}
              className="rounded-lg object-cover h-full"
              style={{
                zIndex: 1,
              }}
            />

            {index === currentSlide % slides.length && (
              <iframe
                ref={(el) => (videoRefs.current[index] = el)}
                width="100%"
                height="100%"
                src={
                  activeVideoIndex === index ? `${slide.src}?enablejsapi=1` : ""
                }
                title={slide.title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
                onLoad={() => handleIframeLoad(index)}
              ></iframe>
            )}

            {activeVideoIndex !== index && (
              <div
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                onClick={() => handleVideoClick(index)}
              >
                <Image
                  src={
                    "https://www.egniol.co.in/_next/static/media/youtube-shorts-icon.d64f4fd5.svg"
                  }
                  style={{ height: 80, width: 80 }}
                  width={80}
                  height={80}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-4 md:pt-8 text-center gap-6">
        <button
          onClick={prevSlide}
          className="flex justify-center items-center "
        >
          <Image
            width={30}
            height={30}
            src={
              "https://www.egniol.co.in/_next/static/media/rightArrow.60ad53c6.svg"
            }
            alt="Left Arrow"
            className="w-15 h-15 rotate-180"
          />
        </button>
        <Link
          href={"/success-stories"}
          className="text-[#1463b8] text-sm sm:text-base md:text-lg font-semibold border-[#1463b8] flex items-center hover:opacity-80 transition"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          View all
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg> */}
          {/* <FaArrowRight className="" /> */}
        </Link>
        <button
          onClick={nextSlide}
          className="flex justify-center items-center"
        >
          <Image
            width={30}
            height={30}
            src={
              "https://www.egniol.co.in/_next/static/media/leftArrow.283cddef.svg"
            }
            alt="Right Arrow"
            className="w-15 h-15 rotate-180"
          />
        </button>
      </div>
    </div>
  );
}
