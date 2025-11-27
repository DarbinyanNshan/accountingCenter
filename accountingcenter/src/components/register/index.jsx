import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/home/registrlogo.png";

import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

export const Register = () => {
  const { t } = useTranslation();
  const form = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".contact-border");
      elements.forEach((e) => {
        const rect = e.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          e.classList.add("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_avjh2ws",
        "template_3sxoptj",
        form.current,
        "G_GFIiShl_BuU3IBw"
      )
      .then(() => {
        toast.success(t("register.success"), {
          position: "bottom-center",
          autoClose: 3000,
          theme: "colored",
        });
      })
      .catch(() => {
        toast.error(t("register.error"), {
          position: "bottom-center",
          autoClose: 4000,
          theme: "colored",
        });
      });
    e.target.reset();
  };

  return (
    <div className="register">
      <div>
        <img src={logo} alt="Register Logo" className="register-logo" />
        <h2 className="register-title">{t("register.title")}</h2>
        <p className="register-subtitle">{t("register.subtitle")}</p>
        <div className="website">
          <div className="website_icon">
            <div className="fa">
              <a href="https://www.facebook.com/adcaccounting.am" aria-label="Facebook" target="_blank">
                <BiLogoFacebook />
              </a>
            </div>
            <div className="in">
              <a href="https://www.instagram.com/adc_accounting_/" aria-label="Instagram" target="_blank">
                <FaInstagram />
              </a>
            </div>
            <div className="li">
              <a href="https://www.linkedin.com/company/adc-accounting-development-center/" aria-label="LinkedIn" target="_blank">
                <BiLogoLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="input-box">
          <div className="input-field">
            <label htmlFor="user_name">{t("register.name_label")}</label>
            <input type="text" id="user_name" name="user_name" required />
          </div>

          <div className="input-field">
            <label htmlFor="user_email">{t("register.email_label")}</label>
            <input type="email" id="user_email" name="user_email" required />
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <label htmlFor="user_phone">{t("register.phone_label")}</label>
            <input type="text" id="user_phone" name="user_phone" required />
          </div>

          <div className="input-field">
            <label htmlFor="participation">{t("register.participation_label")}</label>
            <select id="participation" name="participation" required>
              <option value="">{t("register.participation_placeholder")}</option>
              <option value="offline">{t("register.participation_offline")}</option>
              <option value="online">{t("register.participation_online")}</option>
              <option value="offline">{t("register.participation_offline_online")}</option>
            </select>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <label htmlFor="occupation">{t("register.occupation_label")}</label>
            <select id="occupation" name="occupation" required>
              <option value="">{t("register.occupation_placeholder")}</option>
              <option value="worker">{t("register.occupation_worker")}</option>
              <option value="student">{t("register.occupation_student")}</option>
              <option value="other">{t("register.occupation_other")}</option>
            </select>
          </div>
        </div>

        <div className="textarea-field">
          <label htmlFor="message">{t("register.message_label")}</label>
          <textarea id="message" name="message" rows="6" required />
        </div>

        <button type="submit" className="contact-btn">
          {t("register.send_btn")}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
