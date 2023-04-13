import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import cities from "./cities";
import WeatherForecast from "./WeatherForecast";
import { Icon } from "leaflet";

const customMarkerIcon = new Icon({
  iconUrl: "/assets/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const fetchWeatherData = async (lat, lon) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=539a92a71fbb1b6ee46f8afdfc95bb2e`
    );

    setWeatherData(response.data);
  };

  return (
    <div className="App">
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={3}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city, index) => (
          <Marker
            key={index}
            position={[city.lat, city.lon]}
            icon={customMarkerIcon}
            eventHandlers={{
              click: () => {
                fetchWeatherData(city.lat, city.lon);
                setSelectedCity(city.name);
              },
            }}
          >
            <Popup>
              {city.name}
              <WeatherForecast
                cityName={city.name}
                selectedCity={selectedCity}
                weatherData={weatherData}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
