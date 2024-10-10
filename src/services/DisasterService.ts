// src/services/DisasterService.ts
import axios from 'axios';

const disasterApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
;
export const getDisasterData = async (region: string) => {
  const response = await axios.get(`https://api.disaster.com/v1/data/${region}?apiKey=${disasterApiKey}`);
  return response.data;
};
