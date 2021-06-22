import { Container, Text, List, ListItem } from "native-base";
import React from "react";
import { DefaultHeader } from "../../components/DefaultHeader";
import { DefaultLoading } from "../../components/DefaultLoading";
import { useWeather } from "./utils/hooks/useWeather";
import { organizeWeatherForecast } from "./utils/functions/organizeWeatherForecast.js";

export const Weather = () => {
  const data = useWeather();

  if (!data) return <DefaultLoading title="Weather" />;

  const renderWeatherForecast = ({ item }) => {
    return (
      <ListItem>
        <Text>{item[0].weather}</Text>
      </ListItem>
    );
  };

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
