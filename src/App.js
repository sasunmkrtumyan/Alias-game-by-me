import React from "react";
import "./App.css";
import Teams from "./pages/teams/Teams";
import Home from "./pages/home/Home";
import Start from "./pages/start/Start";
import "./styles/cssReset.scss";
import "./styles/generalComponents.scss";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />} />
        <Route path="start" element={<Start />} />
      </Routes>
    </div>
  );
}
