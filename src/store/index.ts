import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import weatherReducer from "./weather";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
