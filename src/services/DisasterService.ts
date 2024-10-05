// src/services/DisasterService.ts
import axios from 'axios';

const disasterApiKey = 'YOUR_DISASTER_API_KEY';

export const getDisasterData = async (region: string) => {
  const response = await axios.get(`https://api.disaster.com/v1/data/${region}?apiKey=${disasterApiKey}`);
  return response.data;
};
