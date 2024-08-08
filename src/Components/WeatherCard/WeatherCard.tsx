import { useAppSelector } from "../../store/hooks";
import { selectTimeWeather, selectWeatherMode } from "../../store/weather";
import "./WeatherCard.css";
import WeatherCardItem from "./WeatherCardItem";

const WeatherCard = () => {
  const weathers = useAppSelector(selectTimeWeather);

  return (
    <div className="row-div">
      {weathers?.map((item: any, i: string) => (
        <WeatherCardItem
          key={i}
          date={item.dt_txt}
          temp={item.main.temp}
          img={item.weather[0].icon}
        />
      ))}
    </div>
  );
};

export default WeatherCard;
