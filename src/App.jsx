import React, {useState, useEffect} from 'react';
import CityList from './components/CityList';
import WeatherInfo from './components/WeatherInfo';

const API_KEY = '33296e4aaad68206aa183494303b22f3';

//Functional component App

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect( () => {

    const fetchWeatherData = async (lat, lon) => {

      try {

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
  
        // Parsing the JSON response
        const data = await response.json()
  
        //Temperature in Farenheit
        const temperature = Math.round((data.main.temp - 273.15) * (9/5) + 32)
        const icon = data.weather[0].icon;
  
        setWeatherData({temperature, icon});
  


      } catch (error) {

        console.error('Oops! There was an error.', error);
      }

      

    };

    if (selectedCity) {
      fetchWeatherData(selectedCity.lat, selectedCity.lon);
    }

  }, [selectedCity]);

  return (
    <div>
      <h1> My Weather App </h1>
      <div>
        <CityList onCityClick={setSelectedCity} />
        {weatherData && <WeatherInfo weatherData={weatherData}>/</WeatherInfo>}
      </div>
    </div>

  );
  
};

export default App
