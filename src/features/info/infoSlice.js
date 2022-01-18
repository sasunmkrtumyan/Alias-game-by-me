import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 50,
  seconds: 60,
  teams: [
    { teamName: "Team 1", score: 0, step: 0 },
    { teamName: "Team 2", score: 0, step: 0 },
  ],
  currentTeam: 0,
  win1: false,
  win2: false,
  currentAnswers: [],
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
    setTurnResults: (state, action) => {
      const index = state.currentTeam;
      state.teams[index].score += action.payload;
      state.teams[index].step += 1;
      if (state.currentTeam === 0) {
        state.currentTeam = 1;
      } else state.currentTeam = 0;
    },
    isWiner: (state) => {
      if (
        state.teams[0].step === state.teams[1].step &&
        state.teams[0].score >= state.points &&
        state.teams[0].score > state.teams[1].score
      ) {
        state.win1 = true;
      }
      if (
        state.teams[0].step === state.teams[1].step &&
        state.teams[1].score >= state.points &&
        state.teams[1].score > state.teams[0].score
      ) {
        state.win2 = true;
      }
    },
    setCurrentAnswers: (state, action) => {
      state.currentAnswers = action.payload;
    },
  },
});

export const {
  addToScore,
  changeName,
  setPoints,
  setSeconds,
  setTurnResults,
  isWiner,
  setCurrentAnswers,
} = infoSlice.actions;

export default infoSlice.reducer;
