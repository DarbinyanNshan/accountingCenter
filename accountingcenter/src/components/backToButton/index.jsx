import React, { useEffect, useState } from "react";
import "./style.css";
import { PiCaretUpThin } from "react-icons/pi";

function BackToTopButton() {

  const [BackToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
  <button
    className={`top-btn ${BackToTopButton ? "show" : ""}`}
    onClick={scrollUp}
  >
    <PiCaretUpThin />
  </button>
);
}

export default BackToTopButton;