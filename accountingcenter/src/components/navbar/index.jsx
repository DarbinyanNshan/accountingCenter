import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./style.css";

import logo from "../../assets/images/logo/logo.png";
import logoMobile from "../../assets/images/logo/logo-mobile.png";
import time from "../../assets/images/icons/time.png";
import phone from "../../assets/images/icons/phone.png";
import mail from "../../assets/images/icons/mail.png";

import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

import { BiMap } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../../i18n/LanguageSwitcher";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const { t } = useTranslation();
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleLogoClick = () => {
    navigate("/");
    scrollToTop();
  };

  const handleRegisterClick = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 900, behavior: "smooth" });
    }, 200);
  };

  const onClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="top">
        <p className="top_addres">
          <span>
            <BiMap />
          </span>
          {t("address")}
        </p>
        <button className="top_btn" onClick={handleRegisterClick}>
          {t("navBar.registrHer")}

        </button>
      </div>

      <div className="info">
        <div className="contact-data">
          <div className="logo" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" />
          </div>
          <div className="info-content">
            <div className="contentInfo One">
              <img src={time} alt="1" />
              <div>
                <h6>{t("navBar.contact_time_title")}</h6>
                <p>10:00 - 18:00</p>
              </div>
            </div>
            <div className="contentInfo Two">
              <img src={phone} alt="2" />
              <div>
                <h6>{t("navBar.phone_title")}</h6>
                <p>{t('phoneNumber')}</p>
              </div>
            </div>
            <div className="contentInfo Three">
              <img src={mail} alt="3" />
              <div>
                <h6>{t("navBar.email_title")}</h6>
                <p>{t('mail')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav ref={navRef} className={`navbar ${isFixed ? "fixed" : ""}`}>
        <div className="logo" onClick={onClick}>
          <img src={logoMobile} alt="Logo" />
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {isOpen && (
            <div className="close-icon" onClick={() => setIsOpen(false)}>
              <IoClose />
            </div>
          )}
          <NavLink
            to="/"
            onClick={() => {
              setIsOpen(false);
              scrollToTop();
            }}
          >
            {t("navBar.home")}
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => {
              setIsOpen(false);
              scrollToTop();
            }}
          >
            {t("navBar.about")}
          </NavLink>
          <NavLink
            to="/courses"
            onClick={() => {
              setIsOpen(false);
              scrollToTop();
            }}
          >
            {t("navBar.courses")}
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => {
              setIsOpen(false);
              scrollToTop();
            }}
          >
            {t("navBar.contact")}
          </NavLink>

          <LanguageSwitcher setIsOpen={setIsOpen} />
        </div>
        <div className="website_top">
          <div className="website">
            <div className="website_icon">
              <div className="fa">
                <a href="https://www.facebook.com/adcaccounting.am" aria-label="Facebook" target="_blank">
                  <BiLogoFacebook />
                </a>
              </div>
              <div className="in">
                <a href="https://www.instagram.com/adc__academy/" aria-label="Instagram" target="_blank">
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
        {!isOpen && (
          <div className="new-toggle" onClick={() => setIsOpen(true)}>
            <FaBars />
          </div>
        )}
      </nav>
    </>
  );
};
