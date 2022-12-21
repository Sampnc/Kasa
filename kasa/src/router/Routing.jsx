import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Logement from "../pages/Logement";

const Routing = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
    );
};

export default Routing;