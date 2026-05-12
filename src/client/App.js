import React, { useEffect, useState } from 'react';
import './app.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <button
        type="button"
        className="theme-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="time-container">
        <h1>Current Date & Time</h1>
        <p>{currentDateTime.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default App;
