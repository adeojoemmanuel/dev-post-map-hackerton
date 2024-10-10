// src/services/WeatherService.ts
import axios from 'axios';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export const getWeatherData = async (location: string) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
  return response.data;
};
