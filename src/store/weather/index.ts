import { createSlice, PayloadAction, isAnyOf } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { getDateWeather, getWeatherByCity } from "./asyncActions";
// import { UserInfo } from "./models/UserInfo";
// import { Status } from "models";
import { WeatherMode } from "../../constants";

enum Status {
  IDLE = "idle",
  PENDING = "pending",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export interface weatherState {
  //   data: UserInfo | null;
  weatherMode: WeatherMode;
  error: string | any;
  status: Status;
  cityWeather: any;
  city: string;
  timeWeather: any;
}

const initialState: weatherState = {
  weatherMode: WeatherMode.METRIC,
  error: null,
  status: Status.IDLE,
  cityWeather: null,
  city: "Yerevan",
  timeWeather: null,
};

export const weatherReducer = createSlice({
  name: "weatherSlice",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    changeWeatherMode: (state, action: PayloadAction<WeatherMode>) => {
      state.status = Status.IDLE;
      state.weatherMode = action.payload;
    },
    submitCity: (state, action: PayloadAction<string>) => {
      state.status = Status.IDLE;
      state.city = action.payload;
    },
    deleteError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getWeatherByCity.pending, (state, action) => {
      state.status = Status.PENDING;
      // state.updateStatus = Status.IDLE;
    });
    builder.addCase(getWeatherByCity.fulfilled, (state, action) => {
      state.status = Status.SUCCEEDED;
      state.cityWeather = action.payload;
      // state.updateStatus = Status.IDLE;
    });
    builder.addCase(getWeatherByCity.rejected, (state, action) => {
      state.status = Status.FAILED;
      state.error = action.payload;
    });
    builder.addCase(getDateWeather.pending, (state, action) => {
      state.status = Status.PENDING;
      // state.updateStatus = Status.IDLE;
    });
    builder.addCase(getDateWeather.fulfilled, (state, action) => {
      state.status = Status.SUCCEEDED;
      state.timeWeather = action.payload;
      // state.updateStatus = Status.IDLE;
    });
    builder.addCase(getDateWeather.rejected, (state, action) => {
      state.status = Status.FAILED;
      state.error = action.payload;
    });
  },
});

export const { setStatus, changeWeatherMode, deleteError, submitCity } =
  weatherReducer.actions;

export const selectCityWeather = (state: RootState) =>
  state.weather.cityWeather;

export const selectWeatherMode = (state: RootState): WeatherMode =>
  state.weather.weatherMode;

export const selectCity = (state: RootState): string => state.weather.city;

export const selectError = (state: RootState): string => state.weather.error;

export const selectTimeWeather = (state: RootState) =>
  state.weather.timeWeather;

export default weatherReducer.reducer;
