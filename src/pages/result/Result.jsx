import { Link } from "react-router-dom";
import "./result.scss";
import { useSelector } from "react-redux";

export default function Result() {
  const answeredWords = useSelector((state) => state.info.currentAnswers);
  const answeredPoints = useSelector(
    (state) => state.info.currentAnswers.length
  );

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
      <Link to="/score">
        <button className="resbtn">Continue</button>
      </Link>
    </div>
  );
}
