import React from "react";
import "./style.css";
import SliderComponent from "../../components/slider/SliderComponent";
import { useTranslation } from "react-i18next";
import { Register } from "../../components/register";
import AboutSlider from "../../components/aboutSlider";
import img1 from "../../assets/images/iconsHome/briefcase.png";
import img2 from "../../assets/images/iconsHome/save-time.png";
import img3 from "../../assets/images/iconsHome/like.png";
import img4 from "../../assets/images/iconsHome/hand-in-hand.png";
import img5 from "../../assets/images/iconsHome/confidence.png";
import imgTree from "../../assets/images/home/homeTree.jpg";

export const Home = () => {
  const { t } = useTranslation();

  const FEATURES = [
    {
      icon: img1,
      title: t("home.features.0.title"),
      description: t("home.features.0.description"),
    },
    {
      icon: img2,
      title: t("home.features.1.title"),
      description: t("home.features.1.description"),
    },
    {
      icon: img3,
      title: t("home.features.2.title"),
      description: t("home.features.2.description"),
    },
    {
      icon: img4,
      title: t("home.features.3.title"),
      description: t("home.features.3.description"),
    },
    {
      icon: img5,
      title: t("home.features.4.title"),
      description: t("home.features.4.description"),
    },
  ];

  return (
    <>
      <SliderComponent />
      <div className="home">
        {/* === WHY CHOOSE === */}
        <div className="homeOne">
          <h2 className="homeOne_title">{t("home.why_choose")}</h2>
          <div className="homeOne_content">
            {FEATURES.map((feature, index) => (
              <div className="feature" key={index}>
                <img src={feature.icon} alt={feature.title} className="icon" />
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === START COURSE === */}
        <div className="homeTwo">
          <h2>{t("home.start_title")}</h2>
          <h6>{t("home.start_subtitle")}</h6>
          <button>{t("home.register")}</button>
        </div>

        {/* === COURSES === */}
        <div className="homeTree">
          <img src={imgTree} alt="Courses" />
          <div className="homeTree_content">
            <h2>{t("home.courses_title")}</h2>
            {t("home.courses_list", { returnObjects: true }).map((c, i) => (
              <p key={i}>✨ {c}</p>
            ))}
            <button>{t("home.learn_more")}</button>
          </div>
        </div>

        <Register />

        {/* === SERVICES === */}
        <div className="home_services">
          <div className="home_services_content">
            <h2 className="home_services_title">{t("home.services_title")}</h2>
            {t("home.services", { returnObjects: true }).map((s, i) => (
              <p key={i}>✨ {s}</p>
            ))}
            <button>{t("home.learn_more")}</button>
          </div>
          <AboutSlider />
        </div>
      </div>
    </>
  );
};
