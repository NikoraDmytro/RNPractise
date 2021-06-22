const TIME_STAMPS = 8;

export const organizeWeatherForecast = (data) => {
  let OrganizedWeatherForecast = new Array();

  data.dataseries.forEach((weather, index) => {
    const day = Math.trunc(index / TIME_STAMPS);

    if (!OrganizedWeatherForecast[day])
      OrganizedWeatherForecast[day] = new Array();

    OrganizedWeatherForecast[day].push(weather);
  });

  return OrganizedWeatherForecast;
};
