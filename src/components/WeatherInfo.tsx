import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const fetchWeatherData = async (lat: number, lng: number) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`);
  return response.data;
};

const WeatherInfo: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetchWeatherData(lat, lng).then(data => setWeather(data));
  }, [lat, lng]);

  return (
    weather ? (
      <div>
        <h4>Current Weather</h4>
        <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Conditions: {weather.weather[0].description}</p>
      </div>
    ) : <p>Loading weather data...</p>
  );
};

export default WeatherInfo;
