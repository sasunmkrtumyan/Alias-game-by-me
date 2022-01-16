import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./teams.scss";
import { Link } from "react-router-dom";
import { changeName } from "../../features/info/infoSlice";

export default function Teams() {
  const seconds = useSelector((state) => state.info.seconds);
  const point = useSelector((state) => state.info.points);
  const dispatch = useDispatch();

  const handleChangeName = (index, name) => {
    dispatch(changeName({ index, name }));
  };

  return (
    <div className="container">
      <div className="teams">
        <h2>Teams</h2>
        <div className="teamsDiv">
          <input
            onChange={(e) => handleChangeName(0, e.target.value)}
            className="teamInput"
            placeholder="Team 1"
            type="text"
            id="team1"
            name="team2"
            minlength="1"
            maxlength="15"
          ></input>
          <input
            onChange={(e) => handleChangeName(1, e.target.value)}
            className="teamInput"
            placeholder="Team 2"
            type="text"
            id="team1"
            name="team2"
            minlength="1"
            maxlength="15"
          ></input>
        </div>
      </div>

      <div className="info">
        <p>Raund time - {seconds}</p>
        <p>Point to win - {point}</p>
      </div>
      <button className="btn">START</button>
      <button className="but">
        <Link to="/">go back</Link>
      </button>
    </div>
  );
}
