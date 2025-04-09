import React from "react";

const ForecastCard = ({ day }) => {
  const date = new Date(day.dt_txt).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

  return (
    <div className="bg-white/80 p-4 rounded-xl shadow flex flex-col items-center text-center w-28">
      <p className="text-sm font-semibold text-indigo-600">{date}</p>
      <img src={icon} alt="weather icon" className="w-12 h-12" />
      <p className="text-md text-gray-700 font-medium">{Math.round(day.main.temp)}°C</p>
      <p className="text-sm text-gray-500">{day.weather[0].main}</p>
    </div>
  );
};

export default ForecastCard;
