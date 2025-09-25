import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const formatTemperature = (temp) => {
    return Math.round(temp);
  };

  const formatWindSpeed = (speed) => {
    return Math.round(speed * 3.6); // Convert m/s to km/h
  };

  const formatVisibility = (visibility) => {
    return Math.round(visibility / 1000); // Convert meters to kilometers
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">{weather.name}</h2>
        <div className="weather-icon">
          <img 
            src={getWeatherIcon(weather.weather[0].icon)} 
            alt={weather.weather[0].description}
          />
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{formatTemperature(weather.main.temp)}</span>
          <span className="temp-unit">°C</span>
        </div>
        <div className="weather-description">
          {weather.weather[0].description.charAt(0).toUpperCase() + 
           weather.weather[0].description.slice(1)}
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels like</span>
          <span className="detail-value">{formatTemperature(weather.main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{weather.main.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{formatWindSpeed(weather.wind.speed)} km/h</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Visibility</span>
          <span className="detail-value">{formatVisibility(weather.visibility)} km</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
