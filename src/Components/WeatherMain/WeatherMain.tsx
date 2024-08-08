import { WeatherMode, returnMode } from "../../constants";
import "./WeatherMain.css";

const WeatherMain = (data: any, weatherMode: WeatherMode) => {
  const { name, main, weather } = data.cityWeater;

  return (
    <div className="main">
      <div>
        <text>{name}</text>
      </div>
      <div>
        <text>
          {main.temp} {returnMode(weatherMode)}
        </text>
      </div>
      <div>
        <img
          alt="wn"
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          className="img-size"
        />
      </div>
      <div>
        <text> {weather[0].main}</text>
      </div>
    </div>
  );
};

export default WeatherMain;
