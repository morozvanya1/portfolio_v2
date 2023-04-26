import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wardrobe from "./pages/Wardrobe";
import Content from "./pages/Content";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/wardrobe" element={<Wardrobe />} exact />
        <Route path="/content" element={<Content />} exact />
      </Routes>
    </Router>
  </React.StrictMode>
);
