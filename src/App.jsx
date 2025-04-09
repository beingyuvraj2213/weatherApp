import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import RecentSearches from "./components/RecentSearches";
import RefreshButton from "./components/RefreshButton";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [recentSearches, setRecentSearches] = useState(() => {
    const stored = localStorage.getItem("recentSearches");
    return stored ? JSON.parse(stored) : [];
  });

  const updateRecentSearches = (cityName) => {
    const latest = [
      cityName,
      ...recentSearches.filter((c) => c !== cityName),
    ].slice(0, 5);
    setRecentSearches(latest);
    localStorage.setItem("recentSearches", JSON.stringify(latest));
  };

  const fetchWeather = async (cityName) => {
    const query = cityName || city;
    if (!query.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);
    setForecast([]);

    try {
      const key = import.meta.env.VITE_WEATHER_API_KEY;

      const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=metric`;
      const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${key}&units=metric`;

      const [currentRes, forecastRes] = await Promise.all([
        axios.get(currentURL),
        axios.get(forecastURL),
      ]);

      setWeather(currentRes.data);
      updateRecentSearches(query);
      setCity(query);

      const dailyData = forecastRes.data.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5);

      setForecast(dailyData);
    } catch (err) {
      setError("Could not fetch weather. Please check the city name.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={
        isDarkMode
          ? "app-dark min-h-screen px-4 py-10 flex flex-col items-center"
          : "app-light min-h-screen px-4 py-10 flex flex-col items-center"
      }
    >
      {/* Framer motion is applied here */}
      <motion.h1
        className="text-4xl font-bold mb-4 text-center"
        style={{ color: isDarkMode ? "#e0e7ff" : "#3730a3" }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        🌦️ My Weather App
      </motion.h1>


      <button className="toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
      </button>

      {/* Showing 5 recent searches over here, stored these using localhost in user storage only */}
      <RecentSearches
        recentSearches={recentSearches}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />

      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

      {loading && (
        <p className="mt-6 text-lg animate-pulse">Fetching weather...</p>
      )}
      {/* Showing the error message over here */}
      {error && <p className="mt-6 text-red-500 font-semibold">{error}</p>}

      {weather && !loading && !error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <WeatherCard data={weather} />
          <div className="w-full flex justify-center my-4">
            <RefreshButton onClick={() => fetchWeather(city)} />
          </div>
          <ForecastList forecast={forecast} />
        </motion.div>
      )}
    </div>
  );
};

export default App;
