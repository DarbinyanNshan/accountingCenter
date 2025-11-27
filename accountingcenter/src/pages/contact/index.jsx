import React from "react";
import "./style.css";
import { Register } from "../../components/register";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa";
import { RiHomeOfficeFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
export const Contact = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const onHome = () => {
        navigate('/');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="contact">
                <div className="contact-img">
                    <div className="contact-text">
                        <h1>{t('navBar.contact')}</h1>
                        <h6 onClick={onHome}><span>{t('navBar.home')}</span> / {t('navBar.contact')}</h6>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-border">
                        <div className="contact-icon"><RiHomeOfficeFill /></div>
                        <h2 className="contact-title">{t('contact.officeAddress')}</h2>
                        <p className="cotact-text">{t('address')}</p>
                    </div>
                    <div className="contact-border">
                        <div className="contact-icon"><FaPhone /></div>
                        <h2 className="contact-title">{t('contact.officePhone')}</h2>
                        <p className="cotact-text"> +374 91 775002</p>
                    </div>
                    <div className="contact-border">
                        <div className="contact-icon"><IoIosMail /> </div>
                        <h2 className="contact-title">{t('contact.officeMail')}</h2>
                        <p className="cotact-text">adc.ngo.armenia@gmail.com</p>
                    </div>
                </div>
                <Register />
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.2301660845555!2d44.5269981758766!3d40.203942771474566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd2d69a4f031%3A0x4b097a3c8a52eaa7!2s11%20Davit%20Anhaght%20Street%2C%20Yerevan%200014!5e0!3m2!1sru!2sam"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
};
