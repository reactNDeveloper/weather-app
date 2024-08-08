import React, { useEffect, useState } from "react";
import "./WeatherApp.css";
import WeatherHeader from "../WeatherHeader/WeatherHeader";
import WeatherMain from "../WeatherMain/WeatherMain";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  getDateWeather,
  getWeatherByCity,
} from "../../store/weather/asyncActions";
import {
  selectWeatherMode,
  selectCityWeather,
  selectCity,
  selectError,
  deleteError,
} from "../../store/weather";
import Modal from "../../sreens/Modal";

const WeatherApp = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);

  const [isModalOpen, setModalOpen] = useState(!!error);

  const openModal = () => setModalOpen(true);
  const closeModal = () => dispatch(deleteError());

  const weatherMode = useAppSelector(selectWeatherMode);
  const weater = useAppSelector(selectCityWeather);
  const city = useAppSelector(selectCity);

  const getWeather = () => {
    dispatch(getWeatherByCity({ text: city, weatherMode }));
    dispatch(getDateWeather({ text: city, weatherMode }));
  };

  useEffect(() => {
    getWeather();
  }, [dispatch, weatherMode, city]);
  return (
    <div className="App">
      <WeatherHeader />
      {weater && <WeatherMain cityWeater={weater} weatherMode />}
      <Modal isOpen={!!error} onClose={closeModal} title="Something Went wrong">
        <p>{error}</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
      <WeatherCard />
    </div>
  );
};

export default WeatherApp;
