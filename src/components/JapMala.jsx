import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import DailyCounter from "./DailyCounter"; // Import Daily Counter

export default function JapMala() {
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem("japCount")) || 0;
  });
  const [dailyTotal, setDailyTotal] = useState(() => {
    return parseInt(localStorage.getItem("dailyTotal")) || 0;
  });

  const maxCount = 108;

  // Load Sounds
  const clickSound = new Howl({ src: ["/sounds/click.mp3"] });
  const completeSound = new Howl({ src: ["/sounds/complete.mp3"] });
  const resetSound = new Howl({ src: ["/sounds/reset.mp3"] });

  // Save counts in localStorage
  useEffect(() => {
    localStorage.setItem("japCount", count);
    localStorage.setItem("dailyTotal", dailyTotal);
  }, [count, dailyTotal]);

  const increment = () => {
    setCount((prev) => (prev < maxCount ? prev + 1 : prev));
    setDailyTotal((prev) => prev + 1); // Increase daily count on each click
    clickSound.play();

    if (count + 1 === maxCount) {
      completeSound.play();
      setCount(0); // Reset Mala cycle
    }
  };

  const reset = () => {
    setCount(0);
    resetSound.play();
  };

  const resetDailyTotal = () => {
    setDailyTotal(0);
    resetSound.play();
  };
  return (
    <div className="flex flex-col items-left min-h-screen bg-gray-100">
      {/* Live Updating Daily Counter */}
      <DailyCounter dailyTotal={dailyTotal} resetDailyTotal={resetDailyTotal} />

      <motion.div
        className={`bg-white shadow-lg p-8 rounded-2xl text-center transition-all ${
          count === maxCount ? "border-4 border-yellow-500 shadow-2xl" : ""
        }`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4 text-pink-800">
          Let's Counts 108 Names
        </h1>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
          <motion.div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${(count / maxCount) * 100}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${(count / maxCount) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          ></motion.div>
        </div>
        {/* Bead Animation (Moves as you count) */}
        <motion.div
          className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4"
          animate={{
            rotate: (count / maxCount) * 360, // Moves in a circle
          }}
          transition={{ type: "spring", stiffness: 50 }}
        ></motion.div>

        {/* Animated Counter Display */}
        <motion.p
          key={count}
          className="text-2xl font-bold mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 0.2, type: "spring" }}
        >
          {count} / {maxCount}
        </motion.p>

        {/* Animated Count Button with Bounce Effect */}
        {/* <motion.button
          onClick={increment}
          className="relative px-6 py-3 bg-blue-500 text-white text-lg rounded-lg overflow-hidden"
          whileTap={{ scale: 0.9 }}
          whileHover={{ boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.6)" }}
        >
          <span className="absolute inset-0 flex items-center justify-center bg-blue-700 opacity-0 transition-opacity duration-300"></span>
          Count +1
        </motion.button> */}
        <motion.button
          onClick={increment}
         className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg overflow-hidden relative mr-2"
          whileTap={{ scale: 0.9 }}
          whileHover={{ boxShadow: "0px 0px 10px rgba(239, 68, 68, 0.6)" }}
        >
          Count Now
        </motion.button>

        {/* Animated Reset Button */}
        <motion.button
          onClick={reset}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg overflow-hidden relative"
          whileTap={{ scale: 0.9 }}
          whileHover={{ boxShadow: "0px 0px 10px rgba(239, 68, 68, 0.6)" }}
        >
          Reset
        </motion.button>
      </motion.div>
    </div>
  );
}
