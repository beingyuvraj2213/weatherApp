import React from "react";

const SearchBar = ({ city, setCity, fetchWeather }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
      <input
        type="text"
        placeholder="Search city..."
        className="w-full sm:w-72 px-5 py-3 rounded-xl text-gray-800 placeholder-gray-500 border border-gray-300 bg-white/90 backdrop-blur-md shadow-md focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition-all duration-200"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={()=>fetchWeather()}
        className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
      >
        🔍 Search
      </button>
    </div>
  );
};

export default SearchBar;
