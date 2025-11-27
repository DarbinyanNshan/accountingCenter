import React from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CoursesContent } from "../../components/coursesContent";

export const Courses = () => {
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
          <div>
               <div className="courses-img">
                    <div className="courses-text">
                        <h1>{t('navBar.courses')}</h1>
                        <h6 onClick={onHome}><span>{t('navBar.home')}</span> / {t('navBar.courses')}</h6>
                    </div>
                </div>
                    <CoursesContent />
          </div>
            </>
    );
};
