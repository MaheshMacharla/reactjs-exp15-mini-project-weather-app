import React from 'react';
import './WeatherForecast.css';

const WeatherForecast = ({ forecast }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  };

  const formatTemperature = (temp) => {
    return Math.round(temp);
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="weather-forecast">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-list">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-day">
              {formatDate(day.dt)}
            </div>
            <div className="forecast-icon">
              <img 
                src={getWeatherIcon(day.weather[0].icon)} 
                alt={day.weather[0].description}
              />
            </div>
            <div className="forecast-temp">
              {formatTemperature(day.main.temp)}°C
            </div>
            <div className="forecast-description">
              {day.weather[0].description.charAt(0).toUpperCase() + 
               day.weather[0].description.slice(1)}
            </div>
            <div className="forecast-details">
              <div className="forecast-detail">
                <span className="detail-icon">💧</span>
                <span>{day.main.humidity}%</span>
              </div>
              <div className="forecast-detail">
                <span className="detail-icon">💨</span>
                <span>{Math.round(day.wind.speed * 3.6)} km/h</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
