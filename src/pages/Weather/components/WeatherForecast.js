import React from "react";
import { Text, ListItem, Grid, Col, Row } from "native-base";
import { WeatherIcon } from "./WeatherIcon";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const getDate = (day) => {
  const forecastDate = new Date();
  forecastDate.setDate(forecastDate.getDate() + day);

  const date = forecastDate.getDate();
  const month = monthNames[forecastDate.getMonth()];

  return month + " " + date;
};

export const OneDayWeatherForecast = ({ weatherForecast, day }) => {
  const date = getDate(day);

  return (
    <ListItem>
      <Grid>
        <Col key={day} style={{ flex: 2 }}>
          <Text>{date}</Text>
        </Col>

        {weatherForecast.map((weatherInfo) => (
          <Col key={weatherInfo.timepoint} style={{ flex: 1, marginRight: 2 }}>
            <WeatherIcon weather={weatherInfo.weather} />
          </Col>
        ))}
      </Grid>
    </ListItem>
  );
};
