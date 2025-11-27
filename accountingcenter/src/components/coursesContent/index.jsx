import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// React-icons
import { FaUniversity, FaBook, FaCalculator, FaChartLine } from "react-icons/fa";

export const CoursesContent = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const courses = [
        {
            title: t("courses.finance.title"),
            description: t("courses.finance.description"),
            path: "/courses/1",
            icon: <FaCalculator size={40} color="#fff" />,
        },
        {
            title: t("courses.armenianProgram.title"),
            description: t("courses.armenianProgram.details.duration"),
            path: "/courses/2",
            icon: <FaBook size={40} color="#fff" />,
        },
        {
            title: t("courses.taxation.title"),
            description: t("courses.taxation.details.duration"),
            path: "/courses/3",
            icon: <FaChartLine size={40} color="#fff" />,
        },
        {
            title: t("courses.training.title"),
            description: t("courses.training.details.schedule"),
            path: "/courses/4",
            icon: <FaUniversity size={40} color="#fff" />,
        },
    ];

    return (
        <div className="courses-content">
            {courses.map((course, index) => (
                <div
                    key={index}
                    className="course-card"
                    onClick={() => handleNavigation(course.path)}
                >
                    <div className="card-inner">
                        <div className="card-front">
                            <div className="icon-wrapper">
                                {course.icon}
                            </div>
                            <h1>{course.title}</h1>
                        </div>
                        <div className="card-back">
                            <p>{course.description}</p>
                            <button>{t("home.learn_more")}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
