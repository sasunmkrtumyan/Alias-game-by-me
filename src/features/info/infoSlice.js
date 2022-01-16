import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 50,
  seconds: 60,
  teams: [
    { teamName: "Team 1", score: 0, step: 0 },
    { teamName: "Team 2", score: 0, step: 0 },
  ],
  currentTeam: 0,
  win: false,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,

  reducers: {
    addToScore: (state, action) => {
      state.teams[state.currentTeam].score += action.payload.score;
      state.currentTeam = state.currentTeam ? 1 : 0;
    },
    changeName: (state, action) => {
      state.teams[action.payload.index].teamName = action.payload.name;
    },
    setPoints: (state, action) => {
      state.points = action.payload;
    },
    setSeconds: (state, action) => {
      state.seconds = action.payload;
    },
  },
});

export const { addToScore, changeName, setPoints, setSeconds } =
  infoSlice.actions;

export default infoSlice.reducer;
