// components/ForecastList.jsx
import React from "react";
import { motion } from "framer-motion";
import ForecastCard from "./ForecastCard";

const ForecastList = ({ forecast }) => {
  if (forecast.length === 0) return null;

  return (
    <motion.div
      className="mt-10 w-full max-w-5xl px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-2xl font-bold text-indigo-800 mb-6 text-center tracking-wide"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        🌤️ 5-Day Forecast
      </motion.h2>

      <motion.div
        className="flex justify-center gap-6 flex-wrap"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {forecast.map((day, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ForecastCard day={day} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ForecastList;
