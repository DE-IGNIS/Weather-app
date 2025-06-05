require("dotenv").config();

const KEY = process.env.API_KEY;

exports.cityWeather = async (req, res) => {
  const cityName = req.query.city;
  let latitude = 0;
  let longitude = 0;
  let state = "";
  if (!cityName) {
    res.status(400).json({
      message: "City name is required",
    });
  }
  const url1 = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${KEY}`;

  try {
    const response = await fetch(url1);
    if (!response.ok) {
      console.log(`Due to ${response.status} data couldn't be fetched`);
    }
    const data = await response.json();

    latitude = data[0].lat;
    longitude = data[0].lon;
    state = data[0].state;

    const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=metric`;

    const mainResponse = await fetch(url2);
    if (!response.ok) {
      console.log(`Due to ${response.status} data couldn't be fetched`);
    }
    const mainData = await mainResponse.json();
    res.json({
      City: cityName,
      State : state,
      Country: mainData["sys"].country,
      Latitude: latitude,
      Longitude: longitude,
      Temperature: mainData["main"].temp,
      FeelsLike: mainData["main"].feels_like,
      Temperature_min: mainData["main"].temp_min,
      Temperature_max: mainData["main"].temp_max,
      Pressure: mainData["main"].pressure,
      Humidity: mainData["main"].humidity,
    });
  } catch (error) {
    res.status(500).json({
      message: `Failed to fetch city/weather data because ${error}`,
    });
  }
};
