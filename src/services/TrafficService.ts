// src/services/TrafficService.ts
import axios from 'axios';

const trafficApiKey = 'YOUR_TRAFFIC_API_KEY';

export const getTrafficData = async (location: string) => {
  const response = await axios.get(`https://api.traffic.com/data/${location}?apiKey=${trafficApiKey}`);
  return response.data;
};

export async function fetchRealTimeTraffic(): Promise<any[]> {
  const response = await fetch('https://api.city-traffic.com/traffic');
  const data = await response.json();
  return data.traffic;
}