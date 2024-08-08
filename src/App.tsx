import React from "react";
import "./App.css";
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  );
}

export default App;
