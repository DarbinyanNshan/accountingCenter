import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import img1 from "../../assets/images/slider/sliderImg1.jpg";
import img2 from "../../assets/images/slider/sliderImg2.jpg";

const AboutSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider = useRef(null);

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 800,
    arrows: false, 
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    adaptiveHeight: true,
    afterChange: (current) => setCurrentSlide(current),
  };

  const images = [img1, img2];

  return ( <>
    <div className="slider-component">
      <Slider {...mainSettings} ref={mainSlider}>
        {images.map((img, index) => (
          <div key={index} className="main-slide">
            <div className="image-wrapper">
              <img src={img} alt={`Slide ${index + 1}`} className="main-image" />
            </div>
          </div>
        ))}
      </Slider>

      <div className="slider-buttons">
        <button onClick={() => mainSlider.current.slickPrev()} className="prev-btn">
          ❮
        </button>
        <button onClick={() => mainSlider.current.slickNext()} className="next-btn">
          ❯
        </button>
      </div>
    </div>
   
    </>
  );
};

export default AboutSlider;
