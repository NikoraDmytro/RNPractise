import { Container, List } from "native-base";
import React from "react";
import { DefaultHeader } from "../../components/DefaultHeader";
import { DefaultLoading } from "../../components/DefaultLoading";
import { useWeather } from "./utils/hooks/useWeather";
import { organizeWeatherForecast } from "./utils/functions/organizeWeatherForecast.js";
import { OneDayWeatherForecast } from "./components/WeatherForecast";

export const Weather = () => {
  const data = useWeather();

  if (!data) return <DefaultLoading title="Weather" />;

  const renderWeatherForecast = ({ item, index }) => (
    <OneDayWeatherForecast weatherForecast={item} day={index} />
  );

  const WeatherForecast = organizeWeatherForecast(data);

  return (
    <Container>
      <DefaultHeader />
      <List
        dataArray={WeatherForecast}
        renderItem={renderWeatherForecast}
        keyExtractor={(item) => item[0].timepoint}
      />
    </Container>
  );
};
