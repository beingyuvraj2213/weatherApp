import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
    </div>
  );
};

export default Loader;
