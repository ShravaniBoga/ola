import React, { useState } from "react";
import carousel1 from "../../assets/carosel1.webp";
import carousel2 from "../../assets/carosel2.webp";
import carousel3 from "../../assets/carosel3.webp";
import olaShakti from "../../assets/ola_shakti.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import dark_logo from "../../assets/dark_black_logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../../components/ui/Button";
import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: carousel1,
      title: "Introducing",
      titleImage: olaShakti,
      description: "Next Chapter in India's Energy Revolution",
      buttons: [
        {
          text: "Explore More",
          bgColor: "black",
          textColor: "white",
          hasArrow: true,
        },
      ],
    },
    {
      image: carousel2,
      title: "OLA CELEBRATES INDIA",
      description: "Next Chapter in India's Energy Revolution",
      buttons: [
        {
          text: "Book Test Ride",
          bgColor: "black",
          textColor: "white",
          hasArrow: true,
        },
        {
          text: "Explore More",
          bgColor: "white",
          textColor: "black",
          hasArrow: true,
        },
      ],
    },
    {
      image: carousel3,
      title: "Power of the 4680 Bharat Cell",
      description: "Next Chapter in India's Energy Revolution",
      buttons: [
        {
          text: "Explore S1 Pro",
          bgColor: "black",
          textColor: "white",
          hasArrow: true,
        },
      ],
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      {/* Navbar */}
      <div className="carousel-navbar">
        <img src={dark_logo} alt="OLA Electric Logo" />
        <GiHamburgerMenu
          className="hamburger-icon"
          onClick={() => console.log("Menu clicked!")}
        />
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <div
              className="carousel-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Text and Buttons Overlay */}
              <div className="carousel-content">
                {/* Title Section */}
                {slide.titleImage ? (
                  <div className="title-with-image">
                    <h6 className="carousel-subtitle">{slide.title}</h6>
                    <img
                      src={slide.titleImage}
                      alt="OLA Shakti"
                      className="carousel-title-image"
                    />
                  </div>
                ) : (
                  <h1 className="carousel-title">{slide.title}</h1>
                )}

                {/* Description */}
                <p className="carousel-description">{slide.description}</p>

                {/* Buttons */}
                <div className="carousel-buttons">
                  {slide.buttons.map((button, btnIndex) => (
                    <Button
                      key={btnIndex}
                      text={button.text}
                      bgColor={button.bgColor}
                      textColor={button.textColor}
                      hasArrow={button.hasArrow}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator ${
              index === activeIndex ? "active" : ""
            }`}
          />
        ))}
      </div>

      {/* Custom Arrow Controls */}
      <button
        onClick={prevSlide}
        className="carousel-arrow carousel-arrow-prev"
      >
        <MdKeyboardArrowLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="carousel-arrow carousel-arrow-next"
      >
        <MdKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
