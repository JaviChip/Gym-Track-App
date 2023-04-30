import React, { useState, useEffect } from 'react';
import './DateDisplay.css';


const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Get the day of the week
  const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });

  // Get the current date
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div className="date-container">
      <div className="day-of-week">{dayOfWeek}</div>
      <div className="current-date">{formattedDate}</div>
    </div>
  );
};

export default DateDisplay;
