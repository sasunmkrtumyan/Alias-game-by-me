import { Routes, Route } from "react-router-dom";
import Teams from "./pages/teams/Teams";
import Home from "./pages/home/Home";
import Start from "./pages/start/Start";
import Result from "./pages/result/Result";
import Score from "./pages/score/Score";
import ShowWinner from "./pages/showWinner/ShowWinner";
import "./styles/cssReset.scss";
import "./styles/generalComponents.scss";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />} />
        <Route path="start" element={<Start />} />
        <Route path="result" element={<Result />} />
        <Route path="score" element={<Score />} />
        <Route path="showWinner" element={<ShowWinner />} />
      </Routes>
    </div>
  );
}
