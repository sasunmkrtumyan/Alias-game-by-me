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

    setCurrentAnswers: (state, action) => {
      state.currentAnswers = action.payload;
    },
    playAgain: (state) => {
      state = { ...initialState };
    },
    setWinner1: (state, action) => {
      state.win1 = action.payload;
    },
    setWinner2: (state, action) => {
      state.win2 = action.payload;
    },
  },
});

export const {
  addToScore,
  changeName,
  setPoints,
  setSeconds,
  setTurnResults,
  setCurrentAnswers,
  playAgain,
  setWinner1,
  setWinner2,
} = infoSlice.actions;

export default infoSlice.reducer;
