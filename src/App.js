import React from "react";
import "./App.css";
// import router
import { BrowserRouter as Router } from "react-router-dom";
// components
import Index from "./components/screens/Index";
function App() {
    return (
        <Router>
            <Index />
        </Router>
    );
}

export default App;
