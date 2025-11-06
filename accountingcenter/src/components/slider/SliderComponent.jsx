import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import stafImg from "../../assets/images/slider/staf-img.png";
import img1 from "../../assets/images/slider/2.jpg";
import img2 from "../../assets/images/slider/2.jpg";

import { useTranslation } from "react-i18next";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    beforeChange: () => setIsVisible(false),
    afterChange: (index) => {
      setCurrentSlide(index);
      setTimeout(() => setIsVisible(true), 100);
    },
  };

  const images = [img1, img2];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // անիմացիան աշխատի նաև առաջին բացման պահին
  }, []);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <div className={`overlay ${isVisible ? "show" : ""}`}>
        <div className="text-box">
          <h3>{t("sliderHome.welcome")}</h3>
          <p>{t("sliderHome.trust_us")}</p>
        </div>
        <div className="image-box">
          <img src={stafImg} alt="Staff" />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
