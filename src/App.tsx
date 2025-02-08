import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";

function App() {
    return (
        <Router>
            <div style={{ backgroundColor: "#121417", color: "#FFFFFF" }}>
                <NavbarComponent />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/detail/:id" element={<Home />} />
                    <Route path="/tv/detail/:id" element={<Home />} />
                </Routes>

                <FooterComponent />
            </div>
        </Router>
    );
}

export default App;
