// src/services/WeatherService.ts
import axios from 'axios';

const apiKey = 'YOUR_WEATHER_API_KEY';

export const getWeatherData = async (location: string) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
  return response.data;
};
