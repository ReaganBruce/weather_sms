import { weatherEnv } from "../env.js";

const getLocalWeather = async () => {
  const local = "Birmingham";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${weatherEnv.weatherApiKey}`;
  const response = await fetch(weatherUrl);
  const data = await response.json();
  try {
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

export { getLocalWeather };