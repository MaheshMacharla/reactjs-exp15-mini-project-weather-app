# Weather App

A modern, responsive weather application built with React that displays current weather conditions and 5-day forecasts for any city.

## Features

- **Props and State Management**: Uses React hooks (useState, useEffect) for state management
- **Conditional Rendering**: Shows different components based on loading, error, and data states
- **Form Input Handling**: Search functionality with controlled inputs and form validation
- **API Integration Ready**: Structured to easily integrate with weather APIs like OpenWeatherMap
- **Responsive Design**: Modern UI that works on desktop and mobile devices
- **5-Day Forecast**: Displays detailed weather forecast for the next 5 days
- **Loading States**: Smooth loading animations and error handling

## Technologies Used

- React 18
- CSS3 with modern features (Grid, Flexbox, Backdrop-filter)
- Axios for API calls (ready for integration)
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. The `netlify.toml` file is already configured
3. Deploy automatically on push to main branch

### Vercel

1. Connect your GitHub repository to Vercel
2. The `vercel.json` file is already configured
3. Deploy automatically on push to main branch

## API Integration

To integrate with a real weather API (like OpenWeatherMap):

1. Get an API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the mock data in `App.js` with actual API calls
3. Update the API endpoints and data structure as needed

Example API integration:
```javascript
const API_KEY = 'your-api-key';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

const response = await axios.get(API_URL);
const weatherData = response.data;
```

## Project Structure

```
src/
├── components/
│   ├── WeatherCard.js          # Main weather display
│   ├── WeatherForm.js          # Search form
│   ├── WeatherForecast.js      # 5-day forecast
│   ├── LoadingSpinner.js       # Loading state
│   └── ErrorMessage.js         # Error handling
├── App.js                      # Main application component
├── App.css                     # Main styles
├── index.js                    # Entry point
└── index.css                   # Global styles
```

## Features Demonstrated

- **Props**: Components receive data through props
- **State**: useState and useEffect hooks for state management
- **Conditional Rendering**: Different UI based on loading/error states
- **Lists**: Dynamic rendering of forecast data
- **Form Handling**: Controlled inputs with validation
- **API Ready**: Structured for easy API integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
