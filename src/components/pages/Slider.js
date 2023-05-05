import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const slideRef = useRef(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      goToNextSlide();
    }

    if (touchStart - touchEnd < -150) {
      goToPrevSlide();
    }
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    slideRef.current.classList.add("slide-left");
    setTimeout(() => {
      slideRef.current.classList.remove("slide-left");
    }, 500);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    slideRef.current.classList.add("slide-right");
    setTimeout(() => {
      slideRef.current.classList.remove("slide-right");
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3500);
    return () => clearInterval(interval);
  });

  return (
    <div
      className="slider"
      ref={slideRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img src={slides[currentSlide].src} alt={`Slide ${currentSlide + 1}`} />
      <button
        className="slider-control slider-control-left"
        onClick={goToPrevSlide}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <button
        className="slider-control slider-control-right"
        onClick={goToNextSlide}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
};

export default Slider;
