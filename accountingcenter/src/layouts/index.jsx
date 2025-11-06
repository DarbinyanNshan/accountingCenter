import React from "react";
import "./style.css"
import { NavBar } from "../components/navbar";

import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Footer } from "../components/footer";
import { Courses } from "../pages/courses";
import { Contact } from "../pages/contact";



export const Router = () => {


    return (
        <div className="wrapper">
            <NavBar/>
            <div className="content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            </div>
            <Footer/>
        </div>
    )
}