import React from "react";
import "./App.css";
import Teams from "./pages/teams/Teams";
import Home from "./pages/home/Home";
import "./styles/cssReset.scss";
import "./styles/generalComponents.scss";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="Teams" element={<Teams />} />
      </Routes>
    </div>
  );
}
