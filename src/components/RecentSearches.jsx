// components/RecentSearches.jsx
import React from "react";
import { motion } from "framer-motion";

const RecentSearches = ({ recentSearches, setCity, fetchWeather }) => {
  if (recentSearches.length === 0) return null;

  return (
    <motion.div
      className="w-full max-w-md bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-md mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-base font-semibold text-indigo-700 mb-2 text-center">
        Recent Searches
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {recentSearches.map((c, i) => (
          <button
            key={i}
            onClick={() => fetchWeather(c)}
            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 transition"
          >
            {c}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentSearches;
