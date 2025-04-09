import React from "react";

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="mt-8 p-6 bg-white/80 rounded-2xl shadow-xl max-w-sm mx-auto text-center backdrop-blur-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>

      {/* Using the icon provided my the api */}
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
        className="w-20 h-20 mx-auto"
      />
      
      <p className="text-xl font-semibold text-gray-700">{weather[0].main}</p>
      <p className="text-4xl font-bold text-indigo-600 mt-2">{Math.round(main.temp)}°C</p>

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <p>🌡️ Humidity: {main.humidity}%</p>
        <p>💨 Wind Speed: {wind.speed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;
