import { useState, useEffect } from "react";

export default function Slideshow ({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
 
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
        setCurrent(0);
      }, []);

    return (
        <div className="slideshowContainer">
            <div className="slideCurrent">
                <button className="leftChevron" onClick={prevSlide}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <img src={"picture"} alt="" />
                <button className="rightChevron" onClick={nextSlide}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};