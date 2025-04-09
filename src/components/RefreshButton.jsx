// components/RefreshButton.jsx
import React from "react";
import { RotateCw } from "lucide-react";

const RefreshButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-200"
    >
      <RotateCw className="w-4 h-4" />
      Refresh
    </button>
  );
};

export default RefreshButton;
