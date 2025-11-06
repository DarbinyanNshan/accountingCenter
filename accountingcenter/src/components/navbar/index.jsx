import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";

import logo from "../../assets/images/logo/logo.png";
import logoMobile from "../../assets/images/logo/logo-mobile.png";
import time from "../../assets/images/icons/time.png";
import phone from "../../assets/images/icons/phone.png";
import mail from "../../assets/images/icons/mail.png";

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

  // Scroll listener for fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  const handleLogoClick = () => {
    navigate("/");
    scrollToTop();
  };

  const handleRegisterClick = () => {
    navigate("/contact");
    setTimeout(() => scrollToBottom(), 100);
  };

  const onClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar */}
      <div className="top">
        <p className="top_addres">
          <span>
            <BiMap />
          </span>
          {t("address")}
        </p>
        <button className="top_btn" onClick={handleRegisterClick}>
          {t("navBar.register_here")}
        </button>
      </div>

      {/* Logo & Contact info */}
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
                <p>{t("navBar.contact_time_hours")}</p>
              </div>
            </div>
            <div className="contentInfo Two">
              <img src={phone} alt="2" />
              <div>
                <h6>{t("navBar.phone_title")}</h6>
                <p>{t("phoneNumber")}</p>
              </div>
            </div>
            <div className="contentInfo Three">
              <img src={mail} alt="3" />
              <div>
                <h6>{t("navBar.email_title")}</h6>
                <p>{t("mail")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
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

          <NavLink to="/" onClick={() => { setIsOpen(false); scrollToTop(); }}>
            {t("navBar.home")}
          </NavLink>
          <NavLink to="/about" onClick={() => { setIsOpen(false); scrollToTop(); }}>
            {t("navBar.about")}
          </NavLink>
          <NavLink to="/courses" onClick={() => { setIsOpen(false); scrollToTop(); }}>
            {t("navBar.courses")}
          </NavLink>
          <NavLink to="/contact">
            {t("navBar.contact")}
          </NavLink>

          <div className="mobile-language">
            <LanguageSwitcher setIsOpen={setIsOpen} />
          </div>
        </div>

        <div className="nav-right">
          <div className="desktop-language">
            <LanguageSwitcher setIsOpen={setIsOpen} />
          </div>
          {!isOpen && (
            <div className="new-toggle" onClick={() => setIsOpen(true)}>
              <FaBars />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
