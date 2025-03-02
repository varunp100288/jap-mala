import { useState, useEffect } from "react";

const DailyCounter = ({ dailyTotal, resetDailyTotal  }) => {
  return (
    <div className="text-center p-4 bg-white shadow-md rounded-lg mb-4">
      <h2 className="text-xl font-bold text-green-700">Total Jap Counts</h2>
      <p className="text-2xl font-semibold text-gray-800">{dailyTotal}</p>
      <button
        onClick={resetDailyTotal}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Reset Total Count
      </button>
    </div>
  );
};

export default DailyCounter;
