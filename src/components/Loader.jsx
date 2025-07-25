// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-600 font-medium text-sm">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
