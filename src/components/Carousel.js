import React, { useState, useEffect } from "react";
import "./Carousel.css";
import leftArrowIcon from "./prev-arrow.png";
import rightArrowIcon from "./next-arrow.png";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-container">
      <button className="btnPrev" onClick={goToPrevSlide}>
        <img src={leftArrowIcon} alt="Prev" />
      </button>
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{ display: index === currentSlide ? "block" : "none" }}
          />
        ))}
      </div>
      <button className="btnNext" onClick={goToNextSlide}>
        <img src={rightArrowIcon} alt="Nxt" />
      </button>
    </div>
  );
};

export default Carousel;
