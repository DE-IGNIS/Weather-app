import { useState } from "react";
import "./CityWeather.css"; // Create this CSS file

function CityWeather() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({
    City: "",
    State: "",
    Country: "",
    Latitude: 0,
    Longitude: 0,
    Temperature: 0,
    FeelsLike: 0,
    Temperature_min: 0,
    Temperature_max: 0,
    Pressure: 0,
    Humidity: 0,
  });
  const [fetchDone, setFetchDone] = useState(false);

  function handleInputChange(e) {
    setCityName(e.target.value);
  }

  const getWeatherData = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8000/api/weather?city=${cityName}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`Couldn't fetch data: ${response.status}`);
        setFetchDone(false);
        return;
      }
      const data = await response.json();
      setWeather({
        City: data["City"],
        State: data["State"],
        Country: data["Country"],
        Latitude: data["Latitude"],
        Longitude: data["Longitude"],
        Temperature: data["Temperature"],
        FeelsLike: data["FeelsLike"],
        Temperature_min: data["Temperature_min"],
        Temperature_max: data["Temperature_max"],
        Pressure: data["Pressure"],
        Humidity: data["Humidity"],
      });
      setFetchDone(true);
    } catch (error) {
      console.error(`Error log: ${error}`);
      setFetchDone(false);
    }
  };

  return (
    <div className="weather-container">
      <form className="search-bar" onSubmit={getWeatherData}>
        <input
          type="text"
          value={cityName}
          onChange={handleInputChange}
          placeholder="Enter city name..."
          required
        />
        <button type="submit">Search</button>
      </form>

      {fetchDone && (
        <div className="weather-card">
          <h2>
            {weather.City}
            {weather.State && `, ${weather.State}`}
            {weather.Country && `, ${weather.Country}`}
          </h2>
          <div className="weather-main">
            <span className="temp">{weather.Temperature}°C</span>
            <span className="feels-like">
              Feels like: {weather.FeelsLike}°C
            </span>
          </div>
          <div className="weather-details">
            <div>
              <strong>Min:</strong> {weather.Temperature_min}°C
            </div>
            <div>
              <strong>Max:</strong> {weather.Temperature_max}°C
            </div>
            <div>
              <strong>Humidity:</strong> {weather.Humidity}%
            </div>
            <div>
              <strong>Pressure:</strong> {weather.Pressure} hPa
            </div>
            <div>
              <strong>Lat/Lon:</strong> {weather.Latitude}, {weather.Longitude}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CityWeather;
