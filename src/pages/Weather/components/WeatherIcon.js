import React from "react";
import { Text } from "native-base";
import styled from "styled-components";
import { Dimensions } from "react-native";

export const WeatherIcon = ({ weather }) => {
  if (weather === "clearday" || weather === "clearnight")
    return <WeatherImage source={require("../img/clear_sky.png")} />;
  if (weather === "pcloudyday" || weather === "pcloudynight")
    return <WeatherImage source={require("../img/partly_cloudy.png")} />;
  if (weather === "mcloudyday" || weather === "mcloudynight")
    return <WeatherImage source={require("../img/cloudy.png")} />;
  if (weather === "cloudyday" || weather === "cloudynight")
    return <WeatherImage source={require("../img/very_cloudy.png")} />;
  if (weather === "humidday" || weather === "humidnight")
    return <WeatherImage source={require("../img/fog.png")} />;
  if (weather === "lightrainday" || weather === "lightrainnight")
    return <WeatherImage source={require("../img/light_rain.png")} />;
  if (weather === "oshowerday" || weather === "oshowernight")
    return <WeatherImage source={require("../img/occasional_showers.png")} />;
  if (weather === "ishowerday" || weather === "ishowernight")
    return <WeatherImage source={require("../img/isolated_showers.png")} />;
  if (weather === "rainday" || weather === "rainnight")
    return <WeatherImage source={require("../img/rain.png")} />;
  if (weather === "lightsnowday" || weather === "lightsnownight")
    return <WeatherImage source={require("../img/light_snow.png")} />;
  if (weather === "snowday" || weather === "snownight")
    return <WeatherImage source={require("../img/snow.png")} />;
  if (weather === "rainsnowday" || weather === "rainsnownight")
    return <WeatherImage source={require("../img/sleet.png")} />;
  if (weather === "tsday" || weather === "tsnight")
    return <WeatherImage source={require("../img/thunder.png")} />;
  if (weather === "tsrainday" || weather === "tsrainnight")
    return <WeatherImage source={require("../img/thunderstorm.png")} />;
  return <Text>{weather}</Text>;
};

const size = Dimensions.get("window").width / 12;
const WeatherImage = styled.Image`
  height: ${size}px;
  width: ${size}px;
`;
