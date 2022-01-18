import { useSelector, useDispatch } from "react-redux";
import "./teams.scss";
import { Link } from "react-router-dom";
import { changeName } from "../../features/info/infoSlice";
import { useNavigate } from "react-router-dom";

export default function Teams() {
  const seconds = useSelector((state) => state.info.seconds);
  const point = useSelector((state) => state.info.points);
  const team1 = useSelector((state) => state.info.teams[0].teamName);
  const team2 = useSelector((state) => state.info.teams[1].teamName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeName = (index, name) => {
    dispatch(changeName({ index, name }));
  };

  const checkNameValidation = () => {
    if (team1 && team2) {
      navigate("/start");
    }
    return;
  };

  return (
    <div className="container">
      <div className="teams">
        <h2>Teams</h2>
        <div className="teamsDiv">
          <input
            value={team1}
            onChange={(e) => handleChangeName(0, e.target.value)}
            className="teamInput"
            type="text"
            id="team1"
            name="team2"
            minLength="1"
            maxLength="15"
          ></input>
          <input
            value={team2}
            onChange={(e) => handleChangeName(1, e.target.value)}
            className="teamInput"
            type="text"
            id="team1"
            name="team2"
            minLength="1"
            maxLength="15"
          ></input>
        </div>
        {(!team1 || !team2) && (
          <p className="errors">Team name can`t be empty</p>
        )}
      </div>

      <div className="info">
        <p>Raund time - {seconds}</p>
        <p>Point to win - {point}</p>
      </div>
      <Link to="/">
        <button className="btn but">For change rules</button>
      </Link>
      <button className="btn " onClick={checkNameValidation}>
        START
      </button>
    </div>
  );
}
