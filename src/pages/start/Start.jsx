import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./start.scss";
import { wordGenerator } from "../../words";
import { setTurnResults } from "../../features/info/infoSlice";

export default function Start() {
  const dispatch = useDispatch();
  const currentTeamIndex = useSelector((state) => state.info.currentTeam);
  const currentTeamName = useSelector(
    (state) => state.info.teams[currentTeamIndex].teamName
  );
  const seconds = useSelector((state) => state.info.seconds);

  // const navigate = useNavigate();

  const [currentPoints, setCurrentPoints] = useState(0);
  const [answeredWords, setAnsweredWords] = useState([]);
  const [counter, setCounter] = useState(seconds);
  const [words, setWords] = useState([]);
  const [answer, setAnswer] = useState("word");

  if (counter < 1) {
    dispatch(setTurnResults(currentPoints));
    // navigate("/result");
  }

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  useEffect((currentPoints) => {
    setWords(wordGenerator(currentPoints));
  }, []);

  function handleAnsuered(word) {
    if (!answeredWords.includes(word)) {
      setAnsweredWords([...answeredWords, word]);
      setCurrentPoints(currentPoints + 1);
      setAnswer("answered");
    } else {
      setAnsweredWords(answeredWords.filter((item) => item !== word));
      setCurrentPoints(currentPoints - 1);
      setAnswer("word");
    }
  }

  return (
    <div className="container">
      <div className="head">
        <h1>{currentTeamName}</h1>
        <p>{counter}</p>
      </div>
      <div className="wordsDiv">
        {words?.map((word, index) => {
          return (
            <p
              className={`"word" ${answer}`}
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
