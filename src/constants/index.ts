export const units = [
  {
    title: "C",
    id: "metric",
  },
  {
    title: "F",
    id: "imperial",
  },
];

export enum WeatherMode {
  METRIC = "metric",
  IMPERIAL = "imperial",
}

export const API_KEY = "918041bd2cdcb78d8a0082607c82e806";

export const ENV_URL = "https://api.openweathermap.org/data/2.5";

export const filterDate = (date: string): string => {
  return date.substring(0, date.indexOf(" "));
};

export const returnMode = (value: WeatherMode) =>
  value === WeatherMode.METRIC ? "C" : "F";
