import "./home.scss";
import { useNavigate } from "react-router-dom";
import { setPoints, setSeconds } from "../../features/info/infoSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const points = useSelector((state) => state.info.points);
  const seconds = useSelector((state) => state.info.seconds);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleValidate = () => {
    if (points < 30 || seconds < 30) {
      return;
    }
    navigate("/teams");
  };

  return (
    <div className="container">
      <h1 className="name">Alias</h1>
      <div className="configuration">
        <div className="config">
          <p className="confText">Round time</p>
          <input
            className="input"
            value={seconds}
            onChange={(e) => dispatch(setSeconds(e.target.value))}
            className="config-input"
            type="number"
            min="30"
            max="120"
          />
        </div>
        <div className="config">
          <p className="confText">Point to win</p>
          <input
            className="input"
            value={points}
            onChange={(e) => dispatch(setPoints(e.target.value))}
            className="config-input"
            type="number"
            min="50"
          />
        </div>
        {(points < 30 || seconds < 30) && (
          <p className="error">Stop bebe ! ! !</p>
        )}
      </div>
      <button onClick={handleValidate} className="btn">
        PLAY
      </button>
    </div>
  );
}
