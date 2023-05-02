import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "./components/index";
import { Wardrobe, Content, App, Weather, Currency, Others } from "./pages/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/wardrobe" element={<Wardrobe />} exact />
        <Route path="/content" element={<Content />} exact />
        <Route path="/card" element={<Card />} exact />
        <Route path="/weather" element={<Weather />} exact />
        <Route path="/currency" element={<Currency />} exact />
        <Route path="/others" element={<Others />} exact />
      </Routes>
    </Router>
  </React.StrictMode>
);
