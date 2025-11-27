import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Page4 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const forWhomList = t("courses.training.forWhom.list", { returnObjects: true });
  const advantagesList = t("courses.training.advantages.list", { returnObjects: true });
  
  const handleRegisterClick = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 900, behavior: "smooth" });
    }, 400);
  };
  return (
    <div className="page">
      <div className="course-header">
        <h1>{t("courses.training.title")}</h1>
        <p className="breadcrumb" onClick={onHome} style={{ cursor: "pointer" }}>
        </p>
      </div>

      <section className="about-section">
        <h2>{t("courses.training.about.title")}</h2>
        <p>{t("courses.training.about.text")}</p>
        <div className="details">
          <p><strong>{t("courses.training.details.schedule")}</strong></p>
          <p><strong>{t("courses.training.details.format")}</strong></p>
        </div>
      </section>

      <section className="forwhom-section">
        <h2>{t("courses.training.forWhom.title")}</h2>
        <ul>
          {forWhomList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="advantages-section">
        <h2>{t("courses.training.advantages.title")}</h2>
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

export default Page4;
