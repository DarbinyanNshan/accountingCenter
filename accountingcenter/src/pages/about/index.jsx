import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // <--- ավելացվեց
import "./style.css";

export const About = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const onHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // FAQ տվյալները i18n-ից բեռնել
  const faqData = t("aboutPage.faq", { returnObjects: true });
  const targetList = t("aboutPage.target_list", { returnObjects: true });

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="about">
      <div className="about-img">
        <div className="about-text">
          <h1>{t("navBar.about")}</h1>
          <h6 onClick={onHome}>
            <span>{t("navBar.home")}</span> / {t("navBar.about")}
          </h6>
        </div>
      </div>

      <div className="about_content">
        <div className="about_text">
          <h2>{t("aboutPage.who_we_are_title")}</h2>
          <p>{t("aboutPage.who_we_are_text")}</p>

          <h3>{t("aboutPage.target_title")}</h3>
          <ul>
            {targetList.map((item, i) => (
              <li key={i}>👉 {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="about_question">
        <div className="about_question_content">
          <h2>{t("aboutPage.faq_title")}</h2>
          <h3>{t("aboutPage.faq_subtitle")}</h3>

          {faqData.map((item, index) => (
            <div key={index} className="faq_item">
              <h4 onClick={() => toggleFAQ(index)}>{item.question}</h4>

              {/* AnimatePresence + motion.div */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.ul
                    className="faq_answer_list"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
