import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="slider">
      <img src={slides[currentSlide].src} alt={`Slide ${currentSlide + 1}`} />
      <div className="slider-controls">
        <button
          className="slider-control slider-control-left"
          onClick={goToPrevSlide}
        >
          <img
            src="https://img.icons8.com/ios-filled/1x/double-left.png"
            alt="Previous slide"
          />
        </button>
        <button
          className="slider-control slider-control-right"
          onClick={goToNextSlide}
        >
          <img
            src="https://img.icons8.com/ios-filled/1x/double-right.png"
            alt="Next slide"
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;

// import React, { useState } from "react";
// import "./Slider.css";

// const Slider = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <div className="slider">
//       <img src={slides[currentSlide].src} alt={`Slide ${currentSlide + 1}`} />
//       <div className="slider-controls">
//         <button onClick={goToPrevSlide}>Prev</button>
//         <button onClick={goToNextSlide}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Slider;
