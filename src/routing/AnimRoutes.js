import React from "react";
// import routes route & useLocation hook
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// components
import About from "../components/screens/About";
import Contacts from "../components/screens/Contacts";
import Home from "../components/screens/Home";
import Projects from "../components/screens/Projects";

function AnimRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence initial={true} mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Projects />} />
                <Route path="/contact" element={<Contacts />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimRoutes;
