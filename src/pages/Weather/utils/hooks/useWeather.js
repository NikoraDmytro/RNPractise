import { useEffect, useState } from "react";
import { getDeviceGeolocation } from "../functions/getDeviceGeolocation.js";

export const useWeather = () => {
  const [weatherForecast, setWeatherForecast] = useState();

  useEffect(() => {
    const getWeatherForecast = async () => {
      try {
        const location = await getDeviceGeolocation();
        if (!location) {
          setWeatherForecast(null);
          return;
        }
        const response = await fetch(
          `https://www.7timer.info/bin/civil.php?lon=${location.longitude}&lat=${location.latitude}&ac=0&unit=metric&output=json&tzshift=0`
        );
        const weather = await response.json();
        setWeatherForecast(weather);
      } catch (err) {
        console.log(err);
      }
    };

    if (!weatherForecast) {
      getWeatherForecast();
    }
  });

  return weatherForecast;
};
