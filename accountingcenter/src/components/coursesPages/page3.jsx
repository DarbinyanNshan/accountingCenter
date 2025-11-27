import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Page3 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const learnList = t("courses.taxation.willLearn.list", { returnObjects: true });
  const forWhomList = t("courses.taxation.forWhom.list", { returnObjects: true });
  const advantagesList = t("courses.taxation.advantages.list", { returnObjects: true });

  const handleRegisterClick = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 900, behavior: "smooth" });
    }, 400);
  };
  return (
    <div className="page">
      <div className="course-header">
        <h1>{t("courses.taxation.title")}</h1>
        <p className="breadcrumb" onClick={onHome} style={{ cursor: "pointer" }}>
        </p>
      </div>

      <section className="about-section">
        <h2>{t("courses.taxation.about.title")}</h2>
        <p>{t("courses.taxation.about.text")}</p>
        <div className="details">
          <p><strong>{t("courses.taxation.details.duration")}</strong></p>
          <p><strong>{t("courses.taxation.details.schedule")}</strong></p>
          <p><strong>{t("courses.taxation.details.format")}</strong></p>
        </div>
      </section>

      <section className="learn-section">
        <h2>{t("courses.taxation.willLearn.title")}</h2>
        <ul>
          {learnList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="forwhom-section">
        <h2>{t("courses.taxation.forWhom.title")}</h2>
        <ul>
          {forWhomList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="advantages-section">
        <h2>{t("courses.taxation.advantages.title")}</h2>
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

export default Page3;
