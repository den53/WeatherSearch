import axios from 'axios';

const API_KEY = '45d2f07e29cafbfec601c2c546e2c2e0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// create action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: ', request); 

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
