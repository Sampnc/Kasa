
import React, { useState } from "react";

export default function Slideshow({ slides }) {
    const [current, setCurrent] = useState(0);
    // const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === slides?.length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? slides?.length - 1 : current - 1);
    };
  
    return (
      <div className="slider">
        {slides?.map((picture, index) => {
          return (
            <div
              key={index}
              className={index === current
                  ? "slide slider__active-picture"
                  : "slide slider__inactive-picture"
              }
            >
              {index === current && (
                <img src={picture} alt="" className="slider__picture" />
              )}
            </div>
          );
        })}
        
        {slides?.length > 1 ? (
          <>
          <div className="slideshowContainer"></div>
            <button className="slider__previous" onClick={prevSlide}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <img src={"picture"} alt="" />
            <span className="counter">{current + 1}/{slides?.length}</span>
            <button className="slider__next" onClick={nextSlide}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
          </>
        ) : null}
      </div>
    );
  };
