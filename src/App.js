import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import WeatherForm from './components/WeatherForm';
import WeatherForecast from './components/WeatherForecast';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('London');

  // Default weather data for demonstration
  const defaultWeather = {
    name: 'London',
    main: {
      temp: 15,
      feels_like: 13,
      humidity: 65,
      pressure: 1013
    },
    weather: [{
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    wind: {
      speed: 3.5
    },
    visibility: 10000
  };

  const defaultForecast = [
    {
      dt: Date.now() + 86400000,
      main: { temp: 16, humidity: 70 },
      weather: [{ main: 'Rain', description: 'light rain', icon: '10d' }],
      wind: { speed: 4.2 }
    },
    {
      dt: Date.now() + 172800000,
      main: { temp: 18, humidity: 60 },
      weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
      wind: { speed: 2.8 }
    },
    {
      dt: Date.now() + 259200000,
      main: { temp: 14, humidity: 80 },
      weather: [{ main: 'Clouds', description: 'few clouds', icon: '02d' }],
      wind: { speed: 3.1 }
    },
    {
      dt: Date.now() + 345600000,
      main: { temp: 20, humidity: 55 },
      weather: [{ main: 'Sunny', description: 'sunny', icon: '01d' }],
      wind: { speed: 2.5 }
    },
    {
      dt: Date.now() + 432000000,
      main: { temp: 17, humidity: 65 },
      weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
      wind: { speed: 3.8 }
    }
  ];

  useEffect(() => {
    // Initialize with default data
    setWeatherData(defaultWeather);
    setForecastData(defaultForecast);
  }, []);

  const handleSearch = async (searchCity) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll use mock data
      // In a real app, you would call a weather API here
      const mockWeather = {
        ...defaultWeather,
        name: searchCity,
        main: {
          ...defaultWeather.main,
          temp: Math.floor(Math.random() * 20) + 5
        }
      };
      
      setWeatherData(mockWeather);
      setCity(searchCity);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>Weather App</h1>
          <p>Get current weather and forecast for any city</p>
        </header>

        <WeatherForm onSearch={handleSearch} loading={loading} />

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} />}

        {weatherData && !loading && !error && (
          <>
            <WeatherCard weather={weatherData} />
            <WeatherForecast forecast={forecastData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
