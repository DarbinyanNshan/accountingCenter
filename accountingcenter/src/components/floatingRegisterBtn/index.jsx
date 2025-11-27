import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import { useTranslation } from "react-i18next";

import { IoMdMail } from "react-icons/io";


function FloatingRegisterBtn() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();
    

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const onClick = () => {
        navigate("/contact");
        setTimeout(() => {
            window.scrollTo({ top: 900, behavior: "smooth" });
        }, 200);
    };

    return (
        <div
            className="floating-register"
            style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(20px)",
                pointerEvents: show ? "auto" : "none",
            }}
            onClick={onClick}
        >
            <div className="icon"><IoMdMail /></div>
            <span className="text"> {t("navBar.registrHer")}</span>
        </div>
    );
}

export default FloatingRegisterBtn;
