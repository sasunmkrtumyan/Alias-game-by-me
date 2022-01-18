import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./start.scss";
import { wordGenerator } from "../../words";
import {
  setTurnResults,
  setCurrentAnswers,
} from "../../features/info/infoSlice";

export default function Start() {
  const dispatch = useDispatch();
  const currentTeamIndex = useSelector((state) => state.info.currentTeam);
  const currentTeamName = useSelector(
    (state) => state.info.teams[currentTeamIndex].teamName
  );
  const seconds = useSelector((state) => state.info.seconds);

  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [answeredWords, setAnsweredWords] = useState([]);
  const [counter, setCounter] = useState(seconds - 50);
  const [words, setWords] = useState([]);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

    if (counter < 1) {
      dispatch(setTurnResults(currentPoints));
      dispatch(setCurrentAnswers(answeredWords));
      navigate("/result");
    }
  }, [counter]);

  useEffect(() => {
    setWords(wordGenerator());
  }, []);

  function handleAnsuered(word) {
    if (!answeredWords.includes(word)) {
      setAnsweredWords([...answeredWords, word]);
      setCurrentPoints(currentPoints + 1);
      if ((answeredWords.length + 1) % 7 === 0) {
        setPage(page + 1);
      }
    } else {
      setAnsweredWords(answeredWords.filter((item) => item !== word));
      setCurrentPoints(currentPoints - 1);
    }
  }

  return (
    <div className="container">
      <div className="head">
        <h1>{currentTeamName}</h1>
        <p>{counter}</p>
      </div>
      <div className="wordsDiv">
        {words?.slice(page * 7, (page + 1) * 7).map((word, index) => {
          return (
            <p
              className={`word ${
                answeredWords.includes(word) ? "answered" : ""
              }`}
              key={index}
              onClick={() => handleAnsuered(word)}
            >
              {word}
            </p>
          );
        })}
      </div>
      <p className="currentPoint "> points: {currentPoints} </p>
    </div>
  );
}
