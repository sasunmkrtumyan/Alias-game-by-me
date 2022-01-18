import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { playAgain } from "../../features/info/infoSlice";
import finishPhoto from "../../assets/images/finish.png";
import scorePhoto from "../../assets/images/score.png";
import "./showWinner.scss";

export default function ShowWinner() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const win1 = useSelector((state) => state.info.win1);
  const team1 = useSelector((state) => state.info.teams[0].teamName);
  const team2 = useSelector((state) => state.info.teams[1].teamName);
  const points = useSelector((state) => state.info.points);
  const team1score = useSelector((state) => state.info.teams[0].score);
  const team2score = useSelector((state) => state.info.teams[1].score);

  function handlePlayAgain() {
    dispatch(playAgain());
    navigate("/");
  }

  return (
    <div className="container">
      <div className="winer">
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
        {win1 ? (
          <h1 className="winnerContent">{team1} win the Game</h1>
        ) : (
          <h1 className="winnerContent">{team2} win the Game</h1>
        )}

        <button className="resbtn" onClick={handlePlayAgain}>
          Play again
        </button>
      </div>
    </div>
  );
}
