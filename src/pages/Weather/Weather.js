import { Container, Text, List, ListItem } from "native-base";
import React from "react";
import { DefaultHeader } from "../../components/DefaultHeader";
import { DefaultLoading } from "../../components/DefaultLoading";
import { useWeather } from "./utils/hooks/useWeather";

export const Weather = () => {
  const weatherForecast = useWeather();

  const renderWeatherForecast = ({ item }) => {
    return (
      <ListItem>
        <Text>{item.weather}</Text>
      </ListItem>
    );
  };

  if (!weatherForecast) return <DefaultLoading title="Weather" />;

  return (
    <Container>
      <DefaultHeader />
      <List
        dataArray={weatherForecast.dataseries}
        renderItem={renderWeatherForecast}
        keyExtractor={(item) => item.timepoint}
      />
    </Container>
  );
};
