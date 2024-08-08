import "./WeatherHeader.css";
import { units } from "../../constants";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  selectWeatherMode,
  changeWeatherMode,
  submitCity,
} from "../../store/weather";
import { WeatherMode } from "../../constants";
import { useState } from "react";

const WeatherHeader = () => {
  const weather = useAppSelector(selectWeatherMode);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  return (
    <div className="header-main">
      <div className="search-div">
        <input className="search-input" onChange={onChange} value={input} />
        <button
          className="search-button"
          onClick={(): void => {
            dispatch(submitCity(input));
            setInput("");
          }}
        >
          Search city
        </button>
      </div>
      <div className="toggle-div">
        <label className="switch">
          <input
            type="radio"
            checked={weather === WeatherMode.METRIC}
            value={WeatherMode.METRIC}
            onChange={() => dispatch(changeWeatherMode(WeatherMode.METRIC))}
          />
        </label>
        <text>C </text>

        <label className="switch">
          <input
            type="radio"
            checked={weather === WeatherMode.IMPERIAL}
            value={WeatherMode.IMPERIAL}
            onChange={() => dispatch(changeWeatherMode(WeatherMode.IMPERIAL))}
          />
        </label>
        <text>F </text>
      </div>
    </div>
  );
};

export default WeatherHeader;
