import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./result.scss";
import { setWinner1, setWinner2 } from "../../features/info/infoSlice";

export default function Result() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const answeredWords = useSelector((state) => state.info.currentAnswers);
  const points = useSelector((state) => state.info.points);
  const win1 = useSelector((state) => state.info.win1);
  const win2 = useSelector((state) => state.info.win2);
  const step1 = useSelector((state) => state.info.teams[0].step);
  const step2 = useSelector((state) => state.info.teams[1].step);
  const score1 = useSelector((state) => state.info.teams[0].score);
  const score2 = useSelector((state) => state.info.teams[1].score);
  const answeredPoints = useSelector(
    (state) => state.info.currentAnswers.length
  );

  function handleWinChack() {
    if (step1 === step2 && score1 >= points && score1 > score2) {
      dispatch(setWinner1(true));
      navigate("/showWinner");
    } else if (step1 === step2 && score2 >= points && score2 > score1) {
      dispatch(setWinner2(true));
      navigate("/showWinner");
    } else navigate("/score");
  }

  console.log(win1, step1, score1, win2, step2, score2);

  return (
    <div className="container">
      <p className="points">Points: + {answeredPoints}</p>
      <div className="resultDiv">
        {answeredWords.length > 1 ? (
          answeredWords.map((word, i) => {
            return <p key={i}>{word}</p>;
          })
        ) : (
          <h2 className="oops">oops !!!</h2>
        )}
      </div>
      <button onClick={handleWinChack} className="btn">
        Continue
      </button>
    </div>
  );
}
