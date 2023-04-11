import React from "react";

const WeatherForecast = ({ cityName, selectedCity, weatherData }) => {
  if (!weatherData || cityName !== selectedCity) {
    return null;
  }

  const dailyForecasts = weatherData.daily.slice(0, 3);
  console.log("dailyForecasts", dailyForecasts);

  return (
    <div>
      {dailyForecasts.map((forecast, index) => (
        <div key={index}>
          <h3>Day {index + 1}:</h3>
          <p>Temp: {Math.round(forecast.temp.day - 273.15)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
