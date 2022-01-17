import React from "react";
import { useNavigate } from "react-router-dom";
import { setPoints, setSeconds } from "../../features/info/infoSlice";
import { useSelector, useDispatch } from "react-redux";
import "./start.scss";

export default function Start() {
  const dispatch = useDispatch();
  const currentTeamIndex = useSelector((state) => state.info.currentTeam);
  const currentTeamName = useSelector(
    (state) => state.info.teams[currentTeamIndex].teamName
  );
  const seconds = useSelector((state) => state.info.seconds);

  return (
    <div className="container">
      <div className="head">
        <h1>{currentTeamName}</h1>
        <p>{seconds}</p>
      </div>
    </div>
  );
}
