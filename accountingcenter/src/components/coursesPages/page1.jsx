import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Page1 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const learnList = t("courses.finance.willLearn.list", { returnObjects: true });
  const forWhomList = t("courses.finance.forWhom.list", { returnObjects: true });
  const advantagesList = t("courses.finance.advantages.list", { returnObjects: true });

const handleRegisterClick = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 900, behavior: "smooth" }); 
    }, 400);
  };

  return (
    <div className="page">
      <div className="course-header">
        <h1>{t("courses.finance.title")}</h1>
        <p className="breadcrumb">{t("courses.finance.breadcrumb")}</p>
      </div>

      <section className="about-section">
        <h2>{t("courses.finance.about.title")}</h2>
        <p>{t("courses.finance.about.text")}</p>

        <div className="details">
          <p><strong>{t("courses.finance.details.duration")}</strong></p>
          <p><strong>{t("courses.finance.details.evening")}</strong></p>
          <p><strong>{t("courses.finance.details.format")}</strong></p>
        </div>
      </section>

      <section className="learn-section">
        <h2>{t("courses.finance.willLearn.title")}</h2>
        <ul>
          {learnList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="forwhom-section">
        <h2>{t("courses.finance.forWhom.title")}</h2>
        <ul>
          {forWhomList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="advantages-section">
        <h2>{t("courses.finance.advantages.title")}</h2>
        <ul>
          {advantagesList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="course-actions">
        <button onClick={() => navigate(-1)} className="back-btn">
          {t("courses.back")}
        </button>
        <button onClick={handleRegisterClick} className="register-btn">
          {t("home.register")}
        </button>
      </div>
    </div>
  );
};

export default Page1;
