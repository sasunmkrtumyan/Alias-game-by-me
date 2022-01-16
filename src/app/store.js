import { configureStore } from "@reduxjs/toolkit";
import infoReduser from "../features/info/infoSlice";

export const store = configureStore({
  reducer: {
    info: infoReduser,
  },
});
