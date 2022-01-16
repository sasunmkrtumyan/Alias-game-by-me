import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import { setPoints, setSeconds } from "../../features/info/infoSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1 className="name">Alias</h1>
      <div className="configuration">
        <div className="config">
          <p>Round time</p>
          <input
            onChange={(e) => dispatch(setSeconds(e.target.value))}
            className="config-input"
            type="number"
            min="30"
            max="120"
          ></input>
        </div>
        <div className="config">
          <p>Point to win</p>
          <input
            onChange={(e) => dispatch(setPoints(e.target.value))}
            className="config-input"
            type="number"
            min="50"
          ></input>
        </div>
      </div>
      <button className="btn">
        <Link to="/Teams">PLAY</Link>
      </button>
    </div>
  );
}
