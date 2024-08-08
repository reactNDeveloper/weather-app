import { filterDate, returnMode } from "../../constants";
import "./WeatherCard.css";
import { useAppSelector } from "../../store/hooks";
import { selectWeatherMode } from "../../store/weather";
const WeatherCardItem = ({ date, temp, img }: any) => {
  const weatherMode = useAppSelector(selectWeatherMode);

  return (
    <div className="card">
      <div className="flex-div">
        <text className="date">{filterDate(date)}</text>
      </div>
      <div className="centered-div">
        <text className="date-text">
          {temp} {returnMode(weatherMode)}
        </text>
        <img
          alt="icn"
          className="img"
          src={`https://openweathermap.org/img/wn/${img}@2x.png`}
        />
      </div>
    </div>
  );
};

export default WeatherCardItem;
