import { Container } from "@mui/material";
import LocationSelect from "../components/LocationSelect";
import CircularLoading from "../components/Utils/CircularLoading";
import { useState } from 'react';
import WeatherInfo from './../components/WeatherInfo';
import Error from '../components/Utils/Error';

const URL = 'https://api.open-meteo.com/v1/forecast';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);

  const onCitySelected = async (selectedCity) => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}?latitude=${selectedCity.lat}&longitude=${selectedCity.lng}&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,showers_sum,snowfall_sum&timezone=America%2FNew_York`);
      const jsonData = await response.json();
      setWeatherData(jsonData);
      setError(false);
    } catch (e) {
      setError(true);
      console.log(e);
    }
    setLoading(false);
  }

  return <Container>
    <LocationSelect onChange={onCitySelected} />
    {error ?
      <Error /> :
      loading ?
        <CircularLoading /> :
        weatherData && <WeatherInfo weatherData={weatherData} />
    }
  </Container>;
}



