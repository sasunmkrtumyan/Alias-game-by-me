import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import finishPhoto from "../../assets/images/finish.png";
import scorePhoto from "../../assets/images/score.png";
import "./score.scss";

export default function Score() {
  const points = useSelector((state) => state.info.points);
  const team1 = useSelector((state) => state.info.teams[0].teamName);
  const team2 = useSelector((state) => state.info.teams[1].teamName);
  const team1score = useSelector((state) => state.info.teams[0].score);
  const team2score = useSelector((state) => state.info.teams[1].score);

  return (
    <div className="container">
      <div className="pointDiv">
        <img className="finish" src={finishPhoto} alt="finish" />
        <p>{points}</p>
      </div>
      <div className="scoreDiv">
        <h3>{team1}</h3>
        <div className="scoresDiv">
          <h4 className="score1">{team1score}</h4>
          <img className="scores" src={scorePhoto} alt="score" />
          <h4 className="score2">{team2score}</h4>
        </div>
        <h3>{team2}</h3>
      </div>
      <Link to="/start">
        <button className="resbtn">Continue</button>
      </Link>
    </div>
  );
}
