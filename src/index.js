// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/login/Signup";
import { Dashboard } from "./components/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Include other routes here if needed */}
        <Route path="*" element={<App />} />{" "}
        {/* Optionally, add a fallback route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
