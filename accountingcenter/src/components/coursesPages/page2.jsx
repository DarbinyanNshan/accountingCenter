import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Page2 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const learnList = t("courses.armenianProgram.willLearn.list", { returnObjects: true });
  const forWhomList = t("courses.armenianProgram.forWhom.list", { returnObjects: true });

  const handleRegisterClick = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 900, behavior: "smooth" });
    }, 400);
  };
  return (
    <div className="page">
      <div className="course-header">
        <h1>{t("courses.armenianProgram.title")}</h1>
        <p className="breadcrumb" onClick={onHome} style={{ cursor: "pointer" }}>
        </p>
      </div>

      <section className="about-section">
        <h2>{t("courses.armenianProgram.about.title")}</h2>
        <p>{t("courses.armenianProgram.about.text")}</p>

        <div className="details">
          <p><strong>{t("courses.armenianProgram.details.duration")}</strong></p>
          <p><strong>{t("courses.armenianProgram.details.evening")}</strong></p>
          <p><strong>{t("courses.armenianProgram.details.format")}</strong></p>
        </div>
      </section>

      <section className="learn-section">
        <h2>{t("courses.armenianProgram.willLearn.title")}</h2>
        <ul>
          {learnList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="forwhom-section">
        <h2>{t("courses.armenianProgram.forWhom.title")}</h2>
        <ul>
          {forWhomList.map((item, index) => (
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

export default Page2;
