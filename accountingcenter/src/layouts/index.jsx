import React from "react";
import "./style.css"
import { NavBar } from "../components/navbar";

import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Footer } from "../components/footer";
import { Courses } from "../pages/courses";
import { Contact } from "../pages/contact";
import { Page1 } from "../components/coursesPages/page1";
import { Page2 } from "../components/coursesPages/page2";
import { Page3 } from "../components/coursesPages/page3";
import { Page4 } from "../components/coursesPages/page4";



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
                <Route path="/courses/1" element={<Page1/>} />
                <Route path="/courses/2" element={<Page2/>} />
                <Route path="/courses/3" element={<Page3/>} />
                <Route path="/courses/4" element={<Page4/>} />

            </Routes>
            </div>
            <Footer/>
        </div>
    )
}