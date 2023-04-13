import React from "react";

const WeatherForecast = ({ cityName, selectedCity, weatherData }) => {
  if (!weatherData || cityName !== selectedCity) {
    return null;
  }
  const dailyForecasts = weatherData.daily.slice(1, 4);

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-red-600">{cityName}</h2>
        <p className="font-1_5">
          {Math.round(weatherData.current.temp - 273.15)}°C
        </p>
        <img
          src={`http://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`}
          alt="weather icon"
        />
      </div>
      <hr />
      {dailyForecasts.map((forecast, index) => {
        const date = new Date(forecast.dt * 1000);
        const dayOfWeek = date.toLocaleDateString("en-US", {
          weekday: "short",
        });
        return (
          <div key={index} className="grid grid-col-3">
            <h3>{dayOfWeek}.</h3>
            <img
              src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
              alt="weather icon"
              className="w-25px h-25px self-center"
            />
            <p className="text-right">
              {Math.round(forecast.temp.day - 273.15)}°C
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecast;
