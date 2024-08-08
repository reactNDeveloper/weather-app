import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENV_URL, API_KEY } from "../../constants";

export const getWeatherByCity = createAsyncThunk(
  "weather/city",
  async (params: any, thunkAPI) => {
    try {
      const { text, weatherMode } = params;
      const res = await fetch(
        `${ENV_URL}/weather?q=${text}&appid=${API_KEY}&units=${weatherMode}`
      );
      if (res.status === 200) {
        const responseData = await res.json();
        return responseData;
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue("Wrong name, please try again");
    }
  }
);

export const getDateWeather = createAsyncThunk(
  "weather/time",
  async (params: any, thunkAPI) => {
    try {
      const { text, weatherMode } = params;
      const res = await fetch(
        `${ENV_URL}/forecast?q=${text}&appid=${API_KEY}&units=${weatherMode}&exclude=hourly`
      );
      const responseData = await res.json();
      const list = responseData.list;
      let arr = [];
      for (let i = 0; i < list.length - 1; i++) {
        let time = list[i].dt_txt?.substring(list[i].dt_txt.indexOf(" ") + 1);
        if (time === "00:00:00") {
          arr.push(list[i]);
        }
      }
      return arr;
    } catch (e: any) {
      return thunkAPI.rejectWithValue("Wrong name, please try again");
    }
  }
);
